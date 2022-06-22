import React from 'react'
import { useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'

const Thankfull = () => {
  // mui costome style made
  const theme = useTheme()
  const costomDiv = makeStyles({
    container: {
      [theme.breakpoints.up('md')]: {
        width: '100%',
        height: '100vh',
      },
    },

    div: {
      [theme.breakpoints.up('md')]: {
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        justifyItems: 'center',
      },
    },
  })
  //   mui costom class distruced
  const { div, container } = costomDiv({})
  return (
    <div className={container}>
      <div className={div}>
        <div className="textAlign">
          <div>
            <img src={logo} style={{ width: '100px' }} alt="logo images" />
          </div>
          <h1>Thank you so much for choose us.</h1>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link to={'/'}>
              <button className="btn">Home</button>
            </Link>
            <Link to={'/dashbord'}>
              <button className="btn">Booked Appoinments</button>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Thankfull
