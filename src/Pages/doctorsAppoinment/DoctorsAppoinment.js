import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Chair from "../assets/images/chair.png";
import Calender from "../Shared/Date/Calender";
import  "./AppoinmentBanner.css"

const DoctorsAppoinment = ({ date, setDate }) => {
  return (
    <Box style={{ backgroundImage: { Chair } }} id="appoinmentBanner"  sx={{ height: '100vh', width: "100%", }}>
     <Box id="costomDiv"> 
      <Container>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent:"center" ,  alignItems: "center", height: "100vh" }} >
          <Grid  container gap={2} columns={13} sx={{alignItems: "center"}} >
              <Grid item xs={13} sm={13} md={5} lg={6}>
                 <h3 className="blue textAlign"> APPOINMENT </h3>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={13} sm={13} md={5} lg={6}>
            <img width={"100%"} src={Chair} alt="chair" />
          </Grid>
        </Grid>

         </Box>
        
        </Container>
        </Box>
    </Box>
  );
};

export default DoctorsAppoinment;
