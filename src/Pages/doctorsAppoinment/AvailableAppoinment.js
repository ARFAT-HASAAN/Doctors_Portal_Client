import React from 'react'
import appointments from './appoinmentData'
import AppoinmentModal from './AppoinmentModal'
import { Container, Grid, Box, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ToastContainer, toast } from 'react-toastify'
const AvailableAppoinment = ({ date }) => {
  // mui costom style methods
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

    spaceing: {
      [theme.breakpoints.down('md')]: {
        marginTop: '20',
      },
    },
  })

  // distruced classess
  const { div, container } = costomDiv({})

  const notify = () =>
    toast.success(
      `Congrats? You have been create an appoinment on ${date.toDateString()}, `,
    )

  return (
    <Box className={container}>
      <Container className={div}>
        <Box className={div}>
          <ToastContainer
            position="center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <h3 className="spaceing">
            Available Appoinment on {date.toDateString()}
          </h3>

          <h3 className="blue semibiseHeader">
            Book your appoinment from here
          </h3>

          <Grid container columns={13} gap={5}>
            {appointments.map((appoinment) => (
              <AppoinmentModal
                appoinment={appoinment}
                toast={notify}
                key={appoinment.key}
                date={date}
              ></AppoinmentModal>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default AvailableAppoinment
