import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { DEFAULT_USERSTATE, userState } from '../../utils/recoil/atoms/user/user';
import { useRecoilState } from 'recoil';
import { logout } from '../../utils/firebase/firebase';

const Account = () => {
  const [user, setUser] = useRecoilState(userState)
  
  const navigate = useNavigate();

  // To prevent user from accessing this page if they are not logged in
  useEffect(() => {
    if(user.uid == '') {
      navigate('/')
    }
  }, [user])

  const handleLogout = async () => {
    try {
      await logout()
      setUser(DEFAULT_USERSTATE)
      navigate('/')
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message)
    }
  }

  const goHome = async () => {

    try {
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }

  }

  return (
    <div className='form'>
        <Typography variant='h3'>Account</Typography>
        <Typography variant='h4' style={{marginTop: "50px"}}>Welcome {user.displayName}</Typography>
        <Typography variant='h6' style={{marginTop: "30px"}}>User Email: {user.email}</Typography>

        <Button onClick={handleLogout} variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "5vh"
                    }}>Logout</Button>

        <Button onClick={goHome} variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "5vh",
                marginLeft: "3vh"
        }}>Home</Button>
    </div>
  )
}

export default Account