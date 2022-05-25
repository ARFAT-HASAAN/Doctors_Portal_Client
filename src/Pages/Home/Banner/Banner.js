import {
  Box,
  Container,
  Grid,
  Stack,
  
} from "@mui/material";
import React from "react";
import "../../Style/Style.css";
import Chair from "../../assets/images/chair.png";




const Banner = () => {
  return (
 
    <Box style={{ backgroundImage: { Chair } }} id="banner" sx={{ height: '100vh', width: "100%", }}>
      <Box id="costomDiv" > 
        
       
        <Container>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent:"center" ,  alignItems: "center", height: "100vh" }} >
          <Grid container gap={2} columns={13}>
            <Grid item xs={13} sm={13} md={5} lg={6}>
              <Stack spacing={4}>
                <h1>
                  Your New Smile <br /> Start Here
                </h1>
                <p className="gray" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  perspiciatis aut labore quisquam est sapiente dicta.
                </p>
                <button className="btn">
                    Get Appoinment
                </button>
              </Stack>
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

export default Banner;
