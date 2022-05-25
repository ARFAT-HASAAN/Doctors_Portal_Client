import { Container, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {


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
    return (
        <div className={container}>
            <Container className={div}>
                <div className='textAlign '>
                     <h1 className='blue'>
                404
            </h1>
             
            <h4>
                Your searched page dosen't exist
            </h4>
             <Link to={"/"}>   <button className='btn'> Go back </button> </Link>

                </div>
                
            
            </Container>
           
             
        </div>
    );
};

export default Notfound;