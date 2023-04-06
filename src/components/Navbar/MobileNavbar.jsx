import { Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { NAV_HEADINGS } from '../constants'


function MobileNavbar({ user }) {
    const [showSidebar, setShowSidebar] = useState(false)
    
    const sideBarHandler = () => {
        setShowSidebar(!showSidebar)
    }

    const TextStyling = {
        fontFamily:"'Lato', sans-serif;",
        fontWeight:'bold',
        transition: 'color 0.5s ease-out',
        '&:hover': {
            color: "white",
        },
        whiteSpace:'nowrap'
    }

    const LinkStyling = {
        color:'#c5aa6a',
        textDecoration:'none',
        width:'100%'
        
    }

    const checkIfLoggedIn = (heading) => heading == 'Login' && user.uid != '' || heading == 'Logout' && !user.uid != ''
    
    return (
        <Grid2 
            sx={{ position:'absolute', right:'0', display:'flex', alignItems:'center', marginRight:'5%' }}>
            <FaBars style={{ fontSize:'20px', color: '#c5aa6a', }} onClick={sideBarHandler} />
                <Drawer 
                    anchor='right'
                    open={showSidebar}
                    onClose={sideBarHandler}
                    ModalProps={{ disableScrollLock: true }}>
                    <List
                        sx={{ width:'60vw', height:'100vh', backgroundColor:'#5f4c4c' }}>
                            {
                                NAV_HEADINGS.map((heading, index) => {
                                    if(checkIfLoggedIn(heading)) return null

                                    // Used to remove whitespace in heading for url
                                    const urlText = heading.replaceAll(' ','')

                                    return(
                                    <ListItem
                                        disablePadding
                                        divider
                                        key={index}>
                                        <Link
                                            to={urlText}
                                            style={LinkStyling}>
                                            <ListItemButton>
                                                <ListItemText primary={ <Typography sx={ TextStyling } variant='h5'>{heading}</Typography> }>
                                                </ListItemText>
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>)
                                })
                            }
                    </List>
                </Drawer>
        </Grid2>
    )
}

export default MobileNavbar