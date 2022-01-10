import React from 'react'
import "../css/Style.css"

import img1 from "../images/Proj/searchFA.png"
import img2 from "../images/Proj/Restaurant2.png"
import img3 from "../images/Proj/DigitalMK.png"
import img4 from "../images/Proj/Port.png"

const services = () => {
    return (
        <div>
             <h2 style={{marginLeft:'850px'}}>MY PROJECTS</h2>
             
            <div className='servicePage'>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
             <div className="row row-cols-1 row-cols-md-4 g-6">
  <div className="col">
    <div className="card">
      <img src={img1} className="card-img-top" alt="..."/>
      <div className="card-body">
     <a href=' https://searchfilterapp.herokuapp.com/' target={"_blank"}><h5 className="card-title">Search Filter App</h5></a>
        <p className="card-text">In this Projects following technology used:
        HTML,CSS,JAVASCRIPT,REACT JS.And this website is deployed on Heroku.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img3} className="card-img-top" alt="..."/>
      <div className="card-body">
       <a href='https://digitalmk.netlify.app/' target={'_blank'}> <h5 className="card-title">DigitalMK Website</h5></a>
        <p className="card-text">In this Projects following technology used:
        HTML,CSS,JAVASCRIPT,REACT JS.And this website is deployed on Nelify.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
      <a href='https://restaurantmenuapp.netlify.app/' target={'_blank'}> <h5 className="card-title">Restaurant Menu App</h5></a>
        <p className="card-text">In this Projects following technology used:
        HTML,CSS,JAVASCRIPT,REACT JS.And this website is deployed on Netlify.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img4} className="card-img-top" alt="..."/>
      <div className="card-body">
      <a href=' https://manish-portfolio-app.netlify.app/' target={'_blank'}><h5 className="card-title">Portfolio Web</h5> </a>
        <p className="card-text">In this Projects following technology used:
        HTML,CSS,JAVASCRIPT,REACT JS.And this website is deployed on Nelify.</p>
      </div>
    </div>
  </div>
</div>
      </div> 
      </div>
    )
}

export default services
