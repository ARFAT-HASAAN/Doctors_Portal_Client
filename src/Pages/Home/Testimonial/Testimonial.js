import React from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import peopleOne from "../../assets/images/people-1.png";
import peopleTwo from "../../assets/images/people-2.png";
import peopleTree from "../../assets/images/people-3.png";

const Testimonial = () => {
  return (
    <Box sx={{ mb: 8 }}>
      <Container>
        <Box width={"320px"}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",

              color: "#15D1C1",
              padding: "3px 0",
              marginTop: "30px",
            }}
          >
            TESTIMONIAL
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "medium",
              fontSize: "2.3rem",
              padding: "14px 0",
              marginBottom: "30px",
            }}
          >
            What"s Our Patients Says
          </Typography>
        </Box>

        <Grid container gap={2} columns={13}>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Card sx={{ padding: "16px" }}>
              <CardContent>
                <Stack spacing={4}>
                  <Typography color={"slategray"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quibusdam temporibus magnam dolore provident
                    recusandae alias quo. Eos incidunt, error aliquam unde enim
                    facilis culpa corrupti cum ex totam rem!
                  </Typography>
                  <Box
                    gap={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={peopleOne} alt="" />

                    <Stack>
                      <Typography
                        color={"#15D1C1"}
                        fontWeight={"bold"}
                        variant="h6"
                      >
                        DR.Caudi
                      </Typography>
                      <Typography fontSize={"14px"} color={"slategrey"}>
                        California
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Card sx={{ padding: "16px" }}>
              <CardContent>
                <Stack spacing={4}>
                  <Typography color={"slategrey"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quibusdam temporibus magnam dolore provident
                    recusandae alias quo. Eos incidunt, error aliquam unde enim
                    facilis culpa corrupti cum ex totam rem!
                  </Typography>
                  <Box
                    gap={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={peopleTwo} alt="" />

                    <Stack>
                      <Typography
                        color={"#15D1C1"}
                        fontWeight={"bold"}
                        variant="h6"
                      >
                        DR.Caudi
                      </Typography>
                      <Typography fontSize={"14px"} color={"slategrey"}>
                        California
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Card sx={{ padding: "16px" }}>
              <CardContent>
                <Stack spacing={4}>
                  <Typography color={"slategrey"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quibusdam temporibus magnam dolore provident
                    recusandae alias quo. Eos incidunt, error aliquam unde enim
                    facilis culpa corrupti cum ex totam rem!
                  </Typography>
                  <Box
                    gap={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={peopleTree} alt="" />

                    <Stack>
                      <Typography
                        color={"#15D1C1"}
                        fontWeight={"bold"}
                        variant="h6"
                      >
                        DR.Caudi
                      </Typography>
                      <Typography fontSize={"14px"} color={"slategrey"}>
                        California
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
