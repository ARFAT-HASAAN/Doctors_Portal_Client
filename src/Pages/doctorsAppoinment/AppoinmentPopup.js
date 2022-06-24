import React, { useState } from 'react'
import UseAuth from '../context/AuthContext'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  CircularProgress,
} from '@mui/material'

const AppoinmentPopup = ({
  handleClose,
  appoinment,
  date,
  open,
  toastfunc,
}) => {
  const { user } = UseAuth()

  // hooks

  const [loading, setloading] = useState(false)

  // default user data
  const patientInfo = {
    displayName: user?.displayName,
    email: user.email,
    phone: '',
  }
  const [patientData, setPatientData] = useState(patientInfo)

  // user data observer function
  const fieldData = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newInfo = { ...patientData }
    newInfo[field] = value
    setPatientData(newInfo)
  }

  //  appoinment request function
  const SubmitData = (e) => {
    e.preventDefault()

    setloading(true)
    const newPatient = {
      ...patientData,
      serviceName: appoinment.title,
      price: appoinment.price,
      date: date?.toLocaleDateString(),
    }

    axios
      .post(
        'https://still-chamber-41424.herokuapp.com/appoientment',
        newPatient,
      )
      .then((res) => {
        if (res.data.acknowledged) {
          setloading(false)
          handleClose()
          toastfunc()
        }
      })
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{appoinment.title}</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            fullWidth
            id="outlined-textarea"
            defaultValue={appoinment.watchTime}
            sx={{
              marginTop: '10px ',
            }}
          />
          <TextField
            fullWidth
            onBlur={fieldData}
            naem="displayName"
            placeholder="Your Name"
            defaultValue={user.displayName}
            sx={{
              backgroundColor: 'white',
              borderRadius: '10px',
              marginTop: '10px ',
            }}
            id="fullWidth"
          />

          <TextField
            fullWidth
            onBlur={fieldData}
            placeholder="Email Address"
            name="email"
            defaultValue={user.email}
            sx={{
              backgroundColor: 'white',
              borderRadius: '10px',
              marginTop: '10px',
            }}
            id="fullWidth"
          />

          <TextField
            onBlur={fieldData}
            fullWidth
            name="phone"
            placeholder="Phone Number"
            sx={{
              backgroundColor: 'white',
              borderRadius: '10px',
              marginTop: '10px',
            }}
            id="fullWidth"
          />
          <TextField
            disabled
            fullWidth
            type={'text'}
            defaultValue={date.toDateString()}
            placeholder="date"
            sx={{
              backgroundColor: 'white',
              borderRadius: '10px',
              marginTop: '10px',
            }}
            id="fullWidth"
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: 'red',
              color: 'white',
              padding: '7px 22px',
              fontWeight: 'bold',
            }}
            onClick={handleClose}
          >
            Deny
          </Button>

          <Button
            sx={{
              backgroundColor: '#15D1C1',
              color: 'white',
              padding: '7px 22px',
              fontWeight: 'bold',
            }}
            onClick={SubmitData}
          >
            {loading ? <CircularProgress /> : 'Send'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AppoinmentPopup
