import Axios from "axios"
// In Action only tell what to do but they don't tell how to do.
 // In courseaction we have two function getallcourses and getcourseById
 // here third party get http request we are using axios
 // action objects contains type and optional payload (some information we are sending)
 // dispatch - this is the only way to trigger a state change , to update the state is to call dispatch() and pass in an action object
export function getAllCourse() {

    return (dispatch) => {
        return Axios.get("http://localhost:8081/course/view/all").then(
            //for this respone we are dispatching the action object
            resp => {
                dispatch(getAllCourses(resp.data))
            }
        )
    }

}
export function getAllCourses(data) {
    return {
        type: "course/view/all",
        payload: data
    }
}
export function getCourseById(id) {
    return (dispatch) => {
        return Axios.get("http://localhost:8081/course/view/" + id).then(
            resp => {
                dispatch(getCourseByIds(resp.data))
            }
        )
    }
}
export function getCourseByIds(data) {
    return {
        type: "course/view/:id",
        payload: data
    }
}
export function createCourse(payload){
    return(dispatch) => {
       return Axios.post("http://localhost:8081/course/save",payload).then(
       resp =>{
        alert("Course saved with id:" + resp.data.courseId);
        dispatch(createCourseSuccess(resp.data))
       
       })
    }
}
export function createCourseSuccess(data)
{
    return{
        type: "course/saveSuccess",
        payload: data
    }
}
export function updateCourse(payload){
    return(dispatch) => {
       return Axios.put("http://localhost:8081/course/update",payload).then(
       resp =>{
        dispatch(updateCourseSuccess(resp.data))
       
       })
    }
}
export function updateCourseSuccess(data)
{
    return{
        type: "course/updateSuccess",
        payload: data
    }
}
export function deleteCourseById(id){
    return(dispatch) => {
       return Axios.delete("http://localhost:8081/course/delete/"+id).then(
       resp =>{
        alert("Deleted Successfully");
        dispatch(deleteCourseSuccess(resp.data))
       
       })
    }
}
export function deleteCourseSuccess(data)
{
    return{
        type: "course/deleteSuccess:id",
        payload: data
    }
}

