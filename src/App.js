import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home  from './component/Home';
import CreateCourse from './component/CreateCourse';
import FetchAllCourse from './component/FetchAllCourse';
import FetchCourseById from './component/FetchCourseById';
import AboutUs from './component/AboutUs';
// import RegisterUser from './component/RegisterUser';
import EditCourse from './component/EditCourse';
import NavBar from './component/NavBar';

import Search from './component/Search';

import FetchPaymentById from './component/FetchPaymentById';
import CreatePayment from './component/CreatePayment';
import CourseVideo from './component/CourseVideo';
import Review from './component/Review';

import Pdf from './component/Pdf';
import Footer from './component/Footer';
import Login from './component/Login';
import SignUp from './component/SignUp';





function App() {
  return (
    <div className="App">
         
         <Router>
        <NavBar />
        <Routes>
       
        
          
          <Route path="/" element={<Home />}></Route>
         <Route path="/course/save" element={<CreateCourse />}></Route>
          <Route path="/course/view/all" element={<FetchAllCourse />}></Route>
          <Route path="/course/view/:id" element={<FetchCourseById />}></Route>
          <Route path="/course/edit/:id" element={<EditCourse />}></Route>
          <Route path="/course/delete/:id" element={<FetchCourseById />}></Route>
          <Route path="/aboutUs" element={<AboutUs/>} />
       
          <Route path="/" element={<NavBar />}></Route>
         
          <Route path="/Search" element={<Search/>}></Route>
         
          <Route  path="./Data1" element={<data1/>}></Route>
          <Route  path="/payment/find/:id" element={<FetchPaymentById/>}></Route>
          <Route  path="/payment/save" element={<CreatePayment/>}></Route>
          {/* <Route path="/CourseVideo" element={<CourseVideo/>}></Route> */}
           <Route path="/Review" element={<Review/>}></Route>
        
           <Route path="/Pdf" element={<Pdf/>}></Route>
           <Route  path="/Footer" element={<Footer/>}></Route>
           <Route  path="/user/login" element={<Login/>}></Route>
           <Route path="/user/register" element={<SignUp/>}></Route>
           



         


        
          



        


        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
