import React from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
  useTheme,
} from "@mui/material";
import peopleOne from "../../assets/images/people-1.png";
import peopleTwo from "../../assets/images/people-2.png";
import peopleTree from "../../assets/images/people-3.png";
import { makeStyles } from "@mui/styles";

const Testimonial = () => {

 
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
    <Box className={container} id="verticleHeight" >
      <Container className={div} >
      
        <Box>
            <Box>
          <h4 className="blue semibiseHeader">
            TESTIMONIAL
          </h4>
            <h3
              className="divspace"
          >
            What"s Our Patients Says
          </h3>
        </Box>

        <Grid container gap={2} columns={13}>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Card sx={{ padding: "16px" }}>
              <CardContent>
                <Stack spacing={4}>
                  <p className="gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quibusdam temporibus magnam dolore provident
                    recusandae alias quo. Eos incidunt, error aliquam unde enim
                    facilis culpa corrupti cum ex totam rem!
                  </p>
                  <Box
                    gap={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={peopleOne} alt="" />

                    <Stack>
                      <h5 className="blue" >
                        DR.Caudi
                      </h5>
                      <p className="gray">
                        California
                      </p>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Card sx={{ padding: "16px" }}>
              <CardContent>
                <Stack spacing={4}>
                  <p className="gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quibusdam temporibus magnam dolore provident
                    recusandae alias quo. Eos incidunt, error aliquam unde enim
                    facilis culpa corrupti cum ex totam rem!
                  </p>
                  <Box
                    gap={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={peopleTwo} alt="" />

                    <Stack>
                      <h5 className="blue" >
                        DR.Caudi
                      </h5>
                      <p className="gray" >
                        California
                      </p>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Card sx={{ padding: "16px" }}>
              <CardContent>
                <Stack spacing={4}>
                  <p className="gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quibusdam temporibus magnam dolore provident
                    recusandae alias quo. Eos incidunt, error aliquam unde enim
                    facilis culpa corrupti cum ex totam rem!
                  </p>
                  <Box
                    gap={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={peopleTree} alt="" />

                    <Stack>
                      <h5 className="blue">
                        DR.Caudi
                      </h5>
                      <p className="gray">
                        California
                      </p>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Box>
       
      </Container>
    </Box>
  );
};

export default Testimonial;
