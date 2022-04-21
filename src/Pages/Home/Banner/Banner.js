import {
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "../../Style/Style.css";
import Chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div>
      <div id="banner">
        <Container>
          <Grid container gap={2} columns={13}>
            <Grid item xs={13} sm={13} md={5} lg={6}>
              <Stack spacing={4}>
                <Typography sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
                  Your New Smile <br /> Start Here
                </Typography>
                <Typography fontSize={"16px"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  perspiciatis aut labore quisquam est sapiente dicta.
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#15D1C1",
                    color: "white",
                    width: "160px",
                    padding: "12px 8px",
                  }}
                >
                  Get Appoinment
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={13} sm={13} md={5} lg={6}>
              <img width={"100%"} src={Chair} alt="chair" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
