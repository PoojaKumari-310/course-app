import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../store/actions/CourseAction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import img1 from '../imagescopy/img4.png';
import img2 from '../imagescopy/img2.jpg';
import img3 from '../imagescopy/img3.png';
import img4 from '../imagescopy/img7.png';
import img5 from '../imagescopy/img5.jpg';
import img6 from '../imagescopy/img6.png';
import img7 from '../imagescopy/img1.jpg';
import Pdf from './Pdf';



function FetchCourseById() {
 
    // const course = useSelector(state => state.courseReducer.course)
    const [currentIndex, setCurrentIndex] = useState(0);
    const course = useSelector(state => state.courseReducer.course)

    //predefined react-redux function
    //requesting a dispatch to store
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const myFunction = async () => {
        dispatch(getCourseById(id))

    };
    useEffect(() => {
        myFunction()
    }, []);
    let ImgArry = [img1,img2,img3,img4,img5,img6,img7]


    return (
        <div>
            <h2 style={{ backgroundColor: "lightblue" }}>Course Details</h2>
            {
                course !== null &&
                <div className="row">
                    <div className="col">
                       
                    </div>

                    <div className="col">
                         <p style={{color:"black"}}>CourseId : {course.courseId}</p>
                        <p style={{color:"black"}}>Course Name : {course.name}</p>
                        <p style={{color:"black"}}>Description: {course.description}</p>
                        <p style={{color:"black"}}>Fee: {course.fee}</p>
                        

                        <div>
                          
                          
                           
                          <button onClick={() => navigate(-1)} type="button" className="btn btn-info">Back</button>&nbsp;&nbsp;
                          
 
                             {/* <Link style={{ textDecoration: 'none' }} to={`Pdf`}> <button className="btn btn-info">Pdf</button></Link>  */}
                           {/* <Link style={{ textDecoration: 'none' }} to={`/feedback/save/${course.courseId}`}> <button className="btn btn-info">Next</button></Link> */}
                     <Link style={{ textDecoration: 'none' }} to={`/payment/save`}> <button className="btn btn-info">Buy</button></Link>
                       </div>
                    

                    </div>
                   
                       
                     
                    </div>
            }
         </div>
            
    )
    
    

}

export default FetchCourseById;