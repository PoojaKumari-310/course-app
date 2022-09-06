const intialState = {
    newPayment: null,
    payment:null,
}
export default function paymentReducer(state = intialState, action) {
    if(action.type === 'PAYMENT/ADDSUCCESS')
    {
        console.log(action.payload);
        return({
            ...state,
            newPayment: action.payload
        })
    }
    else if(action.type === 'PAYMENT/FETCHBYID')
    {
        return (
            {
                ...state,
                payment: action.payload
            }
        )
    }
    else {
        return state;
    }
}