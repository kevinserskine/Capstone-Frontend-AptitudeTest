import { Card, CardContent, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDateDistance } from '../constants'
function JobItem({ job }) {
    const [jobDate, setJobDate] = useState()
    var { id, jobName, date, company } = job;
    const navigate = useNavigate()

    useEffect(() =>{
        setJobDate(getDateDistance(date));
    }, [])

    const handleRedirect = () => {
        navigate(`/jobPosting/${id}`)
    }

    const TextStyling = {
        fontFamily:"'Lato', sans-serif;",
        textOverflow:'ellipsis',
        whiteSpace:'pre',
        overflow:'hidden',
    }

    const CardStyling = {
        margin:'3px',
        backgroundColor:'#EBEBEB',
        transition:'background-color 0.5s ease-out',
        '&:hover' : {
            backgroundColor:'#d3d3d3'
        }
    }

  return ( 
    <Card sx={CardStyling} onClick={handleRedirect}>
        <CardContent>
            <Typography sx={TextStyling} variant='h6'>
                {jobName}
            </Typography>
            <Typography sx={[TextStyling, { float:'left', color:'gray'}]} variant='subtitle1'>
                {company}
            </Typography>
            <Typography sx={[TextStyling, { float:'right', color:'gray'}]} variant='subtitle1'>
                {jobDate}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default JobItem