import React, { useEffect } from 'react';
import { getAllCourse} from '../store/actions/CourseAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img1 from '../imagescopy/img4.png';
import img2 from '../imagescopy/img2.jpg';
import img3 from '../imagescopy/img3.png';
import img4 from '../imagescopy/img7.png';
import img5 from '../imagescopy/img5.jpg';
import img6 from '../imagescopy/img6.png';
import img7 from '../imagescopy/img1.jpg';




function FetchAllCourse() {

    const courses = useSelector(state => state.courseReducer.courses)
    const dispatch = useDispatch();

    const myFunction = async () => {
        dispatch(getAllCourse())
    };

   

    useEffect(() => {
        myFunction()
    }, []);
       let ImgArry = [img1,img2,img3,img4,img5,img6,img7]
    
    
  return (
        <div>
           
            <div class="row" >
                {
                    courses.map((p, index) =>
                        <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-3">
                           
                          


                            <Link to={`/course/view/${p.courseId}`}>
                                <div className="card -body" style={{ width: "200px", height: "400px" }}>
                                   
                                    <img className="card-img-top" src={ImgArry[index]} alt="Image Not Found" height={240} />
                                    <div   className="card-body"  style={{backgroundColor:"#E94057"}}>

                                        <h4 className="card-text m-0 pt-1"  style={{color:"white"}}>{p.courseName}</h4>
                                        <h4 className="card-text m-0 pt-1" style={{color:"white"}}>Price:₹{p.coursePrice}</h4>
                                       
                                
                                        <button style={{backgroundColor:"white",color:"black"}} type="button" className="btn btn-info"><p className="card-text">View Details </p></button>
                                    </div>
                                    </div>
                                
                            </Link>
                    
                        </div>
                    )
                }
            </div>
        </div>
    )
}


    export default FetchAllCourse;