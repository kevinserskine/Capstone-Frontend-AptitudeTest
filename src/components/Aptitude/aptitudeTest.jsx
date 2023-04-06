import { useState } from 'react'
import { Typography, Button, RadioGroup, FormControlLabel, FormLabel, FormControl, Radio } from '@mui/material'

var totalScore = 0
var answers = []
var UserAnswers = []

export const AptitudeTest = () => {

    const testInfo = {
        "Questions" : [
            {
                "id": 0,
                "question": "What is your name?",
                "answer": "Disagree"
            },
    
            {
                "id": 1,
                "question": "What is your favorite color?",
                "answer": "Agree"
            },
    
            {
                "id": 2,
                "question": "What is your favorite number?",
                "answer": "Neutral"
            },

            {
                "id": 3,
                "question": "Testing Functionality",
                "answer": "Agree"
            }
        ]
    }

    const [score, setScore] = useState('')

    const getAnswers = () => {
        let num = testInfo.Questions.length

        for (var i=0;i<num;i++){
            answers[i] = testInfo.Questions[i].answer
        }

        for(var n=0;n<num;n++){
            if(UserAnswers[n] === answers[n]){
                totalScore += 1
            }
        }

        console.log(totalScore)

    }

    const getUserAnswer = (e) => {

        setScore(e.target.value)
        UserAnswers[e.target.name] = e.target.value
        
    }

    const displayTest = testInfo.Questions.map((Question, index) =>
        <div key={index} style={{borderTop:"solid", borderTopWidth:"thin", marginTop:"5vh", width:"80vw", textAlign:"center", marginBottom:"-4vh"}}>
            <FormControl> 
                <FormLabel style={{textAlign:"center", fontSize:"2em", alignSelf:"center", marginTop:"6vh", marginBottom:"3vh"}}> {Question.question} </FormLabel>
                <RadioGroup
                    name={index}
                    row
                    onChange={getUserAnswer} 
                    style={{marginBottom:"9vh", alignSelf:"center"}}
                    
                >
                    <FormControlLabel value="Strongly Agree" 
                        control={<Radio value="Strongly Agree" sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: 60,
                        }}}
                        />}
                        label="Strongly Agree"
                        labelPlacement='top'
                    
                    />

                    <FormControlLabel value="Agree" control={<Radio sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: 45,
                        }}}
                        />} 
                        label=" Agree"
                        labelPlacement='top'
                    />
                    <FormControlLabel value="Neutral" control={<Radio sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: 35,
                        }}}
                        />} 
                        label="Neutral"
                        labelPlacement='top'
                    />
                    <FormControlLabel value="Disagree" control={<Radio sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: 45,
                        }}}
                        />} 
                        label="Disagree"
                        labelPlacement='top'
                    />
                    <FormControlLabel value="Strongly Disagree" control={<Radio sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: 60,
                        }}}
                        />} 
                        label="Strongly Disagree"
                        labelPlacement='top'
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
    

    
    return(
        <div style={{marginLeft:"10vw", overflowY:"hidden"}}>
            <Typography style={{textAlign:"center", marginTop:"7vh", marginRight:"9vw", marginBottom:"7vh"}} variant='h3'>Complete Aptitude Test</Typography>
            {displayTest}
            <Button variant="filled" onClick={getAnswers} style={{backgroundColor:"#5f4c4c", color:"white", height:"5vh", marginLeft:"75vw", marginBottom:"5vh", marginTop:"4vh"}}>Submit Test</Button>
        </div>    
        
    )
    
    
}  

export default AptitudeTest



