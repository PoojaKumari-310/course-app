import { combineReducers } from "redux";

import courseReducer from "./CourseReducer";
import paymentReducer from "./PaymentReducer";
import UserReducer from "./UserReducer";

// In root reducer we have all the reducer whatever we created.
//rootReducer combine all the reducers
const rootReducer = combineReducers({
    courseReducer,
    UserReducer,
    paymentReducer,


})
export default rootReducer;