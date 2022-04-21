import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import tretment from "../../assets/images/treatment.png";

const Terms = () => {
  return (
    <Box sx={{ mb: 19 }}>
      <Container>
        <Grid sx={{ alignItems: "center" }} gap={6} container columns={13}>
          <Grid item xs={13} sm={13} md={6} lg={6}>
            <img style={{ width: "100%" }} src={tretment} alt="treatment" />
          </Grid>
          <Grid item xs={13} sm={13} md={6} lg={6}>
            <Stack spacing={5}>
              <Typography sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
                Exceptional Dental Care,on Your Terms
              </Typography>
              <Typography color={"slategrey"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quo minus facilis animi dolore ullam iure itaque, delectus
                deleniti tempore qui, fuga repudiandae earum inventore, ipsa
                dignissimos sequi. Voluptatem quo saepe soluta in possimus eum
                qui obcaecati ipsa, iusto, expedita assumenda minima
                perspiciatis, doloribus harum alias illum consectetur quia
                aperiam. Culpa soluta perferendis eius omnis minus? Dolorum,
                esse consectetur at dolores laborum alias? Numquam autem eum
                temporibus quam aspernatur asperiores rerum voluptatibus ex
              </Typography>
              <Box>
                <Button
                  sx={{
                    backgroundColor: "#15D1C1",
                    width: "160px",
                    color: "white",
                  }}
                >
                  Learn more
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Terms;
