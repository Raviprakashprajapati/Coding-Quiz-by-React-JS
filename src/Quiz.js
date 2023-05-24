import React, { useState } from 'react'


function Quiz() {


    
    const questions = [
        {
          question: "1: What is React.js?",
          options: [
            "A server-side programming language",
            "A JavaScript library for building user interfaces",
            "A database management system"
          ],
          correctAnswer: "A JavaScript library for building user interfaces"
        },
        {
          question: "2: Which of the following is the correct way to render a React component?",
          options: [
            "ReactDOM.render(<App />, document.getElementById('root'));",
            "React.render(<App />, document.getElementById('root'));",
            "ReactDOM.renderComponent(<App />, document.getElementById('root'));"
          ],
          correctAnswer:  "ReactDOM.render(<App />, document.getElementById('root'));"
        },
        {
          question: "3: What is JSX in React.js?",
          options: [
            "A JavaScript extension for XML-like syntax",
            "A templating engine for React components",
            "A CSS-in-JS solution for styling React components"
          ],
          correctAnswer: "A JavaScript extension for XML-like syntax"
        },
        {
          question: "4: What is the purpose of state in React.js?",
          options: [
            "To store and manage component data that can change over time",
            "To define the initial properties of a component",
            "To handle user events and interactions"
          ],
          correctAnswer:   "To store and manage component data that can change over time"
        },
        {
          question: "5: In React, what is the role of virtual DOM?",
          options: [
            "It enables server-side rendering of React components",
            "It improves the performance of React applications by minimizing actual DOM updates",
            "It is an alternative to the real DOM for displaying components in the browser"
          ],
          correctAnswer: "It improves the performance of React applications by minimizing actual DOM updates"
        },
        {
          question: "6: How can you pass data from a parent component to a child component in React?",
          options: [
            "By using props",
            "By using state",
            "By using context"
          ],
          correctAnswer:  "By using props"
        },
        {
          question: "7: What is the lifecycle method used for initializing state or performing other setup tasks in a React component?",
          options: [
            "componentDidMount",
            "componentDidUpdate",
            "componentWillMount"
          ],
          correctAnswer: "componentDidUpdate"
        },
        {
          question: "8: What is the purpose of keys in React when rendering lists of components?",
          options: [
            "They help identify each component uniquely",
            "They define the order in which components are rendered",
            "They enable communication between parent and child components"
          ],
          correctAnswer:  "They help identify each component uniquely"
        },
        {
          question: "9: What is the recommended way to update the state of a component in React?",
          options: [
            "Directly modifying the state object",
            "Using the setState() method",
            "Assigning a new value to the state variable"
          ],
          correctAnswer:    "Using the setState() method"
        },
        {
          question: "10: How can you handle form submissions in React?",
          options: [
            "By using the onSubmit event of the form element",
            "By using the onClick event of the submit button",
            "By using the onChange event of the form inputs"
          ],
          correctAnswer:   "By using the onSubmit event of the form element"
        }
      ];
     
    //  const questions = [
    //         {
    //           question: "1: What is React.js?",
    //           options: [
    //             "A server-side programming language",
    //             "A JavaScript library for building user interfaces",
    //             "A database management system"
    //           ],
    //           correctAnswer: "A JavaScript library for building user interfaces"
    //         },
    //         {
    //           question: "2: Which of the following is the correct way to render a React component?",
    //           options: [
    //             "ReactDOM.render(<App />, document.getElementById('root'));",
    //             "React.render(<App />, document.getElementById('root'));",
    //             "ReactDOM.renderComponent(<App />, document.getElementById('root'));"
    //           ],
    //           correctAnswer:  "ReactDOM.render(<App />, document.getElementById('root'));"
    //         }
    //     ]

      

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
        // let asn = []
        // asn.push(selectedAnswer)
        // setCaptureAnswer(asn)
        // console.log(asn)
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
                            <h1 style={{color:"white"}}>QUIZ RESULT</h1>
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
                          <h1 className='text-warning' >React JS QUIZ</h1>
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

export default Quiz
