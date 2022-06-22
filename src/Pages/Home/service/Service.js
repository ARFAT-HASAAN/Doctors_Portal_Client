import React from 'react'

import Cavity from '../../assets/images/cavity.png'
import Fluride from '../../assets/images/fluoride.png'
import Whitening from '../../assets/images/whitening.png'
import { CardMedia, Container, Grid, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'

const Service = () => {
  // mui breakpoint methods
  const theme = useTheme()

  // mui costom steyle make
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

  // distructuring
  const { div, container } = costomDiv({})

  return (
    <Box className={container} id="verticleHeight">
      <Container className={div}>
        <Box>
          <h4 className="blue biseHeader ">OUR SERVICES</h4>
          <h3 className="divspace textAlign">Service we provides</h3>

          <Grid container gap={3} columns={13}>
            <Grid item xs={13} sm={13} md={4} lg={4}>
              <Box sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: '165px', margin: 'auto' }}
                  width={'100px'}
                  image={Fluride}
                  alt="doctor"
                ></CardMedia>
                <h4 variant="h6" padding={2}>
                  Fluoride Treatment
                </h4>
                <p className="gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi, aperiam laboriosam dolorum aliquam ipsum ea?
                </p>
              </Box>
            </Grid>
            <Grid item xs={13} sm={13} md={4} lg={4}>
              <Box sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: '150px', margin: 'auto' }}
                  width={'100px'}
                  image={Cavity}
                  alt="doctor"
                ></CardMedia>
                <h4>Cavity Filling</h4>
                <p className="gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi, aperiam laboriosam dolorum aliquam ipsum ea?
                </p>{' '}
              </Box>
            </Grid>
            <Grid item xs={13} sm={13} md={4} lg={4}>
              <Box sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: '150px', margin: 'auto' }}
                  width={'100px'}
                  image={Whitening}
                  alt="doctor"
                ></CardMedia>
                <h4>Teeth Whitening</h4>
                <p className="gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi, aperiam laboriosam dolorum aliquam ipsum ea?
                </p>{' '}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Service
