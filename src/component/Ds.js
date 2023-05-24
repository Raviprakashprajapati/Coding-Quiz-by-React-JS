import React, { useState } from 'react'


function Ds() {


    
    const questions = [
        {
          question: "1: Which data structure follows the 'Last-In-First-Out' (LIFO) principle?",
          options: [
            "Stack",
            "Queue",
            "Linked List"
          ],
          correctAnswer: "Stack"
        },
        {
          question: "2: Which data structure follows the 'First-In-First-Out' (FIFO) principle?",
          options: [
            "Stack",
            "Queue",
            "Linked List"
          ],
          correctAnswer: "Queue"
        },
        {
          question: "3: Which data structure allows elements to be added and removed from both ends?",
          options: [
            "Stack",
            "Queue",
            "Linked List"
          ],
          correctAnswer:  "Linked List"
        },
        {
          question: "4: In a stack, which operation adds an element to the top of the stack?",
          options: [
            "Push",
            "Pop",
            "Peek"
          ],
          correctAnswer: "Push"
        },
        {
          question: "5: In a queue, which operation removes an element from the front of the queue?",
          options: [
            "Enqueue",
            "Dequeue",
            "Peek"
          ],
          correctAnswer: "Dequeue"
        },
        {
          question: "6: Which data structure is used to implement a stack or a queue?",
          options: [
            "Array",
            "Linked List",
            "Tree"
          ],
          correctAnswer:  "Linked List"
        },
        {
          question: "7: In a linked list, which node contains the actual data?",
          options: [
            "Head node",
            "Tail node",
            "Intermediate node"
          ],
          correctAnswer:  "Tail node"
        },
        {
          question: "8: Which data structure allows efficient insertion and deletion at both ends?",
          options: [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list"
          ],
          correctAnswer:   "Doubly linked list"
        },
        {
          question: "9: Which operation retrieves the value of the front node in a linked list?",
          options: [
            "Insert",
            "Delete",
            "Traverse"
          ],
          correctAnswer:   "Traverse"
        },
        {
          question: "10: Which data structure uses a pointer to connect nodes in a sequence?",
          options: [
            "Stack",
            "Queue",
            "Linked List"
          ],
          correctAnswer: "Linked List"
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
                            <h1 style={{color:"white"}}>DATA STRUCTURE  QUIZ RESULT</h1>
                            <h3 style={{color:"white"}}>You scored <span style={{color:"yellow"}} >{score} </span> out of {questions.length}</h3>
                            <button className='btn btn-danger' onClick={() => handleRestart()} style={{color:"white"}} >Restart Quiz</button>
                        </div>

                        {/* SHOW ANSWER  */}
                        <div className="col-12 showResult mt-3 text-white"
                        style={{backgroundColor:"#3a3434"}}>
    
                            <h3 className='text-center mb-4' >ALL ANSWER</h3>
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
                          <h1 className='text-warning' >DATA STRUCTURE  QUIZ</h1>
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

export default Ds

