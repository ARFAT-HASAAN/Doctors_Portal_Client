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
import React, { useRef } from 'react'
import loginPic from '../../assets/images/login.png'
import { makeStyles } from '@mui/styles'
import UseAuth from '../../context/AuthContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  // hooks
  const EmailRef = useRef(null)
  const PasswordRef = useRef(null)

  // react router dom methods
  const location = useLocation()
  const prevLocation = location?.state?.from || '/'
  const navigate = useNavigate()

  // mui theme method

  const theme = useTheme()

  // mui costom style maked
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

    imgAction: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  })

  // distructured styles classess
  const { input, imgAction } = StyleClass()

  // distructuring from useAuth hooks
  const {
    setUser,
    error,
    setError,
    SaveOldUser,
    oldUser,
    setIsLoading,
    islogin,
    setislogin,
  } = UseAuth()

  //  login function
  const submitForm = (e) => {
    e.preventDefault()
    const email = EmailRef.current.value
    const pass = PasswordRef.current.value
    setislogin(true)
    oldUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user
        setUser(user)
        SaveOldUser(user?.displayName, user?.email)
        setIsLoading(false)
        navigate(prevLocation)
      })
      .catch((error) => {
        const errorMessage = error.message
        setError(errorMessage)
        setislogin(false)
      })
      .finally(setIsLoading(false))
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
          gap={5}
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
                Login
              </Typography>
              <form onSubmit={submitForm}>
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
                  {islogin ? <CircularProgress /> : 'Login'}
                </Button>
              </form>

              <h5 className="spaceing">
                Don't have account? Please
                <Link to={'/Regester'}> Regester </Link>
              </h5>
            </Card>
          </Grid>

          <Grid className={imgAction} item xs={13} sm={13} md={6} lg={6}>
            <img
              style={{ width: '100%' }}
              width="100%"
              src={loginPic}
              alt="login"
            />
          </Grid>
        </Grid>{' '}
      </Container>
    </Box>
  )
}

export default Login
