import React, { useEffect, useState } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Carousel from 'react-multi-carousel';
import { carouselResponsiveValues } from '../constants';
import "react-multi-carousel/lib/styles.css";
import JobItem from './JobItem';
import { getJobApplications } from '../../utils/backend/requests';

function JobCarousel() {
    const [jobApps, setJobApps] = useState([])
    // const MOCK_ITEMS = [{'jobName':'Overflowing name that shouldnt fit in the box', 'jobDate':'testDate1'},{'jobName':'testJob2', 'jobDate':'testDate2'},{'jobName':'testJob3', 'jobDate':'testDate3'},{'jobName':'testJob4', 'jobDate':'testDate4'},{'jobName':'testJob5', 'jobDate':'testDate5'},{'jobName':'testJob6', 'jobDate':'testDate6'},{'jobName':'testJob7', 'jobDate':'testDate7'},{'jobName':'testJob8', 'jobDate':'testDate8'},{'jobName':'testJob9', 'jobDate':'testDate9'},]
    useEffect(() => {
        const getJobApps = async () => {
            return await getJobApplications();
        }
        if(jobApps){
            const request = getJobApps()
                            .then((res) => setJobApps(res))
                            .catch(console.error());
        }
    }, [])

  return (
    <Grid2
    item
    sx={{ width:'100%'}}
    xlOffset={1}
    lgOffset={1}
    mdOffset={1}
    smOffset={1}
    lg={10}
    md={10}
    sm={10}
    >
        <Carousel
            responsive={carouselResponsiveValues}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={1500}
            arrows={false}
            >
            {
                jobApps ?
                jobApps.map((job, i) => {
                    return(
                    <JobItem job={job} key={i}/>)
                }) : <div/>
            }
        </Carousel>
    </Grid2>
  )
}

export default JobCarousel