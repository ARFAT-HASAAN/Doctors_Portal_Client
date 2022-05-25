import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import peopleOne from "../../assets/images/people-1.png";
import peopleTwo from "../../assets/images/people-2.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { makeStyles } from "@mui/styles";
const Blog = () => {

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
    <Box className={container} id="blogs" >
      <Container className={div} >
        <Box> 
          <h4 className="blue semibiseHeader" >
          OUR BLOGS
        </h4>
          <h3 className="divspace">
          From our Blog News
        </h3>
        <Grid container gap={1} columns={13}>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box>
              <Card
                sx={{
                  padding: "20px",
                  color: "white",
                  backgroundColor: "#52DDE3",
                }}
              >
                <CardContent>
                  <Stack spacing={4}>
                    <Box>
                      <h5 fontWeight={"bold"}>Rashid Kabir</h5>
                        <h6
                        
                      >
                        {" "}
                        22 Aug 2020
                      </h6>
                    </Box>
                    <Box>
                      <h4
                        sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                      >
                        Cheeck at least a doctor in a year for your health
                      </h4>
                    </Box>

                    <Box>
                      <ArrowRightAltIcon />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box>
              <Card>
                <CardContent>
                  <Stack spacing={3}>
                    <Box>
                      <Box
                        gap={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src={peopleTwo} alt="" />

                        <Stack spacing={1}>
                          <h4 className="blue">
                            DR.Caudi
                          </h4>
                          <h6 className="gray" >
                            23 April 2029
                          </h6>
                        </Stack>
                      </Box>
                    </Box>

                    <Box>
                      <h4
                        sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                      >
                        2 times of brush in a day can keep you healthy
                      </h4>
                    </Box>

                    <Box>
                      <h6 className="gray">
                        it is a long established fact that by the readable
                        content of a lot layout.. The point
                      </h6>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box>
              <Card>
                <CardContent>
                  <Stack spacing={3}>
                    <Box>
                      <Box
                        gap={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src={peopleOne} alt="" />

                        <Stack spacing={1}>
                          <h4 className="blue" >
                            DR.Caudi
                          </h4>
                          <h6 className="gray">
                            23 April 2029
                          </h6>
                        </Stack>
                      </Box>
                    </Box>

                    <Box>
                      <h4
                       
                      >
                        2 times of brush in a day can keep you healthy
                      </h4>
                    </Box>

                    <Box>
                      <h6 className="gray" >
                        it is a long established fact that by the readable
                        content of a lot layout.. The point
                      </h6>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
