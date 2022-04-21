import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import UseAuth from "../../context/AuthContext";

export default function ButtonAppBar() {
  const theme = useTheme();

  const useStyle = makeStyles({
    navItem: {
      textDecoration: "none",
      textAlign: "center",
      marginRight: "66px",
      display: "inline-block",
      color: "white",
      fontWeight: "bold",
      fontSize: "1rem",
    },

    listItem: {
      display: "block",
      textAlign: "center",
    },

    botton: {
      color: "white",
      border: "1px solid white",
    },

    navIcon: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },

    navManu: {
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
  });
  const { navItem, navIcon, navManu, botton, listItem } = useStyle();

  const [state, setState] = React.useState(false);

  const { logOut, user } = UseAuth();
  const list = (
    <Box
      sx={{ width: 250, backgroundColor: "#15D1C1", textAlign: "center" }}
      role="presentation"
    >
      <List>
        <ListItem className={listItem}>
          <ListItemText>
            {" "}
            <Link className={navItem} to={"/"}>
              {" "}
              Home{" "}
            </Link>{" "}
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            {" "}
            <Link className={navItem} to={"appoinment"}>
              {" "}
              Appoinment{" "}
            </Link>{" "}
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>{<MailIcon />}</ListItemIcon>
          <ListItemText>
            <Link className={navItem} to={"/dashbord"}>
              {" "}
              Dashbord{" "}
            </Link>{" "}
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link className={navItem} to="Login">
              Login
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link className={navItem} to="Regester">
              Regester
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            {user.email && (
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textTransform: "lowercase",
                  padding: "5px 20px",
                  // border: "1px solid white",
                  backgroundColor: "#364553",
                  boxShadow: "1px 1px 0px 0px #364553",
                }}
                className={botton}
                onClick={logOut}
              >
                Logout
              </Button>
            )}
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: "#15D1C1" }}>
          <Container>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "bold" }}
              >
                DOCTOR'S PORTAL
              </Typography>
              <Box
                className={navManu}
                style={{ marginRight: "3" }}
                sx={{ marginRight: "4" }}
              >
                {/* <Stack direction={"row"}> */}
                <Link className={navItem} to="/">
                  Home
                </Link>
                <Link className={navItem} to={"appoinment"}>
                  {" "}
                  Appoinment{" "}
                </Link>{" "}
                <Link className={navItem} to={"dashbord"}>
                  {" "}
                  Dashbord{" "}
                </Link>{" "}
                <Link className={navItem} to="Login">
                  Login
                </Link>
                <Link className={navItem} to="Regester">
                  Regester
                </Link>
                {user.email && (
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textTransform: "lowercase",
                      padding: "5px 20px",
                      // border: "1px solid white",
                      backgroundColor: "#364553",
                      boxShadow: "1px 1px 0px 0px #364553",
                    }}
                    className={botton}
                    onClick={logOut}
                  >
                    Logout
                  </Button>
                )}
                {/* </Stack> */}
              </Box>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={navIcon}
                style={{ color: "white" }}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <Box style={{}}>
              <React.Fragment>
                <Drawer open={state} onClose={() => setState(false)}>
                  {list}
                </Drawer>
              </React.Fragment>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
