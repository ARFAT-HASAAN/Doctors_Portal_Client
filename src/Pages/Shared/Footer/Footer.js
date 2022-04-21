import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "../../Style/Style.css";
import { makeStyles } from "@mui/styles";

const Footer = () => {
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
  });

  const { item, botton } = costomStyle();
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box>
              <Stack gap={3}>
                <Typography
                  variant="h5"
                  sx={{ color: "#15D1C1", fontWeight: "bold" }}
                >
                  Services
                </Typography>

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
                    <a className={item} href="#" Blogs></a>{" "}
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
                <Typography
                  variant="h5"
                  sx={{ color: "#15D1C1", fontWeight: "bold" }}
                >
                  Oral Health
                </Typography>
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
                <Typography
                  variant="h5"
                  sx={{ color: "#15D1C1", fontWeight: "bold" }}
                >
                  Our Address
                </Typography>
                <Typography className={item}>
                  New York -101010 Hudson Beil
                </Typography>
                <Box>
                  <Typography className={item}>Call Now</Typography>
                  <Button
                    sx={{
                      backgroundColor: "#15D1C1",
                      color: "white",
                      padding: "7px 22px",
                      fontWeight: "bold",

                      width: "100%",
                    }}
                  >
                    {" "}
                    +203923820{" "}
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{ textAlign: "center", marginTop: "30px", color: "gray" }}
        >
          Copyright All right Reserved
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
