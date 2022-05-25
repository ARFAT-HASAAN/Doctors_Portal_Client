import React, { useRef } from "react";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import loginPic from "../../assets/images/login.png";

import { makeStyles } from "@mui/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../context/AuthContext";

const Regester = () => {
  const StyleClass = makeStyles({
    input: {
      width: "100%",
      border: "none",
      borderBottom: "1px solid gray",
      outline: "none",
      padding: "4px 0px",
      color: "gray",
      fontSize: "1rem",
      fontWeight: "normal",
      marginTop: "29px",
    },
  });
  const { input } = StyleClass();
  const {
    SaveUser,
    newUser,

    setIsLoading,
    error,
    setError,
    userProfile,
  } = UseAuth();

  const nameRef = useRef(null);
  const EmailRef = useRef(null);
  const PasswordRef = useRef(null);

  const location = useLocation();

  const prevLocation = location?.state?.from || "/";

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = EmailRef.current.value;
    const pass = PasswordRef.current.value;
    newUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        userProfile(name);
        SaveUser(name, email);
        setError("");
        navigate(prevLocation);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));

    nameRef.current.value = "";
    EmailRef.current.value = "";
    PasswordRef.current.value = "";
  };

  return (
    <Box style={{ marginTop: "70px" }}>
      <Container> 
        <Grid sx={{ alignItems: "center" }} container gap={7} columns={13}>
        <Grid item xs={13} sm={13} md={6} lg={6}>
          <Card sx={{ width: "600px", margin: "auto", padding: "100px" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "gray",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              Regester
            </Typography>
            <form onSubmit={submitForm}>
              <input
                ref={nameRef}
                className={input}
                placeholder="Name"
                type="text"
              />
              <input
                ref={EmailRef}
                className={input}
                placeholder="Email"
                type="email"
              />
              <input
                ref={PasswordRef}
                className={input}
                placeholder="Password"
                type="password"
              />
              <Typography sx={{ color: "red" }}>{error}</Typography>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#15D1C1",
                  color: "white",
                  padding: "7px 22px",
                  fontWeight: "bold",
                  marginTop: "25px",
                  width: "100%",
                }}
              >
                Regester
              </Button>
              </form>
               <h5 className="spaceing" >Already have an account? Please  <Link to={"/Login"}> Login </Link> </h5>
              
          </Card>
        </Grid>

        <Grid item xs={13} sm={13} md={6} lg={6}>
          <img
            style={{ width: "100%" }}
            width="100%"
            src={loginPic}
            alt="login"
          />
        </Grid>
      </Grid>
      </Container>
      
    </Box>
  );
};

export default Regester;
