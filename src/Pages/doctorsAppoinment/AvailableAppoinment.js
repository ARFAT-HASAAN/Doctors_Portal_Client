import React from "react";
import AppoinmentModal from "./AppoinmentModal";
import { Container, Grid, Box, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
 import { ToastContainer, toast } from 'react-toastify';
const AvailableAppoinment = ({ date }) => {


  const appointments = [
    {
      key: 1,
      title: "Theet Orthodontics",
      space: 19,
      price: 20,
      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 2,
      title: "Cosmetic Dentistry",
      space: 1,
      price: 10,

      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 3,
      title: "Theeth Cleaning",
      space: 2,
      price: 30,

      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 4,
      title: "cavity Protection",

      space: 19,
      price: 20,

      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 5,
      title: "Theet fixing",
      space: 9,
      price: 50,

      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 6,
      title: "Teeth wasing",
      space: 19,
      price: 7,

      watchTime: "8:00 am - 9:00 pm",
    },
  ];



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
    },
 
    spaceing: {
      [theme.breakpoints.down("md")]: {
          
        marginTop : "20"
      }
    }
   
 } )
  
  const {div, container} = costomDiv({})


  const notify = () => toast.success(`Congrats? You have been create an appoinment on ${date.toDateString()}, `);

  return (
    <Box className={container} >
      
      <Container className={div} >
        <Box className={div} >  
          <ToastContainer
            position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
            pauseOnHover
          

/>
          
          <h3 className='spaceing'>
        Available Appoinment on {date.toDateString()}
      </h3>
          
          <h3 className="blue semibiseHeader" >Book your appoinment from here</h3>
          
          <Grid container columns={13} gap={5}>
            
          {appointments.map((appoinment) => (
            <AppoinmentModal
              appoinment={appoinment}
              toast={notify}
              key={appoinment.key}
              date={date}
             
            ></AppoinmentModal>
          ))}
          </Grid>
          </Box>
      </Container>
    </Box>
  );
};

export default AvailableAppoinment;
