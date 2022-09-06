import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addPayment,  } from "../store/actions/PaymentAction";

function CreatePayment() {
   

   
    const [pModeOfPayment, setPModeOfPayment] = useState("");
     const [pPaymentStatus, setPPaymentStatus] = useState("");

   
    const [formErros, setFormErrors] = useState({});


    const newPayment = useSelector(state => state.paymentReducer.newPayment)

    const course = useSelector(state => state.courseReducer.course)

    const dispatch = useDispatch();
    const navigate = useNavigate();


   
        const handleSubmit = () => {

            let errors = {};
    
            if (!pModeOfPayment) {
                errors['paymentMode'] = "Payment mode is required";
            }
            // else
            // {
            //     navigate("/payment/find/" + newPayment.paymentId);
            // }
           
    
            setFormErrors(errors);
    
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                console.log("Valid from data");

              
        const payload = {
            
          
           

        modeOfPayment:pModeOfPayment,
        paymentStatus:pPaymentStatus,
        amount:course.fee
           
            
        }
        console.log(payload);
        dispatch(addPayment(payload))

      
        
       
        
    }
}

    const viewPayment = () => {
        navigate("/payment/find/" + newPayment.paymentId)
    }

    function sumfunction(){
        handleSubmit();
        viewPayment();
    }

    
    
   
    return (
        <div className="change_color">

            <div className="container">
                {
                    newPayment !== null  &&   alert("payment" +newPayment.paymentId)
                }
                <center>
                    <br></br>
                    <br></br>

               
                    <label style={{color:"black"}}  className='form-label h4'>Payment</label>
                    
            
                    <div className="form-group" style={{ width: "350px", height: "80px" }}>
                        <label style={{ color: "black" }} htmlFor='pModeOfPayment'> <em style={{ fontSize: "20px" }}>ModeOfPayment</em>  </label>
                        <select type="text" className="form-control" name="pDescription" value={pModeOfPayment} onChange={e => setPModeOfPayment(e.target.value)} >
                            <option value="Select">-Select-</option>
                            <option>Google Pay</option>
                            <option>Phone Pay</option>
                            <option>Credit Card</option>

                            </select>
                        {
                formErros.paymentMode &&
                <div style={{color:'red'}}>{formErros.paymentMode}</div>
            }
                    </div>
                   
                   
                     <br></br>
                    
                       <div class="form-group" style={{ width: "350px", height: "80px" }}>
                        <label style={{ color: "black" }} htmlfor="pAmount">
                       Course Fee</label>
                        <input type="text" name="pAmount" className="form-control" value={course.fee} disabled></input>
                       
                       
                    </div>


                    
                     <br></br>
                    <div class="form-group" style={{ width: "350px", height: "80px" }}>
                        <label style={{ color: "black" }} htmlfor="pPaymentStatus">
                            <em style={{ fontSize: "20px" }}>PaymentStatus</em>  </label>
                        <input type="text" name="pPaymentStatus" className="form-control" value={pPaymentStatus} onChange={e => setPPaymentStatus(e.target.value)}></input>
                        <br></br>
                        <hr></hr>
                    </div>
                    
                </center>

               
             
                <button onClick={sumfunction} className="btn btn-danger"style={{width:"200px"}}>Pay</button>
                <div>
                
                  
                    {/* <button onClick={"payment/find/:id"} className="btn btn-danger">Pay</button> */}
                    {/* <button onClick={viewPayment}  className="btn btn-danger">Next</button> */}
                </div>
                <br />
                {/* <button onClick={handleSubmit} className="btn btn-info">Submit</button> */}
               
            
            </div>
           <br/>
            {/* <button onClick={viewPayment} className="btn btn-info" >View</button> */}
            <button onClick={viewPayment} className="btn btn-info" style={{backgroundColor:"black"}}>PaymentDetails</button>
            <button className="btn btn-danger" style={{width:"55px",height:"40px",marginLeft:"100px",backgroundColor:"black"}} onClick={() => navigate(-1)} >Back</button>&nbsp;&nbsp;
            
            </div>
    
    )
}
export default CreatePayment;