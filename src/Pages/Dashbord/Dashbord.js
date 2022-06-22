import * as React from 'react'
import logo from '../assets/images/logo.png'
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, Outlet } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import UseAuth from '../context/AuthContext'

const drawerWidth = 240
function ResponsiveDrawer(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  // drewer toogle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // mui costom classses
  const coustomStyle = makeStyles({
    route: {
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      fontSize: '1.2rem',
      textAlign: 'left',
    },
    homeRoute: {
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      textAlign: 'center',
      fontSize: '1.2rem',
      margin: 'auto',
      padding: '20px',
    },
  })

  // distruced classes name
  const { route, homeRoute } = coustomStyle()

  // distruced admin
  const { isAdmin } = UseAuth()

  const drawer = (
    <Box>
      {' '}
      <Link className={homeRoute} to={'/'}>
        <img
          style={{ width: '70px', paddingTop: '15px' }}
          src={logo}
          alt="logo images"
        />
      </Link>
      <List>
        <ListItem>
          <ListItemText>
            {' '}
            <Link className={route} to={'/dashbord'}>
              {' '}
              Appoentment{' '}
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemText>
            {' '}
            <Link className={route} to={'Allpatient'}>
              {' '}
              Prescription
            </Link>{' '}
          </ListItemText>
        </ListItem>
        {isAdmin && (
          <Box>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                {' '}
                <Link className={route} to={'AddDoctors'}>
                  {' '}
                  Add Doctors{' '}
                </Link>{' '}
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                {' '}
                <Link className={route} to={'makeAdmin'}>
                  {' '}
                  Make admin
                </Link>{' '}
              </ListItemText>
            </ListItem>
          </Box>
        )}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: 'black',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <h4>Dashbord</h4>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none', textAlign: 'left' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'black',
              color: 'black',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block', textAlign: 'left' },

            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'black',
              color: 'white',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default ResponsiveDrawer
