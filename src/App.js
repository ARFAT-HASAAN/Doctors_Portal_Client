import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../src/Pages/Shared/navbar/Navbar'
import Footer from '../src/Pages/Shared/Footer/Footer'
import Appo from './Pages/doctorsAppoinment/Appo'
import Login from './Pages/Authentication/Login/Login'
import Regester from './Pages/Authentication/Regester/Regester'
import PrivateRoute from './Pages/FrivateRoute/PrivateRoute'
import AuthProvider from './Pages/context/AuthProvider'
import Dashbord from './Pages/Dashbord/Dashbord'
import Appoentments from './Pages/Dashbord/Appoentments/Appoentments'
import AddDoctors from './Pages/Dashbord/AddDoctors/AddDoctors'
import MakeAdmin from './Pages/Dashbord/makeAdmin/MakeAdmin'
import AllPatient from './Pages/Dashbord/AllPatient/AllPatient'
import AdminRoute from './Pages/route/AdminRoute'
import Payment from './Pages/Dashbord/PaymantRoute/Payment'
import Notfound from './Pages/result/Notfound'
import Thankfull from './Pages/result/Thankfull'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

AOS.init()

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="appoinment"
            element={
              <PrivateRoute>
                {' '}
                <Appo />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="dashbord"
            element={
              <PrivateRoute>
                {' '}
                <Dashbord />{' '}
              </PrivateRoute>
            }
          >
            <Route path="/dashbord" element={<Appoentments />} />
            <Route path="AddDoctors" element={<AddDoctors />} />
            <Route path="/dashbord/pay/:id" element={<Payment />} />
            <Route
              path="makeAdmin"
              element={
                <AdminRoute>
                  {' '}
                  <MakeAdmin />{' '}
                </AdminRoute>
              }
            />
            <Route path="Allpatient" element={<AllPatient />} />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="Regester" element={<Regester />} />
          <Route path="thankfull" element={<Thankfull />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </>
  )
}

export default App
