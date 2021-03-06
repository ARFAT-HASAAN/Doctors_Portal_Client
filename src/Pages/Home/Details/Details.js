import React from 'react'
import { Container, Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import AddIcCallIcon from '@material-ui/icons/AddIcCall'
import '../../Style/Style.css'

const Details = () => {
  return (
    <Box data-aos="fade-up" data-aos-duration="1000" sx={{ mt: -6 }}>
      <Container>
        <Grid container columns={13} gap={2}>
          <Grid
            sx={{
              backgroundColor: '#15D1C1',
              borderRadius: '5px',
              padding: '20px',
            }}
            item
            xs={13}
            sm={13}
            md={4}
            lg={4}
          >
            <Box
              gap={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <LocationOnIcon
                fontSize="large"
                style={{ color: 'white', fontSize: '5rem' }}
              />

              <Stack spacing={1}>
                <h4 className="white">Opening Hours</h4>
                <p className="white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid
            sx={{
              borderRadius: '5px',
              padding: '20px',
              backgroundColor: '#3A4257',
            }}
            item
            xs={13}
            sm={13}
            md={4}
            lg={4}
          >
            <Box
              gap={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTimeIcon
                fontSize="large"
                style={{ color: 'white', fontSize: '5rem' }}
              />
              <Stack spacing={1}>
                <h4 className="white">Opening Hours</h4>
                <p className="white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: '#15D1C1',
              borderRadius: '5px',
              padding: '20px',
            }}
            item
            xs={13}
            sm={13}
            md={4}
            lg={4}
          >
            <Box
              gap={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AddIcCallIcon
                fontSize="large"
                style={{ color: 'white', fontSize: '5rem' }}
              />
              <Stack spacing={1}>
                <h4 className="white">Opening Hours</h4>
                <p className="white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Details
