import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPaymentById } from '../store/actions/PaymentAction';


function FetchPaymentById() {

    const payment = useSelector(state => state.paymentReducer.payment)

    //predefined react-redux function
    //requesting a dispatch to store
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const myFunction = async () => {
        dispatch(getPaymentById(id))

    };
    useEffect(() => {
        myFunction()
    }, []);

    return (
        <div>
            <hr />
            <br />
            {
                payment !== null &&
                <div className="row">
                    <div style={{paddingLeft:"80px"}}>
                    </div>
                    <div style={{paddingLeft:"200px",textAlign:"left"}}>
                    <label  class="animate-charcter">Thank You! Payment done Successfully.</label>
                   
                       
                         {/* <p style={{ color: "black" , fontSize: "18px"}}><strong>Payment Id :</strong>&nbsp;{payment.paymentId}</p> */}
                        {/* <p style={{ color: "black" , fontSize: "18px"}}><strong>Date Of Payment : </strong>&nbsp;<em>{payment.dateOfPayment}</em></p>
                        <p style={{ color: "black" , fontSize: "18px"}}><strong>PaymentStatus :</strong>&nbsp;<em>{payment.paymentStatus}</em></p>  */}
                    
{/* The <strong> tag is used to define text with strong importance. The content inside is typically displayed in bold. Tip: Use the <b> tag to specify bold text without any extra importance! */}
                        <p style={{ color: "black" , fontSize: "18px"}}><strong>ModeOfPayment :</strong>&nbsp;<em>{payment.modeOfPayment}</em></p>
                      
                        <p style={{ color: "black" , fontSize: "18px"}}><strong>Course fee :</strong>&nbsp;<em>{payment.amount}</em></p>
                        {/* <p style={{ color: "Black" , fontSize: "18px"}}><strong>Paid Amount </strong>&nbsp;<em>{payment.totalAmount}</em></p> */}
                        
                        
                        <div>
                            <br></br>
                            {/* <button onClick={() => navigate(-1)} type="button" className="btn btn-info">Back</button>&nbsp;&nbsp; */}
                            <Link style={{ textDecoration: 'none' }} to={'/'}> <button className="btn btn-info">Done</button></Link>
                        {/* <Link style={{ textDecoration: 'none' }} to={`/Pdf`}> <button className="btn btn-info"> free Pdf</button></Link>  */}
                            {/* <Link style={{ textDecoration: 'none' }} to={`/Review`}> <button className="btn btn-info">feedback</button></Link> */}
                            </div>


                    </div>

               
                {/* </div> */}

              
                
                </div>

                
                 

            }


        </div>
    )
}

export default FetchPaymentById; 
