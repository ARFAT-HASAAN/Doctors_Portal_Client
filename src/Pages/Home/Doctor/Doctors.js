import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  useTheme,
} from '@mui/material'

import { makeStyles } from '@mui/styles'
import doctor from '../../assets/images/doctor-small.png'

const Doctors = () => {
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
  // mui costom class distruced
  const { div, container } = costomDiv({})

  return (
    <Box className={container} id="verticleHeight">
      <Container className={div} id="Doctors">
        <Box>
          <h4 className="blue semibiseHeader">OUR DOCTORS</h4>

          <h3 className="divspace">Have a look your favorites doctors</h3>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} sm={12} md={3} lg={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={doctor} alt="doctor" />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <h4 className="blue">Dr.chaudy</h4>
                    <h6 className="gray">+8801234394939</h6>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={doctor} alt="doctor" />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <h4 className="blue">Dr.chaudy</h4>
                    <h6 className="gray">+8801234394939</h6>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={doctor} alt="doctor" />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <h4 className="blue">Dr.chaudy</h4>
                    <h6 className="gray">+8801234394939</h6>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Doctors
