import { _saveQuestion, _saveQuestionAnswer, _getQuestions } from "../utils/_DATA"
import { addCreatedQuestion, addAnswer } from './users'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions
    }
}


export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

function answerQuestion(answer){
    return {
        type: ANSWER_QUESTION,
        answer
    }
}

export function handleGetQuestions(){
    return (dispatch)=>{
        return _getQuestions().then((questions)=> dispatch(getQuestions(questions)))
    }
}

export function handleAddQuestion({optionOneText, optionTwoText, author}){
    return (dispatch)=>{
        const question = {optionOneText, optionTwoText, author}
        return _saveQuestion(question)
                    .then((question)=> dispatch(addQuestion(question)))
                    .then(question=> dispatch(addCreatedQuestion(author, question.question.id)))
                
    }
}

export function handleAnswerQuestion(answer){
    return (dispatch)=>{
        return _saveQuestionAnswer(answer).then(()=> dispatch(answerQuestion(answer)))
                        .then(()=> dispatch(addAnswer(answer)))
    }
}