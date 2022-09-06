import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doUserLogin } from '../store/actions/Useraction';
import { Link } from 'react-router-dom';
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
// loggedInUser-Returns the current user logged in to the application
// navigate is just manage your app state and linking
    const loggedInUser = useSelector(state => state.UserReducer.loggedInUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doLogin = () => {
// let is  a local variable
        let errors = {};
        if (!username) {

            errors['usernameError'] = "username is required"

        }

        if (!password) {

            errors['passwordError'] = "password is required";

        }
     setFormErrors(errors); // updating the state
// if length is equal to zero means no error then submit the request.
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {

        

            const payload = {

                username: username,
                password: password

            }
            dispatch(doUserLogin(payload))



        }
      
    }


    return (
        
        <div className="container "  id='p' style={{ display: "flex", justifyContent: "center", height: "400px", alignItems: "center" ,marginTop:"50px",paddingTop:"140px",width:"350px",marginLeft:"50%"}}>
   
            {
                loggedInUser !== null ?
                    navigate("/")
                    :
                    <div className='main_divv' >
                         <h4>SignIn</h4>
                        <div className="form-group">
                            <label htmlFor='username' >Username</label>
                            <input type="text" required placeholder='Enter user name' className="form-control" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                            {
                                  formErrors.usernameError &&

                                  <div style={{ color: 'red' }}>{formErrors.usernameError}</div>
                            }

                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type="password" required placeholder='Enter password' className="form-control"  name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            {
                                  formErrors.passwordError &&

                                  <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                            }

                        </div>

                        <div>
                            <button onClick={doLogin} className="btn btn-primary">Login</button>
                        </div>
                        <div className='new_account'>
                            <Link className="nav-link" to="/user/register">
                                <p className='' style={{ padding: "0px", fontWeight: "500", marginTop: "10px", cursor: "pointer" }}>Create New Account </p>
                            </Link>
                        </div>
                    </div>
            }

        </div >
    )
}

export default Login;