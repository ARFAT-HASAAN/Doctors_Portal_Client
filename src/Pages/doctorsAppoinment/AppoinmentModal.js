import { Button, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";

import AppoinmentPopup from "./AppoinmentPopup";

const AppoinmentModal = ({ appoinment, date, setIspassData }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={13} sm={13} md={6} lg={4}>
      <Paper sx={{ padding: "20px", textAlign: "center" }} elevation={3}>
        <Typography
          sx={{ fontSize: "1.6rem", fontWeight: "bold", color: "#15D1C1" }}
        >
          {" "}
          {appoinment.title}{" "}
        </Typography>

        <Typography
          sx={{ fontWeight: "bold", marginTop: "12px", fontSize: "1.2rem" }}
        >
          {appoinment.watchTime}
        </Typography>
        <Typography
          sx={{ color: "slategrey", fontSize: "0.8rem", marginTop: "16px" }}
        >
          {appoinment.space} SPACE AVAIABLE
        </Typography>

        <Button
          sx={{
            backgroundColor: "#15D1C1",
            color: "white",
            padding: "7px 12px",
            fontWeight: "bold",
            marginTop: "22px",
          }}
          onClick={handleClickOpen}
        >
          Book Appoinment
        </Button>
      </Paper>

      <AppoinmentPopup
        appoinment={appoinment}
        date={date}
        open={open}
        setIspassData={setIspassData}
        handleClose={handleClose}
      ></AppoinmentPopup>
    </Grid>
  );
};

export default AppoinmentModal;
