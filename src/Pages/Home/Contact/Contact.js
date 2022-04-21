import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "../../Style/Style.css";
const Contact = () => {
  const theme = useTheme();
  const costomStyle = makeStyles({
    input: {
      [theme.breakpoints.up("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  });

  const { input } = costomStyle({});

  return (
    <Box sx={{ mb: 5 }} id="Contact">
      <Box>
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
          CONTACT US
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "midum",
            textAlign: "center",
            color: "white",
            padding: "14px 0",
            marginBottom: "30px",
          }}
        >
          Always Connect with us
        </Typography>
        <Box className={input} sx={{ margin: "auto", textAlign: "center" }}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              placeholder="Email Address"
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
              id="fullWidth"
            />
            <TextField
              fullWidth
              placeholder="Subject"
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
              id="fullWidth"
            />
            <TextField
              fullWidth
              id="filled-textarea"
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                outlineColor: "blue",
                borderColor: "blue",
              }}
              placeholder="Your Message"
              rows={4}
              multiline
            />
            <Box>
              <Button
                sx={{
                  background: "#00D1E3",
                  color: "#fff",
                  padding: "7px 25px",
                }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
