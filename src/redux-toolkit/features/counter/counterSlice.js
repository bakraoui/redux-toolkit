import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

/* 
    create a slice with three attributes
        1. name of the reducer
        2. the state
        3. reducers or action creators

    than export the actions,
    and export the reducer as default
*/

export const counterSlice =  createSlice({
    name : 'counter',
    initialState : initialState,
    reducers : {
        increment : (state) =>{
            state.value += 1
        },

        decrement : (state) =>{
            state.value -= 1
        },

        addCounter : (state, action) => {
            state.value += Number(action.payload)
        }
    },
    
}) 


export const {increment, decrement, addCounter} = counterSlice.actions

export default counterSlice.reducer