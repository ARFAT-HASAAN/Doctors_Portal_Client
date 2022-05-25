import { Box, Button, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import "../../Style/Style.css";
import { makeStyles } from "@mui/styles";

const Footer = () => {

  const theme = useTheme()
  const costomStyle = makeStyles({
    item: {
      textDecoration: "none",
      color: "gray",
      display: "block",
      marginBottom: "12px",
    },
    botton: {
      color: "white",
    },

     container: { 

     [theme.breakpoints.up("md")]: {
        width : "100%", height: "40vh"
      }, 
    },

    div: {
      [theme.breakpoints.up("md")]: {
        display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", height : "40vh"   
       }
    }
  });

  const { item, botton, div, container } = costomStyle();
  return (
    <Box  className={container}  id="footer" >
      <Container >
        <Box   className={div}  >
          <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box>
              <Stack gap={3}>
                <h4
                className="blue"
                >
                  SERVICES
                </h4>

                <ul>
                  <li>
                    {" "}
                    <a className={item} href="#">
                      Home{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a className={item} href="#">
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className={item} href="#">Blogs</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className={item} href="#">
                      Treatment{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className={item} href="#">
                      Services{" "}
                    </a>
                  </li>
                </ul>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={8} sm={6} md={4} lg={4} xl={4}>
            <Box>
              <Stack gap={3}>
                <h4
                className="blue"
                >
                  ORAL HEALTH
                </h4>
                <ul>
                  <li>
                    {" "}
                    <a className={item} href="#">
                      {" "}
                      Emergency Dental Care{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className={item} href="#">
                      {" "}
                      Check Up{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className={item} href="#">
                      Teatment of Personal Diseases{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className={item} href="#">
                      {" "}
                      Tooth Extraction{" "}
                    </a>
                  </li>
                </ul>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={8} sm={6} md={4} lg={4} xl={4}>
            <Box>
              <Stack gap={3}>
                <h4
                  className="blue"
                >
                  OUR ADDRESS
                </h4>
                <p className={item}>
                  New York -101010 Hudson Beil
                </p>
                <Box>
                  <p className={item}>Call Now</p>
                  <button className="btn"
                    
                  >
                    {" "}
                    +203923820{" "}
                  </button>
                </Box>
              </Stack>
            </Box>
          </Grid>
          </Grid> 
          
          <Box>
          <p
          sx={{ textAlign: "center", marginTop: "20px", color: "gray" }}
        >
          Copyright All right Reserved
        </p>
        </Box>
       </Box>  
      </Container>
    </Box>
  );
};

export default Footer;
