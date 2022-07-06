import {createSlice} from '@reduxjs/toolkit'
  const todosSlice = createSlice({
    name:'todos',
 initialState: [{
        if(status === 'active'),{
            return todos.filter(el => el.isActive && !el.isDeleted)
        } else if (status === 'done'){
            return todos.filter(el => el.isDone)
        } else if (status === 'recycle'){
            return todos.filter(el => el.isDeleted) 
        } else {
            return todos.filter(el => !el.isDeleted)
        }
}]
  })

    // reducers : {
        // setTodos: (state,action) => {
    //         state.todos=[...state.todos,action.payload]
    //     }
    // }})
    // export const {setTodos} = todosSlice.actions
    export default todosSlice.reducer