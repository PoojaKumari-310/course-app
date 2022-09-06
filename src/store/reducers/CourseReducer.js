// In coursereducer first we are initially giving state

const intialState = {
    courses: [], // course is empty  i.e all course
    course: null, //fetchById
    newCourse: null, // create course
    updateCourse: null, // update the course
    deleteCourse: null // delete the course
}
// after initialising here we go to courseaction
//reducer is a function which takes two args intialState is a current state and action as arguments and return a new state result.
export default function courseReducer(state = intialState, action) {
    if (action.type === 'course/view/all') {
        // console.log(action.payload);
        return (
            {
                //copie of the state
                ...state,
                //accessing the payload
                courses: action.payload
            }
        )
    }
    else if(action.type === 'course/view/:id')
    {
        return (
            {
                ...state,
                course: action.payload
            }
        )
    }
    else if(action.type === 'course/saveSuccess')
    {
        return({
            ...state,
            newCourse: action.payload
        })
    }
    else if(action.type === 'course/updateSuccess')
    {
        console.log(action.payload);
        return({
            ...state,
            updateCourse: action.payload
        })
    }
    else if(action.type === 'course/deleteSuccess')
    {
        console.log(action.payload);
        return({
            ...state,
            deleteCourse: action.payload
        })
    }
    else{
        return state;
    }
}
 