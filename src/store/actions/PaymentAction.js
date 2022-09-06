import axios from "axios";

export function addPayment(payload) {

    return (dispatch) => {
        return axios.post("http://localhost:8084/payment/save",payload).then(
            resp => {
                console.log(resp.status);
                dispatch(addPaymentSuccess(resp.data));
            }
        )       
    }
}
export function addPaymentSuccess(data) {
    return {
        type: 'PAYMENT/ADDSUCCESS',
        payload: data
    }
}
export function getPaymentById(id) {
    return (dispatch) => {
        return axios.get("http://localhost:8084/payment/find/"+id).then(
            resp => {
                dispatch(getPaymentByIds(resp.data))
            }
        )
    }
}
export function getPaymentByIds(data) {
    return {
        type: "PAYMENT/FETCHBYID",
        payload: data
    }
}

