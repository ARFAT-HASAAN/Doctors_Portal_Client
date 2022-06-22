import React from 'react'
import { Container, Grid, Stack, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import doctor from '../../assets/images/doctor.png'
import '../../Style/Style.css'

const Appoinment = () => {
  // mui methods for style
  const theme = useTheme()
  const costomDiv = makeStyles({
    container: {
      [theme.breakpoints.up('md')]: {
        width: '100%',
        height: '50vh',
      },
    },

    div: {
      [theme.breakpoints.up('md')]: {
        display: 'grid',
        placeItems: 'center',
        height: '55vh',
        justifyItems: 'center',
      },
    },
    space: {
      [theme.breakpoints.down('md')]: {
        padding: '20px 0',
      },
    },
  })

  const { div, container, space } = costomDiv({})

  return (
    <Box className={[container, space]} id="appoinment">
      <Container className={div}>
        <Grid container columns={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <img
                style={{
                  width: '350px',
                  backgroundColor: 'white',
                  border: '4px solid #00D1E3 ',
                }}
                src={doctor}
                alt="doctor "
              />
            </Box>
          </Grid>
          <Grid item xs={13} sm={12} md={6} lg={6}>
            <Box sx={{ padding: '0px' }}>
              <Stack spacing={3}>
                <h4 className="blue">APPOINMENT</h4>
                <h2 className="white">
                  Make an appoinment <br /> <span>Today</span>
                </h2>
                <p className="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum quibusdam <br /> temporibus magnam
                </p>
                <button className="btn">Learn More</button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Appoinment
