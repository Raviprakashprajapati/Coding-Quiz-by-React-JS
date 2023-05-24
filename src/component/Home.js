import React from 'react'
import { Link } from "react-router-dom"
function Home() {
    return (
        <div className='container-fluid' >
           

            <div class="grid gap-3 d-flex text-center  flex-wrap  justify-content-center align-items-center  ">
                <div class="p-2 g-col-8 btn btn-danger "><Link to="/" className='btn btn-danger'  >React JS</Link></div>
                <div class="p-2 g-col-8 btn btn-danger "><Link to="Ds" className='btn btn-danger'  >DATA STRUCTURE</Link></div>
                <div class="p-2 g-col-8 btn btn-danger "><Link to="javascript" className='btn btn-danger'  >JAVASCRIPT</Link></div>
                <div class="p-2 g-col-8 btn btn-danger "><Link to="C" className='btn btn-danger'  >C LANGUAGE</Link></div>
               
            </div>


        </div>
    )
}

export default Home
