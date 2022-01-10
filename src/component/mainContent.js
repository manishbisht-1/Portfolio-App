import React from 'react'
import MainImage from "../images/user.jpg"
import "../css/Style.css"
import PDF from "../CV/IT-MANISH.pdf"
import Contact from "../component/contact"


const mainContent = () => {

    return (
        
        <div>
            <div class="infoContainer">
                <div class="devinfo">
                    <div class="hello">Hello I am, </div>
                    <div class="name">Manish Bisht </div>
                    <div class="about">Web Developer

                    </div>
                    {/* <div><pre>Enthusiastic Web Developer</pre></div> */}
                    <div class="buttons">
                        <a href={PDF} target={"_blank"}><button class="btn">Download CV</button></a>
                        <button class="btn" >Contact Me</button>
                    </div>
                </div>
                <div class="devPic">
                    <img src={MainImage} />
                </div>
            </div>
        </div>
    )
}

export default mainContent
