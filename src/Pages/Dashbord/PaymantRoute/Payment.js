import { Box, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm ';

const stripePromise = loadStripe("pk_test_51JxW7cFfoD66Y8IUxKxCqLYnpbIwSQ4OmYswpL1pqbg4P8KW5awjozIPO9AdKoQSbONXbOsfK88urJiWRif4OQdO00TCvR5ywz");

const Payment = () => {

  const theme = useTheme();
  const costomDiv = makeStyles({

    container: { 

     [theme.breakpoints.up("md")]: {
        width : "100%", height: "100vh"
      }, 
    },

    div: {
      [theme.breakpoints.up("md")]: {
           display : "grid", placeItems: "center",  height: "100vh", justifyItems: "center" 
       }
    }

   
 } )
  
  const {div, container} = costomDiv({})





    const [paymetError, setPaymenterror] = useState("")
    const [appoinment, setAppoientment] = useState({});


    const { id } = useParams() 
    useEffect(() => {
           axios.get(`http://localhost:4000/appoientment/${id}`)
               .then(res => {
                   setAppoientment(res.data)
                  
               })

    },[id, setAppoientment])

    return (
<Box className={container}>
 <Container className={div}>
                <Grid container columns={13} gap={4} sx={{ display: "flex",  justifyContent: "center", alignItems: "center" }}>
        <Grid item xm={13} sm={13} md={6} lg={6} xlg={6} >
            <Paper sx={{padding: "30px"}} >
                <h2> Service name  {appoinment.title}</h2>
                <h5> Fee : ${appoinment.price} </h5>
            </Paper>
        </Grid>
           
                    <Grid item xm={13} sm={13} md={6} lg={6} xlg={6} >
                        <Paper sx={{padding: "30px"}}> 
             <h4>Choose your payment</h4>
                            <Elements stripe={stripePromise}>
                                
                                { appoinment?.price && 
                                 <CheckoutForm  setPaymenterror={setPaymenterror} appoinment={appoinment} />
                                }
                   
                            </Elements> 
                            <Typography sx={{color : "red", textAlign: "center", paddingTop: "10px"}}>{paymetError}</Typography>
                        </Paper>
                
            </Grid>
        </Grid>
    </Container>
</Box>
       
    );
};

export default Payment;