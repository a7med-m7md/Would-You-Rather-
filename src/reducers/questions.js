import { GET_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'


const initialState = {}

export default function questions(state=initialState, action){
    switch(action.type){
        case GET_QUESTIONS:
            return {...state, ...action.questions}
        case ADD_QUESTION:
            return Object.assign({}, state, {[action.question.id]: action.question})
        case ANSWER_QUESTION:
            const {qid, answer, authedUser} = action.answer
            console.log({...state, [qid]: {...state[qid], [answer]: {...state[qid][answer], votes: state[qid][answer].votes.concat([authedUser])}}, } , 'answeASaaaaaaaaaaaaaaaannnnnnnnnnnnssssssssssred')
            return {...state, [qid]: {...state[qid], [answer]: {...state[qid][answer], votes: state[qid][answer].votes.concat([authedUser])}}, }
        default:
            return state
    }
}