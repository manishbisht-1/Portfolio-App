import React from 'react'
// import Navbar from "../component/navbar"
import "../css/Style.css"





const intro = () => {

    
    return (
    <div>
 
        <div className="mainIntro">
            <div className="intro">

            <h2 className='about'>About me</h2>
            <p>I am a Web Developer
            </p>
        
            <h2 className='myskills'>My Skills</h2>
            <div className="skillcontainer">
              <div className="skillItem">  HTML:<div className='blankbox'><div className="skill hundrered"></div></div></div>
               <div className="skillItem"> CSS:<div className='blankbox' style={{marginLeft:'60px'}}><div className="skill fifty"></div></div></div>
               <div className="skillItem"> JS:<div className='blankbox'style={{marginLeft:'75px'}}><div className="skill t5"></div></div></div>
               <div className="skillItem"> REACT JS:<div className='blankbox' style={{marginLeft:'13px'}}><div className="skill t6"></div></div></div>
               <div className="skillItem"> GITHUB:<div className='blankbox'style={{marginLeft:'25px'}}><div className="skill t7" ></div></div></div>
               <div className="skillItem"> SQL:<div className='blankbox'style={{marginLeft:'60px'}}><div className="skill hundrered"></div></div></div>
            </div>
            
            </div>
        </div>
    </div>
    
    )
}

export default intro
