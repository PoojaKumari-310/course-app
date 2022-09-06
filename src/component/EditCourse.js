import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {updateCourse} from '../store/actions/CourseAction';

function EditCourse() {

    const course = useSelector(state => state.courseReducer.course)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cId, setCId] = useState(course.courseId);
    const [cName, setCName] = useState(course.courseName);
    const [cDescription, setCDescription] = useState(course.courseDescription);
    const [cFee, setCFee] = useState(course.courseFee);

    const handleSubmit = () => {
        const payload = {
            courseId:cId,
            courseName: cName,
            courseDescription: cDescription,
            courseFee: cFee,
        }

        dispatch(updateCourse(payload));
        alert("Course Updated");
        navigate(-1);

}
return (
    <div>
        <div className="container">
            <h2 style={{ backgroundColor: "lightblue" }}>Course Form</h2>
            <div class="form-group">
                <label htmlfor="cId">Course Id :</label>
                <input type="text" name="cId" className="form-control" value={cId} disabled onChange={e => setCId(e.target.value)}></input>
            </div>

            <div class="form-group">
                    <label htmlfor="cName">Course Name :</label>
                    <input type="text" name="cName" className="form-control" value={cName} onChange={e => setCName(e.target.value)}></input>
                </div>

                <div class="form-group">
                    <label htmlfor="cDescription"> CourseDescription :</label>
                    <input type="text" name="cDescription" className="form-control" value={cDescription} onChange={e => setCDescription(e.target.value)}></input>

                </div>

                <div class="form-group">
                    <label htmlfor="cFee">Course Fee :</label>
                    <input type="text" name="cFee" className="form-control" value={cFee} onChange={e => setCFee(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Update</button>
                </div>
                <div style={{ float: "right" }}>
                    {/* <Link to="/" className="btn btn-secondary">BackToHome</Link> */}
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">Go Back Home</button>
                </div>

            </div>
        </div>
    )
}
export default EditCourse;