import { Container, Grid } from "@mui/material";
import React from "react";
import Chair from "../assets/images/chair.png";
import Calender from "../Shared/Date/Calender";

const DoctorsAppoinment = ({ date, setDate }) => {
  return (
    <div id="banner">
      <Container>
        <Grid container gap={2} columns={13}>
          <Grid item xs={13} sm={13} md={5} lg={6}>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={13} sm={13} md={5} lg={6}>
            <img width={"100%"} src={Chair} alt="chair" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DoctorsAppoinment;
