import React from "react";
import { Link, useNavigate } from "react-router-dom";
 import img8 from "../imagescopy/logo.jpg"

function NavBar() {
    // const myUser = localStorage.getItem("myUser");
    // const userId = JSON.parse(myUser).userId
    // const name = JSON.parse(myUser).name
    // const handlelogout = () => {
    //     localStorage.setItem("myUser",JSON.stringify({}));
    //     alert("Logout Successful");
    //     window.location.href="/"
    // }


    // const navigate = useNavigate();


    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="navbar-brand" to="/" style={{ width: "50px", height: "30px" }}><img src={img8} class="rounded-circle" style={{ width: "40px", height: "50px", paddingBottom: "20px" }}></img>Online Courses App</Link>
            <ul className="nav navbar-nav ml-auto">
              
                <li className="nav-item">
                    <Link style={{ color: "lightblue" }} className="nav-link" to="/user/login">Login</Link>
                </li>

                {/* <li className="nav-item">
                    <Link style={{ color: "lightblue" }} className="nav-link" to="/user/register">Register</Link>
                </li> */}

                {/* <li className="nav-item">
                    <Link style={{ color: "lightblue" }} className="nav-link" to="/review">Review</Link>
                </li> */}

                <li className="nav-item">
                    <Link style={{ color: "lightblue" }} className="nav-link" to="/pdf"> Pdf</Link>
                </li>

           
               <li className="nav-item">
                    <Link style={{ color: "lightblue" }} className="nav-link" to="/aboutUs">About Us</Link>
                </li>
                

                
                {/* {userId ? <li class="nav-item pr-3">
                    <Link  to="#"  style={{ color: "lightblue" }} className="nav-link">
                        {name}
                    </Link>
                </li> :
                    <li class="nav-item pr-3">
                        <Link  to="/user/login"  style={{ color: "lightblue" }} className="nav-link">SignIn</Link>
                    </li>}
                {userId ? <li class="nav-item pr-3" onClick={handlelogout}>
                    <Link className="nav-link" to="#"  style={{fontWeight:"bold"}}>
                        {
                            "LOGOUT"
                        }
                    </Link>
                </li> :
                    ""} */}
                
            </ul>
        </nav>
             
              
        

    )
}
export default NavBar;