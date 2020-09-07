import React from 'react';
import { Link } from 'react-router-dom';

const  Items = [ 
  {
    content:"My Profile",
    link:"Home"
  },
   {
    content:"About Me",
    link:"About"
  },
  {
    content:"My Promotions",
    link:"Promotions"
  },
  {
    content:"Have Fun",
    link:"Interact"
  }
 ]


const Footer = () =>{
  return ( 
    <div className="footer">
      <div className="container">       
        <div  className="row justify-content-center"> 
              <div className="col-12 col-sm-6">
                    <div className="row justify-content-center">   
                    {
                    Items.map((item, i) => {
                  return(
                   <div key={i} className="m-2">
                      <Link to={`/${item.link}`}>{item.content}</Link>
                     </div>  
                    )})
                     }
                    </div>
              </div>
                <div className="col-12 col-sm-6">
                    <div className="text-center">
                        <a className="btn fa fa-mobile fa-lg" href="tel:+919677990745"> </a>
                        <a className="btn fa fa-envelope fa-lg" href="mailto:jeyansaran620@gmail.com"> </a>
                        <a className="btn fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/jeyansaran620"> </a>
                        <a className="btn fa fa-github fa-lg" href="https://www.github.com/jeyansaran620"> </a>
                        <a className="btn" href="https://www.hackerrank.com/jeyansaran620"><strong>Hackerrank</strong></a>
                        <a className="btn" href="https://auth.geeksforgeeks.org/user/jeyansaran620/profile"><strong>Geeks for Geeks</strong></a>
                        </div>
                </div>
                </div>  
            <div className="row justify-content-center">             
                <div className="col-auto m-0 mt-2">
                    <p>Designed by <a href="https://www.linkedin.com/in/jeyansaran620">jeyansaran620</a></p>
                </div>
            </div>
        </div>
  </div>     
  );
}


export default Footer;
