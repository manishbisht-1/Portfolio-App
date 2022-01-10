import React from 'react'
import "../css/Style.css"
const blog = () => {
    return (
        <div>
            <div className="mainBlog">
                <div className="hamburger">
                    {/* <img className="ham" src='./images/hamburger (2).png' alt="ham image" width="23" />
                    <img className="cross" src='./images/cross.png' alt="cross image" width="23" /> */}
                </div>
                <div className="blogcontainer">
                    <h1>Blogs by Manish</h1>
                    <div className='flex1'>
                    <div className="blogItem">
                        <h2>Learn HTML</h2>
                        <p>Html is used for structring Websites and Web Apps.
                        </p>
                        <a href='https://learndigitalmarketing432784750.blogspot.com/2022/01/html-foundation-of-web.html' target={'_blank'}><button className="btn btn-sm">Read More</button></a>
                        
                    </div>
                    <div className="blogItem">
                        <h2>Learn CSS</h2>
                        <p>Css is used for styling Websites and Web Apps.
                        </p>
                <a href='https://learndigitalmarketing432784750.blogspot.com/2022/01/css-or-styling-language.html' target={'_blank'}> <button className="btn btn-sm">Read More</button></a>
                    </div>
                    
                    <div className="blogItem">
                        <h2>Learn JAVASCRIPT</h2>
                        <p>Javscript is the engine of Web Developement.
                        </p>
                        <a href='https://learndigitalmarketing432784750.blogspot.com/2022/01/javascript-most-popular.html' target={"_blank"}><button className="btn btn-sm">Read More</button></a>
                    </div>
                    </div>
                    <div className='flex1'>
                    <div className="blogItem">
                        <h2>Learn REACT JS</h2>
                        <p>React Js is the library of Javascript developed by Facebook.
                        </p>
                        <a href='https://learndigitalmarketing432784750.blogspot.com/2022/01/react-js-front-end-library.html' target={"_blank"}>   <button className="btn btn-sm">Read More</button></a>
                    </div>
                    <div className="blogItem">
                        <h2>Learn SQL</h2>
                        <p>SQL is the database language.SQL is Relational database.
                        </p>
                        <a href='https://learndigitalmarketing432784750.blogspot.com/2022/01/sql-relational-datbase.html' target={"_blank"}><button className="btn btn-sm">Read More</button></a>
                    </div>
                    <div className="blogItem">
                        <h2>Learn Digital Marketing</h2>
                        <p>Digital Marketing is also known as online Marketing.
                        </p>
                        <a href='https://learndigitalmarketing432784750.blogspot.com/2021/07/world-accept-digital-marketing-wiil-you.html' target={'"_blank"'}><button className="btn btn-sm">Read More</button></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            

    )
}

export default blog
