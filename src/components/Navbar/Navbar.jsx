import { Typography, useMediaQuery } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import MobileNavbar from './MobileNavbar'
import { NAV_HEADINGS } from '../constants'
import { DEFAULT_USERSTATE, userState } from '../../utils/recoil/atoms/user/user'
import { useRecoilState } from 'recoil';
import '../../index.css';
import { logout } from '../../utils/firebase/firebase'

function Navbar() {

    const [user, setUser] = useRecoilState(userState)

    const [activePage, setActivePage] = useState('Home');
    
    const mobile = useMediaQuery('(max-width:1000px)')
    
    const activePageHandler = async (e) => {
        // Check if the current page is logout then set the active page to home
        // Do this becuase logout page isnt actually a page and redirects user to home
        e.target.innerHTML == 'Logout' ? setActivePage('Home') : setActivePage(e.target.innerHTML)
    }

    const logoutHandler = () => {
        setUser(DEFAULT_USERSTATE)
        logout()
    }

    const checkIfLoggedIn = (heading) => heading == 'Login' && user.uid != '' || heading == 'Logout' && !user.uid != ''

    const LinkStyling = {
        color:'black',
        textDecoration:'none',
        whiteSpace:'nowrap'
    }

    const TextStyling = {
        transition: 'color 0.5s ease-out',
        fontFamily:"'Lato', sans-serif;",
        color: '#c5aa6a',
        position:'relative',
        '&:hover': {
            color: "white",
        }
    }

    const ActivePageTextStyling = {
        '&:after': {
            content: '""',
            position: 'absolute',
            backgroundColor: '#5f4c4c',
            height: '3.25px',
            width: '100%',
            left: '0',
            bottom: '-10px',
        }
    }
  return (
    
    <Grid2 
        container 
        spacing={2}
        sx={{ alignItems:'center', backgroundColor: '#2f2626', display:'flex', marginBottom:'10px', paddingTop:'8px' }}
        >
        <Grid2 
            lgOffset={1}
            md={8}
            xs={7}
            >
                <Link
                    to={ '/' }
                    style={{ textDecoration:'none', display:'flex', alignItems:'center', width:'30%', whiteSpace:'nowrap' }}>
                    <img src={Logo} alt='Logo img' />
                    <Typography
                        sx={[{ marginLeft:'1.5rem' },  TextStyling, ]}
                        variant='h4'>
                        Job Board
                    </Typography>
                </Link>
        </Grid2>
        {
            mobile ?  
                <MobileNavbar user={user} />
            :
            <Grid2 
                lg={2}
                md={4}
                xs={5}
                sx={{ display:'flex', flexDirection:'row', justifyContent:'flex-end', height:'100%', alignItems:'center' }}>
                    <Stack
                        direction='row'
                        spacing={12}
                        marginRight={2}
                        sx={{ textDecoration:'none' }}>
                            {
                                NAV_HEADINGS.map((heading) => {

                                    if(checkIfLoggedIn(heading)) return null

                                    // Used to remove whitespace in heading for url
                                    const urlText = heading.replaceAll(' ','')
                                    console.log(urlText)
                                    return (
                                        <Link
                                            to={urlText == 'Logout' || urlText == 'Home' ? '/' : urlText}
                                            style={LinkStyling}
                                            // If statement to make the logout button work on navbar
                                            onClick={(e) => {
                                                activePageHandler(e),
                                                heading == 'Logout' && user.uid != '' ? logoutHandler() : null
                                            }}
                                            key={heading}>
                                            <Typography
                                                variant='h5'
                                                sx={[TextStyling, activePage == heading ? ActivePageTextStyling : '', heading == 'Login' || heading == 'Logout' ? { color: '#0380a6' } : '']}>
                                                {heading}
                                            </Typography>
                                        </Link>
                                    )
                                })
                            }
                    </Stack>
                </Grid2>
        }
    
    </Grid2>

  )
}


export default Navbar