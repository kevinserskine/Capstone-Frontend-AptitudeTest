import React from 'react'
import { Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useEffect } from 'react'
import { getJobApplicationByName, getJobApplications } from '../../../utils/backend/requests'
import './JobPostings.css';
import JobPosting from './JobPosting'

export const JobPostings = () => {
  const [jobPostings, setjobPostings] = useState([]);
  var { search } = useParams();

  const containerStyling = {
    maxHeight:'70vh' , 
    display:'flex',
    overflow:'auto',
    '&:hover::-webkit-scrollbar': {
      display: 'flex',
    },
    '&::-webkit-scrollbar': {
      display: 'flex',
      width: '0.512rem',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 0px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    }
  }

  useEffect(() =>{

    async function fetchJobs(){
      try{
        if(search){
          search = search.replace(/\s+/g, '-');
          console.log(search)
          const data = await getJobApplicationByName(search);
          setjobPostings(data);
          console.log(jobPostings);
        }else{
          const data = await getJobApplications();
          setjobPostings(data);
          console.log(data);
        }
        
      }
      catch (err){
        console.log(err)
      }
    }
    fetchJobs();
  }, [])

  return (
    <div style={{overflow:'hidden'}}>
      <Typography variant='h4' paddingTop={4} paddingLeft={25} >Job Postings</Typography>
      <Grid2 container xsOffset={1} sx={containerStyling}>
      {
        jobPostings &&
          jobPostings.map((posting, index) => {
            return <JobPosting jobPosting={posting} key={index} />
          })
      }
      {
        jobPostings.length === 0 &&
        <Typography variant='h5' sx={{ margin:'auto', marginTop:'10vh', color:'gray'}}>No job postings found... </Typography>
      }
      </Grid2>
    </div>
  )
}
