import React, { useRef } from 'react'
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material'
import loginPic from '../../assets/images/login.png'

import { makeStyles } from '@mui/styles'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import UseAuth from '../../context/AuthContext'

const Regester = () => {
  // hooks
  const nameRef = useRef(null)
  const EmailRef = useRef(null)
  const PasswordRef = useRef(null)

  // react dom methods
  const location = useLocation()
  const navigate = useNavigate()
  const prevLocation = location?.state?.from || '/'

  // distructuring from costom hook useAuth
  const {
    SaveUser,
    newUser,
    setIsLoading,
    error,
    setError,
    userProfile,
    islogin,
    setislogin,
  } = UseAuth()

  // mui costom style and breakpoing methods
  const theme = useTheme()
  const StyleClass = makeStyles({
    input: {
      width: '100%',
      border: 'none',
      borderBottom: '1px solid gray',
      outline: 'none',
      padding: '4px 0px',
      color: 'gray',
      fontSize: '1rem',
      fontWeight: 'normal',
      marginTop: '29px',
    },

    imgaction: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  })

  // distruced costom classess
  const { input, imgaction } = StyleClass()

  // regester function
  const submitForm = (e) => {
    e.preventDefault()
    setislogin(true)
    const name = nameRef.current.value
    const email = EmailRef.current.value
    const pass = PasswordRef.current.value
    newUser(email, pass)
      .then((userCredential) => {
        userProfile(name)
        SaveUser(name, email)
        setError('')
        navigate(prevLocation)
      })
      .catch((error) => {
        const errorMessage = error.message
        setError(errorMessage)
        setislogin(false)
      })
      .finally(setIsLoading(false))

    // clear input
    nameRef.current.value = ''
    EmailRef.current.value = ''
    PasswordRef.current.value = ''
  }

  return (
    <Box>
      <Container>
        <Grid
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100vh',
          }}
          container
          gap={7}
          columns={13}
        >
          <Grid item xs={13} sm={13} md={6} lg={6}>
            <Card sx={{ width: 'auto', margin: 'auto', padding: '10px' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'gray',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                }}
              >
                Regester
              </Typography>
              <form onSubmit={submitForm}>
                <input
                  ref={nameRef}
                  className={input}
                  placeholder="Name"
                  type="text"
                />
                <input
                  ref={EmailRef}
                  className={input}
                  placeholder="Email"
                  type="email"
                />
                <input
                  ref={PasswordRef}
                  className={input}
                  placeholder="Password"
                  type="password"
                />
                <Typography sx={{ color: 'red' }}>{error}</Typography>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: '#15D1C1',
                    color: 'white',
                    padding: '7px 22px',
                    fontWeight: 'bold',
                    marginTop: '25px',
                    width: '100%',
                  }}
                >
                  {islogin ? <CircularProgress /> : 'Regester'}
                </Button>
              </form>
              <h5 className="spaceing">
                Already have an account? Please{' '}
                <Link to={'/Login'}> Login </Link>{' '}
              </h5>
            </Card>
          </Grid>

          <Grid className={imgaction} item xs={13} sm={13} md={6} lg={6}>
            <img
              style={{ width: '100%' }}
              width="100%"
              src={loginPic}
              alt="login"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Regester
