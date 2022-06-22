import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import Logo from '../../assets/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import './Navbar.css'

import UseAuth from '../../context/AuthContext'

const Navbar = () => {
  // distructed
  const { logOut, user } = UseAuth()
  // hooks
  const [nav, setNav] = useState(false)

  // mobile manu toogle
  const toogle = () => {
    setNav(!nav)
  }

  return (
    <>
      <nav>
        <Container>
          <div className="Container">
            {/* nav logo  */}
            <div>
              <img style={{ width: '60px' }} src={Logo} alt="Logo images" />
            </div>

            {/* nav item  */}
            <div className="nav-manu">
              <ul className="nav-item">
                <li>
                  {' '}
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  {' '}
                  <Link to={'appoinment'}> Appoinment </Link>{' '}
                </li>
                <li>
                  {' '}
                  <HashLink to={'/#blogs'} smooth>
                    {' '}
                    Blogs{' '}
                  </HashLink>{' '}
                </li>
                <li>
                  {' '}
                  <HashLink to={'/#Doctors'} smooth>
                    {' '}
                    Doctors{' '}
                  </HashLink>{' '}
                </li>
                <li>
                  {' '}
                  <Link to={'dashbord'}> Dashbord </Link>
                </li>
                <li>
                  <HashLink to="/#Contact" smooth>
                    Contact us
                  </HashLink>
                </li>
              </ul>
              {/* logout button  */}
              <div className="btn-section">
                {user?.email ? (
                  <button onClick={logOut} className="btn">
                    Log Out
                  </button>
                ) : (
                  <Link to={'Login'}>
                    <button className="btn"> Login </button>
                  </Link>
                )}
              </div>
            </div>

            {/* hamburger  */}

            <p className="hamburger">
              {' '}
              <MenuIcon onClick={toogle}></MenuIcon>{' '}
            </p>

            {/* mobile manu s */}
            <div className={nav ? 'mobileManuTrue' : ' mobileManufalse'}>
              <div className="mobileManu">
                <ul className="mobilemanuItem">
                  <li>
                    {' '}
                    <Link onClick={toogle} to={'/'}>
                      Home
                    </Link>
                  </li>
                  <li>
                    {' '}
                    <Link onClick={toogle} to={'appoinment'}>
                      {' '}
                      Appoinment{' '}
                    </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <HashLink onClick={toogle} to={'/#blogs'} smooth>
                      {' '}
                      Blogs{' '}
                    </HashLink>{' '}
                  </li>
                  <li>
                    {' '}
                    <HashLink onClick={toogle} to={'/#Doctors'} smooth>
                      {' '}
                      Doctors{' '}
                    </HashLink>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link onClick={toogle} to={'dashbord'}>
                      {' '}
                      Dashbord{' '}
                    </Link>
                  </li>
                  <li>
                    <HashLink onClick={toogle} to="/#Contact" smooth>
                      Contact us
                    </HashLink>
                  </li>
                </ul>

                {/* logout button  */}
                <div className="">
                  {user.email ? (
                    <button onClick={logOut} className="mubilebtn">
                      Log Out
                    </button>
                  ) : (
                    <Link to={'Login'}>
                      <button className="mubilebtn"> Login </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Navbar
