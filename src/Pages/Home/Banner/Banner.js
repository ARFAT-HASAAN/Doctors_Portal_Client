import React from 'react'
import { Box, Container, Grid, Stack } from '@mui/material'
import '../../Style/Style.css'
import Chair from '../../assets/images/chair.png'
import { HashLink } from 'react-router-hash-link'

const Banner = () => {
  return (
    <Box
      style={{ backgroundImage: { Chair } }}
      id="banner"
      sx={{ height: '100vh', width: '100%' }}
    >
      <Box id="costomDiv">
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Grid container gap={2} columns={13}>
              <Grid item xs={13} sm={13} md={5} lg={6}>
                <Stack spacing={4}>
                  <h1>
                    Your New Smile <br /> Start Here
                  </h1>
                  <p className="gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum perspiciatis aut labore quisquam est sapiente dicta.
                  </p>
                  <HashLink
                    to={'appoinment/#appoinmentGird'}
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: 'smooth',
                        // block: 'end',
                      })
                    }
                  >
                    <button className="btn">Get Appoinment </button>
                  </HashLink>{' '}
                </Stack>
              </Grid>
              <Grid item xs={13} sm={13} md={5} lg={6}>
                <img width={'100%'} src={Chair} alt="chair" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Banner
