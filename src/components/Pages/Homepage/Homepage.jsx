import { Button, FormControl, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { getJobApplicationByName, getJobApplications } from '../../../utils/backend/requests'
import { useNavigate } from 'react-router-dom'
import JobCarousel from '../../JobCarousel/JobCarousel'

function Homepage() {
    const [search, setSearch] = useState('')
    const theme = useTheme()

    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'))
    const navigate = useNavigate();
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const submitSearch = async () => {
        if(search){
            navigate(`postings/${search}`)
        }else{
            navigate('postings')
        }
        
        
    }

  return (
    <Grid2
        container
        sx={{ display:'flex', justifyContent:'center', alignContent:'center', flexGrow:0.6 }}
    >   
        <Grid2
            xs={10}
            sm={8}
            md={8}
            lg={7}
            xl={5}
            xsOffset={ isVerySmall ? 1 : 0}
            mdOffset={0}
            lgOffset={1}
            item
            sx={{ flexShrink:0, maxWidth:'800px', height:'80%' }}>
            <Stack 
                sx={{ width:'100%' }}
                spacing={2}>
                <Typography variant={ isSmall ? 'h4' : 'h3'}>Search a job</Typography>
                <FormControl fullWidth variant='outlined' >
                        <TextField
                            id='searchbox'
                            variant='filled'
                            label='Search'
                            onChange={searchHandler}
                        />
                </FormControl>
            </Stack>
            
        </Grid2>
        <Grid2
            sm={2}
            md={2}
            lg={2}
            xs={10}
            xsOffset={isVerySmall ? 1 : 0}
            mdOffset={0}
            lgOffset={0}
            item
            sx={{alignItems:'flex-end', display:'flex'}}>
            <Button
                sx={[{ height:'3.5rem', minWidth:'80px', fontSize:'1em' },  isMedium ? { fontSize:'0.75em' } : {}, isSmall ? { marginTop:'1rem', fontSize:'1em' } : { marginLeft:'1rem' },]} 
                endIcon={<FaSearch />}
                onClick={submitSearch}
                variant='contained'
            >Search</Button>    
        </Grid2>
    </Grid2>
  )
}

export default Homepage;