import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

// import the reducer

// use the nethod configureStore

// add the reducer in the reducer{} object
console.log(counterReducer);
const store = configureStore({
    
    reducer : {
        counter : counterReducer
    }
})

export default store