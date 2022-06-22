import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UseAuth from '../../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import { Button, CircularProgress } from '@mui/material'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

const CheckoutForm = ({ appoinment, setPaymenterror }) => {
  // distructed appoinment details
  const { price, _id, displayName } = appoinment

  // hooks
  const [clientSecretKey, setClientSecretKye] = useState(null)
  const [process, setisProcessing] = useState(false)

  // fetch client secret id
  useEffect(() => {
    axios
      .post('https://still-chamber-41424.herokuapp.com/create-payment-intent', {
        price,
      })
      .then((res) => {
        setClientSecretKye(res.data?.clientSecret)
        // console.log(res.data?.clientSecret)
      })
  }, [price])

  // stripe methods
  const elements = useElements()
  const stripe = useStripe()

  // acton susses popup message
  const notify = () => toast.success(`Congrats? You are paid.`)

  //  distruced user from useatuth
  const { user } = UseAuth()

  // react dom meathods
  const Navigate = useNavigate()

  // after success action redirect function
  const Redirect = () => {
    setTimeout(navigateFunc, 5000)
  }

  // page navigate functon
  const navigateFunc = () => {
    Navigate('/thankfull')
  }

  // procced to pay function
  const handleSubmit = async (event) => {
    // stop loading page
    event.preventDefault()

    // if stripe and elements are null then return null
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    //  pay botton loading
    setisProcessing(true)

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setPaymenterror(error.message)
      setisProcessing(false)
    } else {
      setPaymenterror('')
      // console.log('[PaymentMethod]', paymentMethod)
    }

    // payment Intent

    // console.log(clientSecretKey)
    const {
      paymentIntent,
      error: IntentError,
    } = await stripe.confirmCardPayment(clientSecretKey, {
      payment_method: {
        card: card,
        billing_details: {
          name: displayName,
          email: user.email,
        },
      },
    })

    if (paymentIntent) {
      // console.log('[paymentIntent]', paymentIntent)
      setPaymenterror('')
      // save on database

      const payment = {
        amount: paymentIntent.amount,
        last4: paymentMethod.card.last4,
        created: paymentIntent.created,
        client_secret: paymentIntent.client_secret.split('_secret_')[0],
      }

      // console.log(payment)

      const url = `https://still-chamber-41424.herokuapp.com/appoinment/${_id}`
      axios
        .put(url, payment)
        .then((res) => {
          // console.log(res.data)
          if (res.data.acknowledged) {
            setisProcessing(false)
            notify()
            Redirect()
          }
        })

        .catch((err) => {
          setPaymenterror(err.message)
        })
    } else if (IntentError) {
      setPaymenterror(IntentError.message)
      setisProcessing(false)
    }
  }

  return (
    <div>
      <ToastContainer />
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

        {process ? (
          <Button sx={{ width: '100px', margin: 'auto' }}>
            {' '}
            <CircularProgress />{' '}
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: '#15D1C1',
              color: 'white',
              padding: '7px 22px',
              fontWeight: 'bold',
              marginTop: '25px',
              width: '100%',
            }}
            type="submit"
            disabled={!stripe}
          >
            Pay ${price}
          </Button>
        )}
      </form>
    </div>
  )
}

export default CheckoutForm
