import {configureStore} from '@reduxjs/toolkit'
import counterReduser  from './counterSlice'
import  todosReducer from './todosSlice'
export default configureStore({
    reducer:{
        counter:counterReduser,
        todos:todosReducer
    }
})