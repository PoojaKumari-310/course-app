import React from "react";
import FetchAllCourse from "./FetchAllCourse";
// import Search from "./Search";
import { Link } from "react-router-dom";
import Footer from "./Footer";


function Home() {
    return (
        <div className="a">
             
            <h1 style={{color:"white"}}> Find the right course for you </h1>
            <p style={{color:"white"}}>Find Relevant Information Here</p>
            <p style={{color:"white"}}>Start Your Search Now</p>
           

            <div class="middle">
            <br/>

            <h4></h4><br />
                <h4>Personalized Search Results 99% Match and 100% Secure</h4><br />
                <h4> Only relevant search results, Click here and Find. Easy to Access.</h4><br />
                <h4>Simple to Use.</h4><br />
                
                
            </div>
            <div class="middle"></div> 

             {/* <button onClick={"/Search"} className="btn btn-info">Gets Started</button>&nbsp;&nbsp; */}
            <Link to={"/Search"} className="btn btn-danger">Start learning today</Link><br></br><br></br> 
           
             

             {/* <Search/> */}
             <Footer/>
           

   
            
        </div> 

          
    )
}
export default Home;


  
    
    
