import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GoogleButton } from 'react-google-button';
import { googleSignIn, signIn } from '../../../utils/firebase/firebase';
import { useRecoilState } from 'recoil'
import { userState } from '../../../utils/recoil/atoms/user/user';

import './styles.css'

const defaultFormFields = {
    email: '',
    password: '',
}

const Signin = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [error, setError] = useState('');
    const [user, setUser] = useRecoilState(userState)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            await signIn(formFields)
            navigate('/Account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormFields({ ...formFields, [name]: value })
    }

    const handleGoogleSignIn = async () => {

        try {
            const { user: { uid, displayName, email }} = await googleSignIn()
            setUser({uid: uid, displayName: displayName, email: email})
            console.log(uid, displayName, email)
            navigate('/Account')
        } catch (error) {
            console.log(error)
        }

    }

    

    // useEffect(() => {
    //     if(user != null) {
    //         navigate('/Account')
    //     }
    // }, [user])
    
  return (
    <div className="form" style= {{ marginTop:"20vh" }}>
            <div>
                <Typography variant='h2'style= {{ marginBottom:"3vh" }}>Login</Typography>
            </div>
            <form onSubmit={handleSubmit}>
                <div >
                    <TextField id="outlined-basic" label="Email Address" variant="outlined" size="small" margin="normal" style= {{width:"50vh", maxWidth:'70vw', backgroundColor:"white"}} onChange={handleChange} className='border p-3' type="email" />
                </div>

                <div>
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small" margin="normal" style= {{width:"50vh", maxWidth:'70vw', backgroundColor:"white"}} onChange={handleChange} className='border p-3' type="password" />
                </div>

                <Button variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "10px"
                    }} 
                    onClick={handleSubmit}
                    >LOGIN</Button>

                <GoogleButton onClick={handleGoogleSignIn} style={{
                    margin: "auto",
                    marginTop: "4vh"
                }}/>    

                <p style={{marginTop:"3vh"}}>
                    Don't have an account? <Link to='/Signup' className='underline'>Sign up.</Link>
                </p>

            </form>
    </div>
  )
}

export default Signin