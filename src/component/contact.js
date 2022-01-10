import React from 'react'
import "../css/Style.css"

const contact = () => {
    return (
        <div>
             <div className="main">
            <div className="hamburger">
                {/* <img className="ham" src='./images/img.webp'alt="ham image" width="23"/>
                <img className="cross" src='./images/img.webp'alt="cross image" width="23"/> */}
            </div>
            <div className="contactForm">
                <h1>How can i help you?</h1>
                <form>
                    
                    <div className="mb-3">
                        <label for="clientemail" className="form-label">Name</label>
                        <input type="name" className="form-control" id="clientemail" aria-describedby="emailHelp"/>
                        
                        </div>
                    <div className="mb-3">
                        <label for="clientemail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="clientemail" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your phone & email with anyone else. </div>
                    </div>
                    <div className="mb-3">
                        <label for="clientphone" className="form-label">Phone</label>
                        <input type="phone" className="form-control" id="clientphone"/>
                    </div>
                    
                    <div className="mb-3">
                        <label for="clientemail" className="form-label">Enquiry</label>
                        <input type="email" className="form-control" id="clientemail" aria-describedby="emailHelp"/>
                        
                        </div>
                    <div className="mb-3" id="form-check">
                        <input type="checkbox" className="form-check-input" id="isclient"/>
                        <label className="form-check-label" for="isclient">i want to work with you</label>
                    </div>
                   
                    <button  type="submit" className="btn btn-sm">Submit</button>
                
                </form>
            </div>

        </div>
    </div>
       
    )
}

export default contact
