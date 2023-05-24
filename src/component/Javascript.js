import React, { useState } from 'react'


function Javascript() {


    
    const questions = [
        {
          question: "1: What is the result of the expression typeof null in JavaScript?",
          options: [
            "object",
            "null",
            "undefined"
          ],
          correctAnswer: "object"
        },
        {
          question: "2: What does the 'this' keyword refer to in JavaScript?",
          options: [
            "The current function",
            "The global object",
            "The object that owns the executing code"
          ],
          correctAnswer:             "The object that owns the executing code"
        },
        {
          question: "3: What is the purpose of the 'let' keyword in JavaScript?",
          options: [
            "To declare a constant variable",
            "To declare a block-scoped variable",
            "To declare a function"
          ],
          correctAnswer:    "To declare a block-scoped variable"
        },
        {
          question: "4: What is the output of the following code snippet?\n\nconsole.log([] + []);",
          options: [
            "[]",
            "NaN",
            "''"
          ],
          correctAnswer:     "''"
        },
        {
          question: "5: What is the result of the expression '2' + 2 in JavaScript?",
          options: [
            "22",
            "4",
            "TypeError"
          ],
          correctAnswer: "22"
        },
        {
          question: "6: What is the purpose of the 'bind' method in JavaScript?",
          options: [
            "To create a new function with a specific context",
            "To append elements to an array",
            "To convert a string to an integer"
          ],
          correctAnswer:    "To create a new function with a specific context"
        },
        {
          question: "7: What is the output of the following code snippet?\n\nconsole.log(1 < 2 < 3);",
          options: [
            "true",
            "false",
            "TypeError"
          ],
          correctAnswer:   "true"
        },
        {
          question: "8: What is the purpose of the 'NaN' value in JavaScript?",
          options: [
            "Not a Number",
            "Null",
            "Undefined"
          ],
          correctAnswer: "Not a Number"
        },
        {
          question: "9: What is the output of the following code snippet?\n\nconsole.log(+'42');",
          options: [
            "42",
            "NaN",
            "TypeError"
          ],
          correctAnswer:   "42"
        },
        {
          question: "10: What is the result of the expression '10' - 1 in JavaScript?",
          options: [
            "10",
            "9",
            "TypeError"
          ],
          correctAnswer:   "10"
        }
      ];
      
      
    
      

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [captureAnswer,setCaptureAnswer] = useState([]);

    function handleRestart() {
        setScore(0)
        setCurrentQuestion(0)
        setResult(false)
    }

    const handleAnswerClick = (selectedAnswer) => {
  
        setCaptureAnswer(prevArray => [...prevArray, selectedAnswer]);
       
        const currentQuestionObj = questions[currentQuestion];
        if (selectedAnswer === currentQuestionObj.correctAnswer) {
          setScore(score + 1);
        }
    
        if (currentQuestion === questions.length - 1) {
          setResult(true);

        } else {
          setCurrentQuestion(currentQuestion + 1);
        }
      };


    return (
        <div className='container-fluid mt-3 p-5 bg-dark ' >


            {
                result ? (
                    <div className="row d-flex justify-content-evenly align-items-center ">
                        <div className="col-12">
                            <h1 style={{color:"white"}}>JAVASCRIPT  QUIZ RESULT</h1>
                            <h3 style={{color:"white"}}>You scored <span style={{color:"yellow"}} >{score} </span> out of {questions.length}</h3>
                            <button className='btn btn-danger' onClick={() => handleRestart()} style={{color:"white"}} >Restart Quiz</button>
                        </div>

                        {/* SHOW ANSWER  */}
                        <div className="col-12 showResult mt-3 text-white"
                        style={{backgroundColor:"#3a3434"}}>
    
                            <h3 className='text-center mb-4 mt-3' >ALL ANSWER</h3>
                            {
                            
                                questions.map((i,index)=>{
                                    return(
                                        <div key={index} >
                                               <h5>{i.question} { captureAnswer.includes(i.correctAnswer)?"✔😀":"❌😫"
                                               }</h5>
                                               <div style={{backgroundColor:"black"}} className=' p-2 d-flex flex-column  flex-wrap    ' >
                                               <p>{i.options[0]}</p> 
                                               <p>{i.options[1]}</p> 
                                               <p>{i.options[2]}</p> 
                                               <p>{i.options[3]}</p> 
                                               </div>
                                               <p>{

                                              i.correctAnswer
                                               }</p> 
                                        </div>
                                    )
                                })
                            }

                            

                        </div>

                        
                    </div>

                    

                ) : (
                    <div className="row d-flex justify-content-evenly align-items-center">
                        <div className="col-12 col-md-4 ">
                          <h1 className='text-warning' >JAVASCRIPT QUIZ</h1>
                            <h1 className='  pb-2 mb-4 text-danger border-bottom border-danger' >  Question {currentQuestion + 1}</h1>
                        </div>
                        <div className="col-12 col-md-5  d-flex flex-column justify-content-evenly ">
                            <h3 style={{color:"white"}} >{questions[currentQuestion].question}</h3>
                            <div className=' d-flex flex-column justify-content-evenly gap-1 ' >

                                {
                                    questions[currentQuestion].options.map((option, index) => (
                                        <button className='btn  btn-warning' key={index} onClick={() => handleAnswerClick(option)} >
                                            {option}
                                        </button>
                                    ))}

                           
                            </div>
                        </div>
                    </div>


                )

            }




        </div>
    )
}

export default Javascript;

