import { GET_USERS, ADD_CREATED_QUESTION, ADD_ANSWER } from '../actions/users'


const initialState = {}


export default function users(state=initialState, action){
    switch(action.type){
        case GET_USERS:
            return {...state, ...action.users}
        case ADD_CREATED_QUESTION:
            return {...state, [action.authedUser]: {...state[action.authedUser], questions: state[action.authedUser].questions.concat([action.id])}}
        case ADD_ANSWER:
            const {qid, answer, authedUser} = action.answer
            console.log({...state, [authedUser]: {...state[authedUser],...state[authedUser].asnwers , [qid]: answer}}, 'UUUUUUUUUSSSSSSSSSERRRRRRRRR')
            return {...state, [authedUser]: {...state[authedUser],...state[authedUser].asnwers , [qid]: answer}}
        default:
            return state
    }
}
