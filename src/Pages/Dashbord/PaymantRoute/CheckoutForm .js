
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button, CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../../context/AuthContext';
 import { ToastContainer, toast } from 'react-toastify';






const CheckoutForm = ({ appoinment, setPaymenterror }) => {
  const notify = () => toast.success(`Congrats? You are paid.`);

  const {user} = UseAuth()

  const { price, _id , displayName} = appoinment;

  // const { user } = UseAuth()

    // import stripe 
  const elements = useElements();
  const stripe = useStripe()
  const [clientSecretKey, setClientSecretKye] = useState(null)
  const [process, setisProcessing] = useState(false)   
 

  const Navigate = useNavigate()

  const Redirect = () => {
    setTimeout(navigateFunc, 5000);
  }

  const navigateFunc = () => {
      
    Navigate("/thankfull")

  }

 

 
  // fetch client secret 
  useEffect(() => {
    axios.post("http://localhost:4000/create-payment-intent",{price})
      .then(res =>  { 

        setClientSecretKye(res.data?.clientSecret)
        // console.log(res.data?.clientSecret)

      }  )
    
    
    
  },[price])

 
  // pay method 
  const handleSubmit = async (event) => {
    // stop loading page 
     event.preventDefault();
    
    // if stripe and elements are null then return null 
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

//  pay botton loading    
 setisProcessing(true)

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setPaymenterror(error.message)
      setisProcessing(false)
    } else {
      setPaymenterror("")
      console.log('[PaymentMethod]', paymentMethod);

         }
         
    
    // payment Intent
  
    // console.log(clientSecretKey)
 const {paymentIntent, error: IntentError} = await stripe.confirmCardPayment(
  clientSecretKey,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: displayName,
        email : user.email,
      },
    },
  },
);
    
    if (paymentIntent) {
      console.log('[paymentIntent]', paymentIntent)
      setPaymenterror("")
      // save on database 

      const payment = {
        amount: paymentIntent.amount,
        last4: paymentMethod.card.last4,
        created: paymentIntent.created,
        client_secret: paymentIntent.client_secret.split("_secret_")[0]
      }

      console.log(payment)

      const url = `http://localhost:4000/appoinment/${_id}`
      axios.put(url,payment)
        .then(res => {
      console.log(res.data)
          if (res.data.acknowledged) {
            setisProcessing(false)
            notify()
               Redirect()
       }
      

        }  )
        
      .catch (err => {
       setPaymenterror(err.message)
      })
          
     

      


        

    }
    else if (IntentError) {
      setPaymenterror(IntentError.message)
      setisProcessing(false) 
    }

       
  };
        
    return (
      <div>
        <ToastContainer/>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
          />
          
          {
            process? <Button sx={{width: "100px", margin: "auto"}} > <CircularProgress /> </Button>  : <Button  sx={{
                  backgroundColor: "#15D1C1",
                  color: "white",
                  padding: "7px 22px",
                  fontWeight: "bold",
                  marginTop: "25px",
                  width: "100%",
                }}  type="submit" disabled={!stripe}>
        Pay ${price}
      </Button>
          }
      
        </form>
        
        
        </div>
    )
};

export default CheckoutForm;
    


