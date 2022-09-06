
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../store/actions/RegisterAction";

function RegisterUser() {

    const [uname, setUname] = useState("");
    const [uemail, setUEmail] = useState("");
    const [umobile, setUMobile] = useState("");
    const [uusername, setUUsername] = useState("");
    const [upassword, setUPassword] = useState("");
    

    const newUser = useSelector(state => state.registerReducer.newUser)
    const dispatch = useDispatch();

    // const myFunction = async () => {
        
        
    //     but this function is not directly dispatching actions it returns middleware function, this middleware function returns dispatch action
    // };
// SubmitErrorHandler- A successful callback.
	

   const  handleSubmit = () => {
    const payload = {
        name:uname,
        email:uemail,
        mobile:umobile,
        username:uusername,
        password:upassword
    }
    dispatch(createUser(payload))
    
   }

    return (
        <div className="form">
        <div className="box">
            <h2 style={{ backgroundColor: "lightblue" }}>Register Form</h2>
            <div className="form-group">
                
                
                <label style={{color:"black"}} htmlFor='uname'> name</label>
                <input type="text" className="form-control" name="uname" value={uname} onChange={e=>setUname(e.target.value)}></input>
                </div>

               
               <div className="form-group">
                <label style={{color:"black"}} htmlFor='uemail'>Email </label>
                <input type="text" className="form-control" name="uemail" value={uemail} onChange={e=>setUEmail(e.target.value)}></input>
                </div>

                <div className="form-group">
                <label style={{color:"black"}} htmlFor='umobile'>Mobile</label>
                <input type="text" className="form-control" name="umobile" value={umobile} onChange={e=>setUMobile(e.target.value)}></input>
                </div>

                <div className="form-group">
                <label style={{color:"black"}} htmlFor='cusername'>Username</label>
                <input type="text" className="form-control" name="uusername" value={uusername} onChange={e=>setUUsername(e.target.value)}></input>
                </div>

                <div className="form-group">
                <label style={{color:"black"}} htmlFor='upassword'>Password</label>
                <input type="password" className="form-control" name="upassword" value={upassword} onChange={e=>setUPassword(e.target.value)}></input>
                </div>

            
            
            <div>
                <Link to="/user/login" style={{ textDecoration: 'none' }}><button onClick={handleSubmit} className="btn btn-info">SignIn</button></Link>
                <p style={{color:"black"}}>Already registered?<Link to="/user/login" style={{ textDecoration: 'none',color:"black"}}>Login</Link></p>
            </div>

        </div>
        </div>

    )



}
export default RegisterUser;