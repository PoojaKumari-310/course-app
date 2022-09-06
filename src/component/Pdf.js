 import React, {useState} from "react";
 // Import the main component
 // we need 3 packages for the purpose for viewing pdfs in browsers.
 import { Viewer } from '@react-pdf-viewer/core'; // install this library
 // Plugins
 import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
 // Import the styles
 import '@react-pdf-viewer/core/lib/styles/index.css';
 import '@react-pdf-viewer/default-layout/lib/styles/index.css';
 // Worker
 import { Worker } from '@react-pdf-viewer/core'; // install this library
 import { Link, useNavigate, useParams } from "react-router-dom";


import defaultPdfFile from '../Coursepdf/java.pdf'


export const Pdf = () => {

    // const [defaultPdf]=useState(PdfFile);

   // Create new plugin instance

const defaultLayoutPluginInstance = defaultLayoutPlugin();

  //These are the states for onchange events
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');

  // for submit event
  const [viewPdf, setViewPdf]=useState(null);
  const navigate = useNavigate();

  // onchange event
  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        //this piece of code converts our file to base64 code, so we can use that as our source url
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setPdfFileError('');
            }
      }
      // else{
      //   setPdfFile(null); // the pdfFile is going to be null and we will have an error msg
      //   setPdfFileError('Please select valid pdf file');
      // }
    }
  //   else{
  //     console.log('select your file');
  //   }
  }


 // we will only let user submit when our pdf file is not null and we know that the moment user select anyother file other than pdf
 // the pdfFile is going to be null and we will have an error msg
 // In submit event we are populating setViewPdf with pdfFile and we are getting pdfFile in onchange event
 
   // form submit
 const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
    }
    else{
      setViewPdf(null);
    }
  }

    return (
        <div className='container'>

        <br></br>
        
          <form className='form-group' onSubmit={handlePdfFileSubmit}>
            {/* <input type="file" className='form-control'
              required onChange={handlePdfFileChange}
            /> */}
            {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
            <br></br>
            {/* <button type="submit" className='btn btn-success btn-lg'>
              UPLOAD
            </button> */}
          </form>
          <br></br>
          {/* <h4>View PDF</h4> */}
          {/* <button  className ="btn btn-info" to={'/payment/save'} style={{paddingLeft: "20px", marginLeft: "1000px"}} >Next</button> */}
          {/* <p className='' style={{ paddingLeft: "30px"}}></p> */}
          <Link style={{ textDecoration: 'none', paddingLeft: "20px", marginLeft: "1000px" }} to={`/Review`}> <button className="btn btn-info">Next</button></Link>
          <h4>View PDF</h4>
        <div className='pdf-container'>
           {/* show pdf conditionally (if we have one)   */}
          {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"> 
         
          <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
       if we dont have pdf or viewPdf state is null
        {!viewPdf&&<>No pdf file selected</>}
      </div>
      <br/>
      {/* <button onClick={viewPdf} className="btn btn-info" >Next</button> */}
     

     
     
        </div>
        //  <button onClick={() => navigate(-1)} type="button" className="btn btn-info">Back</button>&nbsp;&nbsp;
    )


}
export default Pdf
