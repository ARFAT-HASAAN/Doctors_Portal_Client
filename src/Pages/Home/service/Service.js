import { CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Cavity from "../../assets/images/cavity.png";
import Fluride from "../../assets/images/fluoride.png";
import Whitening from "../../assets/images/whitening.png";
const Service = () => {
  return (
    <Box sx={{ mb: 8 }}>
      <Container>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#15D1C1",
            padding: "3px 0",
            marginTop: "30px",
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            padding: "14px 0",
            marginBottom: "30px",
          }}
        >
          Service we provides
        </Typography>

        <Grid container gap={3} columns={13}>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box sx={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: "165px", margin: "auto" }}
                width={"100px"}
                image={Fluride}
                alt="doctor"
              ></CardMedia>
              <Typography variant="h6" padding={2}>
                Fluoride Treatment
              </Typography>
              <Typography color={"silver"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                aperiam laboriosam dolorum aliquam ipsum ea?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box sx={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: "150px", margin: "auto" }}
                width={"100px"}
                image={Cavity}
                alt="doctor"
              ></CardMedia>
              <Typography padding={2} variant="h6">
                Cavity Filling
              </Typography>
              <Typography color={"silver"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                aperiam laboriosam dolorum aliquam ipsum ea?
              </Typography>{" "}
            </Box>
          </Grid>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box sx={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: "150px", margin: "auto" }}
                width={"100px"}
                image={Whitening}
                alt="doctor"
              ></CardMedia>
              <Typography padding={2} variant="h6">
                Teeth Whitening
              </Typography>
              <Typography color={"silver"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                aperiam laboriosam dolorum aliquam ipsum ea?
              </Typography>{" "}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
