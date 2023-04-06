import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_HEADINGS } from './constants'
import { useRecoilState } from 'recoil'
import { DEFAULT_USERSTATE, userState } from '../utils/recoil/atoms/user/user'
import { logout } from '../utils/firebase/firebase'

function Footer() {

    const [user, setUser] = useRecoilState(userState);

    const TextStyling = {
        transition: 'color 0.5s ease-out',
        fontFamily: "'Lato', sans-serif;",
        '&:hover': {
            color: "white",
        },
        whiteSpace: 'nowrap',
        fontSize: '15px'
    }

    const LinkStyling = {
        color:'black',
        textDecoration:'none',
    }

    const checkIfLoggedIn = (heading) => heading == 'Login' && user.uid != '' || heading == 'Logout' && !user.uid != ''

    const logoutHandler = () => {
        console.log('hi')
        setUser(DEFAULT_USERSTATE)
        logout()
    }

    return (
        <Grid2
            container
            sx={{ width:'100vw', position:'sticky', top:'100%', display:'flex', borderTop:'1px solid' }}>
                <Grid2
                    item
                    xsOffset={1}
                    xs={10}
                    sx={{ display:'flex' }}>
                    <Grid2
                        item
                        xs={1}>
                        <Stack
                            sx={{ marginTop:1 }}
                            spacing={1}>
                                {
                                
                                    NAV_HEADINGS.map((heading) => {

                                        if(checkIfLoggedIn(heading)) return null

                                        return (
                                            <Link
                                                to={heading == 'Logout' ? 'Home' : heading}
                                                style={ LinkStyling }
                                                onClick={ heading == 'Logout' && user.uid != '' ? logoutHandler : null }
                                                key={heading}>
                                                <Typography
                                                    variant='h5'
                                                    sx={ TextStyling }>
                                                    {heading}
                                                </Typography>
                                            </Link>
                                        )
                                    })
                                
                                }
                            
                        </Stack>
                        
                    </Grid2>
                    
                </Grid2>
                
        </Grid2>
    )
}

export default Footer