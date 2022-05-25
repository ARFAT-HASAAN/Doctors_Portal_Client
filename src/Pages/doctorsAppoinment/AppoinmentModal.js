import * as React from "react";
import { Grid, Paper, Stack, } from "@mui/material";

import AppoinmentPopup from "./AppoinmentPopup";

const AppoinmentModal = ({ appoinment, date, toast }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={13} sm={13} md={6} lg={4}>
      <Paper sx={{  }} elevation={3}>
        
        <Stack sx={{textAlign: "center", margin: "auto"}} spacing={2}>
           <h4
        >
          {" "}
          {appoinment.title}{" "}
        </h4>

        <h4
          
        >
          Price:$ {appoinment.price}
        </h4>
        <h4
          
        >
          {appoinment.watchTime}
        </h4>
        <h6
          
        >
          {appoinment.space} SPACE AVAIABLE
        </h6>

        <button className="btnn"
          
          onClick={handleClickOpen}
        >
          Book Appoinment
        </button>
        </Stack>
       
      </Paper>

      <AppoinmentPopup
        appoinment={appoinment}
        date={date}
        toastfunc={toast}
        open={open}
        handleClose={handleClose}
      ></AppoinmentPopup>
    </Grid>
  );
};

export default AppoinmentModal;
