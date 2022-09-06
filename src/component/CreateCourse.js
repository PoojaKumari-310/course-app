import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {createCourse} from "../store/actions/CourseAction";

// useSelector - to get store state
//useEffect - based on class based components it allows you to perform side eddects in your components like fetching data
// state - it is built in react object i.e used to contain data or information about the component.

function CreateCourse() {

    const [cName, setCName] = useState("");
    const [cDescription, setCDescription] = useState("");
    const [cFee, setCFee] = useState("");

    const [formErros, setFormErrors] = useState({});

    const newCourse = useSelector(state => state.courseReducer.newCourse)
    const dispatch = useDispatch();

    const handleSubmit = () => {

        //validate form data
        let errors = {};

        if (!cName) {
            errors['courseNameError'] = "Course Name is required";
        }
        if (!cDescription) {
            errors['courseDescriptionError'] = "Description is required";
        }
        if (!cFee) {
            errors['courseFeeError'] = "Course fee must be a positive number";
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

         //if data is valid disptaching the request to middleware

         if (noErrors) {
            console.log("Valid from data");

            const payload = {
                name: cName,
                description: cDescription,
                fee: cFee
            }
            dispatch(createCourse(payload));
        }
    }
               



   return (
    <div className="form">
     <div className="container">
     {/* here container provides equality like common margins , padding ,colors, fonts */} 
        <h2 style={{ backgroundColor: "lightblue" }}>Course Form</h2>
        {/* The <div> tag  defines a division or a section in an HTML document, it is easily styled by using the class or id attribute */}
        <div class="form-group">
            <label style={{color:"black"}} htmlfor="cName">Course Name :</label>
            <input type="text" name="cName" className="form-control" value={cName} onChange={e => setCName(e.target.value)}></input>
            {
                formErros.courseNameError &&
                <div style={{color:'red'}}>{formErros.courseNameError}</div>
            }
        </div>
        <div class="form-group">
            <label style={{color:"black"}} htmlfor="cDescription"> CourseDescription :</label>
            <input type="text" name="cDescription" className="form-control" value={cDescription} onChange={e => setCDescription(e.target.value)}></input>
            {
                formErros.courseDescriptionError &&
                <div style={{color:'red'}}>{formErros.courseDescriptionError}</div>
            }
        </div>
        <div class="form-group">
            <label style={{color:"black"}} htmlfor="cFee"> CourseFee :</label>
            <input type="text" name="cFee" className="form-control" value={cFee} onChange={e => setCFee(e.target.value)}></input>
            {
                formErros.courseFeeError &&
                <div style={{color:'red'}}>{formErros.courseFeeError}</div>
            }
           
           
        </div>
       
        <div>
                <button onClick={handleSubmit} className="btn btn-info">Submit</button>&nbsp;&nbsp; 
                 {/* non-breaking space-lets you create multiple spaces that are visible on a web page and not only in the source code. */}
                <Link to="/course/view/all"><button type="button" className="btn btn-info">View</button></Link>
            </div>

        </div>
        </div>
 )
        }
        export default CreateCourse;
    

