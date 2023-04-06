import { Button, TextField, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ShortlistTable from "./ShortlistTable"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getJobApplicationById, getShortlist } from "../../../utils/backend/requests"
import { getDateDistance } from "../../constants"

function Shortlist() {
    const [shortlist, setShortlist] = useState([])
    const [shortlistLength, setShortlistLength] = useState(0)
    const [jobPosting, setJobPosting] = useState({})
    const { id } = useParams()
    const { jobName, location, date, company, applicants } = jobPosting;

    useEffect(() => {
        const fetchJobData = async () => {
            setJobPosting(await getJobApplicationById(id))
        }
        fetchJobData();
    }, [])

    const handleShortlist = async () => {
        const { shortlist } = await getShortlist(id, shortlistLength);
        setShortlist(shortlist);
        console.log(shortlist)
    }

  return ( 
    <Grid2 container sx={{ flexGrow:1, marginBottom:'2vh' }}>
        <Grid2
            sx={{ marginTop:'5vh',backgroundColor:'#F1F4F9', alignItems:'baseline', justifyContent:'flex-start', padding:'2vh', borderRadius:'10px', boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
            xs={10}
            xsOffset={1}
            >
            <Grid2 xs={10} xsOffset={1} sx={{ justifyContent:'center', textAlign:'center' }}>
                <Typography variant='h3'>
                    Shortlist
                </Typography>
            </Grid2>
            <Grid2  xs={10}> 
                <Typography variant='h5' sx={{fontWeight:'700'}}>
                    {jobName}
                </Typography>
                <Typography component={'div'} variant='h7' sx={{fontWeight: '700'}}>
                    {company}
                </Typography>
                <Typography component={'div'} variant='h7' sx={{fontWeight: '600' }}>
                    {location}
                </Typography>
                <Typography variant='subtitle2' sx={{}}>
                    {getDateDistance(date)}
                </Typography>
                    { applicants ? 
                        <Typography component={'div'} variant='body2' sx={{fontWeight: '400' }} >
                            Applicants: {applicants.length} 
                        </Typography> 
                    : 
                        <Typography component={'div'} variant='body2' sx={{fontWeight: '400' }}>
                            No applicants 
                        </Typography>
                    }
            </Grid2>
            <Grid2 xs={12} sx={{display:'flex', justifyContent:'center', marginTop:'2vh', marginBottom:'2vh'}}>
                <TextField 
                    variant="filled"
                    size="small"
                    label='Shortlist Length'
                    onChange={(e) => setShortlistLength(e.target.value)}>
                </TextField>    
                <Button variant='contained' onClick={handleShortlist} sx={{marginLeft:'1vw'}}>
                    Submit
                </Button>
            </Grid2>
            <Grid2 xs={10} sx={{width:'100%', marginBottom:'2vh'}}>
                <ShortlistTable shortlist={shortlist}/>
            </Grid2>
        </Grid2>
    </Grid2>
    
  )
}

export default Shortlist