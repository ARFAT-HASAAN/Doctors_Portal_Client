import { Box, Container, Grid, Stack, useTheme } from '@mui/material'
import React from 'react'
import '../../Style/Style.css'
import { makeStyles } from '@mui/styles'

const Footer = () => {
  // mui costome style made
  const theme = useTheme()
  const costomStyle = makeStyles({
    item: {
      textDecoration: 'none',
      color: 'gray',
      display: 'block',
      marginBottom: '12px',
    },
    botton: {
      color: 'white',
    },

    container: {
      [theme.breakpoints.up('md')]: {
        width: '100%',
        height: '40vh',
      },
    },

    div: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',
      },
    },
  })
  // mui costom class distruced
  const { item, div, container } = costomStyle()
  return (
    <Box className={container} id="footer">
      <Container>
        <Box className={div}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Box>
                <Stack gap={3}>
                  <h4 className="blue">SERVICES</h4>

                  <ul>
                    <li>
                      {' '}
                      <a className={item} href="#home">
                        Home{' '}
                      </a>{' '}
                    </li>
                    <li>
                      <a className={item} href="#contac">
                        {' '}
                        Contact{' '}
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className={item} href="#blogs">
                        Blogs
                      </a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a className={item} href="#blogs">
                        Treatment{' '}
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className={item} href="#services">
                        Services{' '}
                      </a>
                    </li>
                  </ul>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={8} sm={6} md={4} lg={4} xl={4}>
              <Box>
                <Stack gap={3}>
                  <h4 className="blue">ORAL HEALTH</h4>
                  <ul>
                    <li>
                      {' '}
                      <a className={item} href="#call">
                        {' '}
                        Emergency Dental Care{' '}
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className={item} href="#check">
                        {' '}
                        Check Up{' '}
                      </a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a className={item} href="#teatment">
                        Teatment of Personal Diseases{' '}
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a className={item} href="#tooh">
                        {' '}
                        Tooth Extraction{' '}
                      </a>
                    </li>
                  </ul>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={8} sm={6} md={4} lg={4} xl={4}>
              <Box>
                <Stack gap={3}>
                  <h4 className="blue">OUR ADDRESS</h4>
                  <p className={item}>New York -101010 Hudson Beil</p>
                  <Box>
                    <p className={item}>Call Now</p>
                    <button className="btn"> +203923820 </button>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <p sx={{ textAlign: 'center', marginTop: '20px', color: 'gray' }}>
              Copyright All right Reserved
            </p>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
