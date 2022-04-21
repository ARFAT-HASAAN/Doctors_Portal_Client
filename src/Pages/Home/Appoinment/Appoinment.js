import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import doctor from "../../assets/images/doctor.png";
import "../../Style/Style.css";
const Appoinment = () => {
  return (
    <Box sx={{ my: 10 }} id="appoinment">
      <Grid container columns={12} sx={{ alignItems: "center" }}>
        <Grid item xs={13} sm={12} md={6} lg={6}>
          <Box>
            <img
              style={{ display: "block", marginTop: "-220px" }}
              width={"100%"}
              src={doctor}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={13} sm={12} md={6} lg={6}>
          <Box sx={{ padding: "10px" }}>
            <Stack spacing={3}>
              <Typography sx={{ fontWeight: "bold", color: "#15D1C1" }}>
                APPOINMENT
              </Typography>
              <Typography sx={{ fontSize: "2rem", color: "white" }}>
                Make an appoinment <br /> <span>Today</span>
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quibusdam <br /> temporibus magnam
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#15D1C1",
                  width: "160px",
                  color: "white",
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appoinment;
