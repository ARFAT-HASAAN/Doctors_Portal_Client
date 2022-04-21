import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import peopleOne from "../../assets/images/people-1.png";
import peopleTwo from "../../assets/images/people-2.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const Blog = () => {
  return (
    <div>
      <Container>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#15D1C1",
            padding: "3px 0",
            marginTop: "30px",
          }}
        >
          Our Blog
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "medium",
            textAlign: "center",
            padding: "14px 0",
            marginBottom: "30px",
            fontSize: "3rem",
          }}
        >
          From our Blog News
        </Typography>

        <Grid container gap={1} columns={13}>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box>
              <Card
                sx={{
                  padding: "20px",
                  color: "white",
                  backgroundColor: "#52DDE3",
                }}
              >
                <CardContent>
                  <Stack spacing={4}>
                    <Box>
                      <Typography fontWeight={"bold"}>Rashid Kabir</Typography>
                      <Typography
                        fontWeight={"bold"}
                        color={"white"}
                        fontSize={"12px"}
                      >
                        {" "}
                        22 Aug 2020
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                      >
                        Cheeck at least a doctor in a year for your health
                      </Typography>
                    </Box>

                    <Box>
                      <ArrowRightAltIcon />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box>
              <Card>
                <CardContent>
                  <Stack spacing={3}>
                    <Box>
                      <Box
                        gap={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src={peopleTwo} alt="" />

                        <Stack spacing={1}>
                          <Typography fontWeight={"bold"} variant="h5">
                            DR.Caudi
                          </Typography>
                          <Typography fontSize={"14px"} color={"slategrey"}>
                            23 April 2029
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>

                    <Box>
                      <Typography
                        sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                      >
                        2 times of brush in a day can keep you healthy
                      </Typography>
                    </Box>

                    <Box>
                      <Typography color={"slategray"}>
                        it is a long established fact that by the readable
                        content of a lot layout.. The point
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={13} sm={13} md={4} lg={4}>
            <Box>
              <Card>
                <CardContent>
                  <Stack spacing={3}>
                    <Box>
                      <Box
                        gap={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src={peopleOne} alt="" />

                        <Stack spacing={1}>
                          <Typography fontWeight={"bold"} variant="h5">
                            DR.Caudi
                          </Typography>
                          <Typography fontSize={"14px"} color={"slategrey"}>
                            23 April 2029
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>

                    <Box>
                      <Typography
                        sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
                      >
                        2 times of brush in a day can keep you healthy
                      </Typography>
                    </Box>

                    <Box>
                      <Typography color={"slategrey"}>
                        it is a long established fact that by the readable
                        content of a lot layout.. The point
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
