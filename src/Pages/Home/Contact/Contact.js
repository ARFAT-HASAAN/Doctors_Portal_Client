import React, { useState } from 'react'
import axios from 'axios'
import '../../Style/Style.css'
import {
  Box,
  Container,
  TextField,
  useTheme,
  CircularProgress,
} from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'

import { makeStyles } from '@mui/styles'

const Contact = () => {
  // hooks 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [query, setQuery] = useState({
    email: '',
    subject: '',
    message: '',
  })

  // input tacker function 
  const TextTacker = (e) => {
    const Name = e.target.name
    const Value = e.target.value
    setQuery({ ...query, [Name]: Value })
  }

  const notify = () => toast('Congrats! Your message send.')

  
  // feedback submit form 
  const submitForm = (e) => {
    e.preventDefault()
    const Feedback = { ...query }
    setLoading(true)
    axios
      .post('https://still-chamber-41424.herokuapp.com/feedback', Feedback)
      .then((res) => {
        if (res.data.acknowledged) {
          // console.log(res.data)
          setError('')
          setLoading(false)
          notify()
        }
      })
      .catch((error) => {
        if (error) {
          setError('Someting is wrong.Please try again!')
        }
      })
      .finally(setQuery({ email: '', subject: '', message: '' }))
  }

  // mui costome style made 
  const theme = useTheme()
  const costomStyle = makeStyles({
    input: {
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },

    container: {
      [theme.breakpoints.up('md')]: {
        width: '100%',
        height: '100vh',
      },
    },

    div: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      },
    },
    divSpace: {
      [theme.breakpoints.up('md')]: {
        paddingY: '30px',
      },
    },
  })

  // mui costom class distruced 
  const { div, container } = costomStyle({})

  return (
    <Box
      id="Contact"
      className={container}
      sx={{
        textAlign: 'center',
        paddingY: '20px',
      }}
    >
      <Container className={div}>
        <Box>
          <h4 className="blue biseHeader">CONTACT US</h4>
          <h3 className="white divspace">Always Connect with us</h3>

          <Box>
            <ToastContainer />
            <form>
              <TextField
                required
                name="email"
                onChange={TextTacker}
                value={query?.email}
                fullWidth
                placeholder="Email"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  marginBottom: '15px',
                }}
              />
              <TextField
                required
                name="subject"
                onChange={TextTacker}
                value={query.subject}
                fullWidth
                placeholder="Subject"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                }}
              />
              <TextField
                required
                name="message"
                onChange={TextTacker}
                value={query.message}
                fullWidth
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  outlineColor: 'blue',
                  borderColor: 'blue',
                  marginBottom: '15px',
                }}
                placeholder="Your Message"
                rows={4}
                multiline
              />
              <Box>
                {!loading ? (
                  <button className="btn" type="submit" onClick={submitForm}>
                    Submit
                  </button>
                ) : (
                  <CircularProgress />
                )}
              </Box>
            </form>
            <p>{error} </p>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
