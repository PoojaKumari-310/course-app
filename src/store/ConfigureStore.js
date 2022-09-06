import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/RootReducer";
import thunk from 'redux-thunk';

//The current Redux application state lives in an object called the store .

export default function ConfigureStore() {
    //createStore is only for redux
    //function createStore
    return createStore(
        // In configure store we have all the rootreducers
        //reducers are combining inside a store
        //store contains reducers which updates the state
        rootReducer,
        //thunk is a middleware,which delays the action
        //instead of api we are sending action to the middleware and the middleware is sending the action to the store
        //without middleware we cannot use the api,bcuz store is  async we need to wait for the result to update the state of the store
        //middleware is like a callback
        applyMiddleware(thunk)
    )
}
// synchronous communications are scheduled, real-time interactions by phone, video, or in-person. 
// Asynchronous communication happens on your own time and doesn't need scheduling.