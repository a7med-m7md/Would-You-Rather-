const logger = (store)=>(next)=>(action)=>{
    console.group("Currnt action")
        console.log("Action : ", action.type)
        const returnValue = next(action)
        console.log("The new state : " , store.getState() )
    console.groupEnd()
    return returnValue
}

export default logger