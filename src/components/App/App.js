import React, { useState,useEffect } from 'react';
import './App.css'
import Header from "../Header"
import Panel from '../Panel';
import TodoList from '../TodoList';
import Form from '../Form';

// import { useSelector, useDispatch } from 'react-redux'
// import { setTodos } from './store/todosSlice'




const App = ()=> {
       
    // const dispatch =useDispatch()
    // const counter  = useSelector(s => s.counter.value)
    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     dispatch(setTodos({text: e.target.children[0].value , id:1}))
    // }
      const [todos,setTodos] = useState([]) 
      const [todoText,setTodoText]= useState('')
      const [status,setStatus] = useState('all')
      const [search,setSearch] = useState('')
      const [editingTodoText, setEditingTodoText] = useState('')
      
 
      
 
      useEffect( ()=>{
            console.log(localStorage.getItem('array'))
            setTodos(JSON.parse(localStorage.getItem('array')))
        }, [])
      
          useEffect( () =>{
              localStorage.setItem('array' , JSON.stringify(todos))
          }, [todos])
 return (
  
<div className='container '>
  
<div className="todo-container">

      <Header todos={todos}/> 
     
      <Panel setStatus={setStatus} status={status} todos={todos} setTodos={setTodos} search ={search} setSearch={setSearch}/>
      <TodoList todos={todos} setTodos={setTodos} status={status} search={search} setSearch={setSearch} editingTodoText={editingTodoText} setEditingTodoText={setEditingTodoText}/> 
      <Form  setStatus={setStatus} status={status} todos={todos} setTodos={setTodos} todoText={todoText} setTodoText={setTodoText}/>
      </div>
</div>


)      
}
    
export default App;
    