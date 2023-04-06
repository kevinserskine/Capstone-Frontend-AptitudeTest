import { React, useState } from 'react'
import { Typography, TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import './createTestStyle.css'

//Temporary variable to hold answer
var answers = ""

//Array to  answers
var answersArray = []

var testInfo = {
  Questions : [
    
  ]
}

function CreateTest({ setTest, questions=[], isOpen }) {

  const [question, setQuestion] = useState(questions)
  const [newQuestion, setNewQuestion] = useState('')
  const [choice, setChoice] = useState('')

  const addQuestion = () => {
    if(newQuestion) {
      let num = question.length
      let newEntry = { id: num, question: newQuestion }
      setQuestion([...question, newEntry])
      setNewQuestion('')
      setChoice('') 
    
      testInfo.Questions.push(
        {
          id: num,
          question: newQuestion,
          answer: answers
        }
      )
    }
    setTest(testInfo.Questions)

  }


  const deleteQuestion = (id) => {
    let newQuestions = question.filter( question => question.id !== id )
    setQuestion(newQuestions)
    testInfo.Questions.splice(id, 1)
    delete answersArray[id]
  }

  const handleList = (event) => {
    setChoice(event.target.value)
    let num = question.length
    answersArray[num] = event.target.value
    answers = event.target.value
  }

  return(
    <div className="container" style={{overflowY:"hidden", padding:'2vw'}}>
      <br /><br />
      <Typography variant='h3' >Create Aptitude Test</Typography>
      <br /><br />

          <div  style={{ display:'flex' }}>
            <TextField 
            style={{ width:"50vw", flexWrap:'wrap', margin:'auto', marginRight:"2vw" }}
            value={newQuestion}
            onChange={ (e) => setNewQuestion(e.target.value) }>
              Enter Question
            </TextField>

            <FormControl>
              <InputLabel>Answer</InputLabel>
                <Select
                  label='Answer'
                  name="Answer1"
                  value={choice}
                  onChange={handleList}
                  style={{ width:"10vw" }}
                >
                  <MenuItem value={"Strongly Agree"}>Strongly Agree</MenuItem>
                  <MenuItem value={"Agree"}>Agree</MenuItem>
                  <MenuItem value={"Neutral"}>Neutral</MenuItem>
                  <MenuItem value={"Disagree"}>Disagree</MenuItem>
                  <MenuItem value={"Strongly Disagree"}>Strongly Disagree</MenuItem>
                </Select>
              </FormControl>
              <Button 
              variant="filled" 
              onClick={addQuestion}
              style={{ backgroundColor:"#5f4c4c", color:"white",fontSize:"0.9em", marginLeft:"2vw", }}
              >
                Add Question
              </Button>
            </div>

      
      <br/>
        
      {question.length ? question
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map ((question, index) => {
          return(
              <div key={question.id}>
                <div className="col taskBg">
                  <div>
                    <Typography className="taskNumber">{index + 1}</Typography>
                    <Typography className="taskText"> Question: {question.question}</Typography>
                    <Typography className='taskText'>Answer: {testInfo.Questions[index].answer}</Typography>
                  </div> 

                  <div className='iconsWrap'>
                    
                    <span title="Delete"
                    onClick={() => deleteQuestion(question.id)}>
                    <DeleteIcon />
                    </span>
                    
                  </div> 
                </div>
              </div>  
          )
        })
        :
        'No Questions...'
      }
      <div>
        <Button variant="filled" 
          style={{
            backgroundColor:"#5f4c4c",
            color:"white", 
            height:"5vh", 
            position:"relative", 
            left:"23vw", 
            marginTop:"7vh",
            marginBottom:"7vh"}}
            onClick={() => isOpen(false)}
          >Submit Questions</Button>
      </div>
    </div>
  )
}
export default CreateTest