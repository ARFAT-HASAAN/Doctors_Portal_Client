import React, { useState } from "react";
import AppoinmentModal from "./AppoinmentModal";
import { Container, Grid, Typography, Box, Alert } from "@mui/material";
import { textAlign } from "@mui/system";

const AvailableAppoinment = ({ date }) => {
  const [isPassData, setIspassData] = useState(false);

  const appointments = [
    {
      key: 1,
      title: "Theet ortho dontic",
      space: 19,
      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 2,
      title: "Theet ortho dontic",
      space: 19,
      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 3,
      title: "Theet ortho dontic",
      space: 19,
      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 4,
      title: "Theet ortho dontic",
      space: 19,
      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 5,
      title: "Theet ortho dontic",
      space: 19,
      watchTime: "8:00 am - 9:00 pm",
    },
    {
      key: 6,
      title: "Theet ortho dontic",
      space: 19,
      watchTime: "8:00 am - 9:00 pm",
    },
  ];

  return (
    <Box sx={{ margin: "20px 0px" }}>
      <Typography
        sx={{
          color: "#15D1C1",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "30px 0px",
          marginBottom: "20px",
        }}
      >
        {" "}
        Available appoinment on {date.toDateString()}
      </Typography>
      <Container>
        {isPassData && (
          <Alert severity="success">
            Congratulation! Your data seccessfully passed.
          </Alert>
        )}

        <Grid container columns={13} gap={5}>
          {appointments.map((appoinment) => (
            <AppoinmentModal
              appoinment={appoinment}
              key={appoinment.key}
              date={date}
              setIspassData={setIspassData}
            ></AppoinmentModal>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AvailableAppoinment;
