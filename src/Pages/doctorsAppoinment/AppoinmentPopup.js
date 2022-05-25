import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import UseAuth from "../context/AuthContext";
import axios from "axios";
  // import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AppoinmentPopup = ({
  handleClose,
  appoinment,
  date,
  open,
  
 toastfunc
}) => {
  const { user } = UseAuth();

  const patientInfo = {
    displayName: user?.displayName,
    email: user.email,
    phone: "",
  };
  const [patientData, setPatientData] = useState(patientInfo);

  const fieldData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...patientData };
    newInfo[field] = value;
    setPatientData(newInfo);
  };

  //   data function
  const SubmitData = (e) => {
    e.preventDefault();

    const newPatient = {
      ...patientData,
      serviceName: appoinment.title,
      price: appoinment.price,
      date: date?.toLocaleDateString(),
    };

  
    axios.post("https://still-chamber-41424.herokuapp.com/appoientment", newPatient).then((res) => {
      if (res.data.acknowledged) {
        handleClose();
        toastfunc()
      
      }
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{appoinment.title}</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            fullWidth
            id="outlined-textarea"
            defaultValue={appoinment.watchTime}
            sx={{
              marginTop: "10px ",
            }}
          />
          <TextField
            fullWidth
            onBlur={fieldData}
            naem="displayName"
            placeholder="Your Name"
            defaultValue={user.displayName}
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              marginTop: "10px ",
            }}
            id="fullWidth"
          />

          <TextField
            fullWidth
            onBlur={fieldData}
            placeholder="Email Address"
            name="email"
            defaultValue={user.email}
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              marginTop: "10px",
            }}
            id="fullWidth"
          />

          <TextField
            onBlur={fieldData}
            fullWidth
            name="phone"
            placeholder="Phone Number"
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              marginTop: "10px",
            }}
            id="fullWidth"
          />
          <TextField
            disabled
            fullWidth
            type={"text"}
            defaultValue={date.toDateString()}
            placeholder="date"
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              marginTop: "10px",
            }}
            id="fullWidth"
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "red",
              color: "white",
              padding: "7px 22px",
              fontWeight: "bold",
            }}
            onClick={handleClose}
          >
            Deny
          </Button>
          <Button
            sx={{
              backgroundColor: "#15D1C1",
              color: "white",
              padding: "7px 22px",
              fontWeight: "bold",
            }}
            onClick={SubmitData}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AppoinmentPopup;
