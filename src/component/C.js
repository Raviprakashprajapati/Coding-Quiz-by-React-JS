import React, { useState } from 'react'


function C() {


    
    const questions = [
        {
          question: "1: What is the purpose of the 'volatile' keyword in C?",
          options: [
            "To declare a variable that can be modified by multiple threads",
            "To indicate that a variable's value may change unexpectedly",
            "To optimize the performance of a program"
          ],
          correctAnswer: "To indicate that a variable's value may change unexpectedly"
        },
        {
          question: "2: What is the purpose of the 'const' keyword in C?",
          options: [
            "To declare a constant variable",
            "To indicate a variable's type",
            "To create a reference to another variable"
          ],
          correctAnswer: "To declare a constant variable"
        },
        {
          question: "3: What is the difference between '++i' and 'i++' in C?",
          options: [
            "'++i' increments the value before using it, while 'i++' increments the value after using it",
            "'++i' increments the value after using it, while 'i++' increments the value before using it",
            "There is no difference between '++i' and 'i++'"
          ],
          correctAnswer:  "'++i' increments the value before using it, while 'i++' increments the value after using it"
        },
        {
          question: "4: What does the 'sizeof' operator in C return?",
          options: [
            "The size in bytes of a variable or data type",
            "The value of a variable",
            "The number of elements in an array"
          ],
          correctAnswer: "The size in bytes of a variable or data type"
        },
        {
          question: "5: What is the purpose of the 'typedef' keyword in C?",
          options: [
            "To define a new data type",
            "To create a pointer variable",
            "To allocate memory for a variable"
          ],
          correctAnswer: "To define a new data type"
        },
        {
          question: "6: Which type of loop in C is guaranteed to execute at least once?",
          options: [
            "for loop",
            "while loop",
            "do-while loop"
          ],
          correctAnswer:         "do-while loop"
        },
        {
          question: "7: What is the maximum number of characters that a string in C can hold?",
          options: [
            "255",
            "256",
            "Unlimited"
          ],
          correctAnswer:    "Unlimited"
        },
        {
          question: "8: What is the purpose of the 'break' statement in C?",
          options: [
            "To exit the current loop or switch statement",
            "To skip the remaining code in a loop",
            "To indicate an error condition"
          ],
          correctAnswer:   "To exit the current loop or switch statement",
        },
        {
          question: "9: What is the difference between 'strcpy' and 'strncpy' functions in C?",
          options: [
            "'strcpy' copies a string until it encounters a null character, while 'strncpy' copies a specified number of characters",
            "'strncpy' copies a string until it encounters a null character, while 'strcpy' copies a specified number of characters",
            "There is no difference between 'strcpy' and 'strncpy'"
          ],
          correctAnswer:  "'strcpy' copies a string until it encounters a null character, while 'strncpy' copies a specified number of characters"
        },
        {
          question: "10: What is the purpose of the 'static' keyword in C?",
          options: [
            "To declare a variable with a static storage duration",
            "To make a variable accessible outside its scope",
            "To allocate dynamic memory for a variable"
          ],
          correctAnswer:   "To declare a variable with a static storage duration"
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
                            <h1 style={{color:"white"}}>C LANGUAGE  QUIZ RESULT</h1>
                            <h3 style={{color:"white"}}>You scored <span style={{color:"yellow"}} >{score} </span> out of {questions.length}</h3>
                            <button className='btn btn-danger' onClick={() => handleRestart()} style={{color:"white"}} >Restart Quiz</button>
                        </div>

                        {/* SHOW ANSWER  */}
                        <div className="col-12 showResult mt-3 text-white"
                        style={{backgroundColor:"#3a3434"}}>
    
                            <h3 className='text-center mb-4 m-2' >ALL ANSWER</h3>
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
                          <h1 className='text-warning' >C LANGUAGE   QUIZ</h1>
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

export default C

