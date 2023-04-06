import React, { useEffect, useState } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getDateDistance } from '../../constants'
const JobPosting = ({jobPosting}) => {
  var { id, jobName, company, location, date } = jobPosting;
  const [jobDate, setJobDate] = useState(date);

  const jobPostingsContainer = { 
    display: 'block',
    p: 1,
    m: 1,
    cursor:'pointer',
    bgcolor: '#fff',
    color: 'grey.800',
    border: '1px solid',
    borderColor: 'grey.300',
    borderRadius: 2,
    fontWeight: '700' 
  }

  const posting_handler = (id) => {
    navigate(`/jobPosting/${id}`)
  }

  const navigate = useNavigate()


  useEffect(() =>{
    setJobDate(getDateDistance(date));
  }, [])

  return (
    <Grid2
      onClick={() => posting_handler(id)}
      xs={10}
      component="span"
      sx={jobPostingsContainer}
    > 
    <Typography variant='subtitle1' sx={{fontWeight:'700'}}>
      {jobName}
    </Typography>
       
      <Typography component={'div'} variant='body2' sx={{fontWeight: '600'}}>
        {company}
      </Typography>
      <Typography component={'div'} variant='body2' sx={{fontWeight: '600', color:'gray' }}>
        {location}
        <Typography variant='subtitle2' sx={{float:'right'}}>
          {jobDate}
        </Typography>
      </Typography>

    </Grid2>
  )
}

export default JobPosting