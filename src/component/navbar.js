import React from 'react'
import "../css/Style.css"
import { NavLink as Link } from 'react-router-dom';
// import Ham from "../images/hamburger (2).png"
// import Cross from "../images/cross.png"

const navbar = () => {
    return (
        <div>

            <div className='container'>
                <div className='sidebar sidebarGo'>

                    <nav>
                        <ul>
                        {/*     <img className="ham" src={Ham} width="23" />*/}
                            {/* <img className="cross" src={Cross} width="23" /> */}
                            <li><Link to="/" activeclassname="active" end>Home</Link></li>
                            <li><Link to="/intro/" activeclassname="active">Intro</Link></li>
                            <li><Link to="/services/" activeclassname="active">Projects</Link></li>
                            <li><Link to="/blog/" activeclassname="active">Blog</Link></li>
                            <li><Link to="/contact/" activeclassname="active">Contact Me</Link></li>
                        </ul>

                    </nav>

                </div>

            </div>
            {/* </div> */}
        </div>

    );
}

export default navbar
