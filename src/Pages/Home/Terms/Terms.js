import { Container, Grid, Stack, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'
import tretment from '../../assets/images/treatment.png'

const Terms = () => {
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
      <Container
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in-sine"
        className={div}
        id="aboute"
      >
        <Box>
          <Grid sx={{ alignItems: 'center' }} gap={6} container columns={13}>
            <Grid item xs={13} sm={13} md={6} lg={6}>
              <img style={{ width: '100%' }} src={tretment} alt="treatment" />
            </Grid>
            <Grid item xs={13} sm={13} md={6} lg={6}>
              <Stack spacing={5}>
                <h1>Exceptional Dental Care,on Your Terms</h1>
                <p className="gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  quo minus facilis animi dolore ullam iure itaque, delectus
                  deleniti tempore qui, fuga repudiandae earum inventore, ipsa
                  dignissimos sequi. Voluptatem quo saepe soluta in possimus eum
                  qui obcaecati ipsa, iusto, expedita assumenda minima
                  perspiciatis, doloribus harum alias illum consectetur quia
                  aperiam. Culpa soluta perferendis eius omnis minus? Dolorum,
                  esse consectetur at dolores laborum alias? Numquam autem eum
                  temporibus quam aspernatur asperiores rerum voluptatibus ex
                </p>
                <Box>
                  <button className="btn">Learn more</button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Terms
