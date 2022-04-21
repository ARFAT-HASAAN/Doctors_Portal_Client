import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import UseAuth from "../../context/AuthContext";
const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const { token } = UseAuth();

  const EmailHandler = (e) => {
    setEmail(e.target.value);
    e.target.value = "";
  };

  const formhandler = (e) => {
    e.preventDefault();
    const authorization = `Bearer ${token} `;
    const user = { email, authorization };

    axios.put(`https://still-chamber-41424.herokuapp.com/users/admin`, user).then((res) => {
      if (res.data.acknowledged) {
        setSuccess(true);
      }
    });
  };

  return (
    <div>
      <Box
        sx={{
          width: "400px",
          padding: "20px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ padding: "20px", fontWeight: "bold", fontSize: "1.4rem" }}
        >
          Make an Admin
        </Typography>

        <form onSubmit={formhandler}>
          <TextField
            onBlur={EmailHandler}
            type={"email"}
            placeholder="Place Email"
          ></TextField>{" "}
          <br />
          <Button
            type="submit"
            sx={{
              backgroundColor: "#15D1C1",
              color: "white",
              padding: "7px 22px",
              fontWeight: "bold",
              marginTop: "25px",
              width: "50%",
            }}
          >
            {" "}
            Click{" "}
          </Button>
        </form>

        {success && (
          <Alert severity="success">
            Congratulation! Your are added a new member as an admin.
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default MakeAdmin;
