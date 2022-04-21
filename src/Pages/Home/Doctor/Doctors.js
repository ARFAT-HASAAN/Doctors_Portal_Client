import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import doctor from "../../assets/images/doctor-small.png";
const Doctors = () => {
  return (
    <Box sx={{ my: 10 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#15D1C1",
            padding: "20px 0px",
            textAlign: "center",
          }}
        >
          Our Doctors
        </Typography>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={doctor} alt="doctor" />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr.chaudy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +8801234394939
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={doctor} alt="doctor" />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr.chaudy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +8801234394939
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={doctor} alt="doctor" />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr.chaudy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +8801234394939
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Doctors;
