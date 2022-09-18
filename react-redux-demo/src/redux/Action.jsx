export const INCREAMENT_COUNTER = 'INCREAMENT_COUNTER'
export const DECREAMENT_COUNTER = 'DECREAMENT_COUNTER'

export const DecreamentCounter = () =>{
    return {
        type:DECREAMENT_COUNTER,
        payload:null
    }
}
export const IncreamentCounter = () =>{
    return {
        type:INCREAMENT_COUNTER,
        payload:null
    }
}