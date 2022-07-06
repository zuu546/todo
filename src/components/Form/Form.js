import React from 'react'
import './form.css'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Form=({todos,setTodos , todoText, setTodoText, status, setStatus})=>{
    const formHandler = (e) =>{
        e.preventDefault()
        setTodos([...todos,{id: todos.length === 0 ? 1:todos[todos.length - 1].id + 1 ,text:todoText, isActive: true,isDone:false,isImprotat:false,isDeleted:false }])
    setTodoText('')
    
    }
const inputHandler = (e) =>{ 
setTodoText(e.target.value)
}
const statusHandler = (e) => {
  setStatus(e.target.value)
}
return(
  <div className='d-flex'>
  <button type ='button' className={` status-btn btn-outline-danger ${status === 'recycle' ? 'active' : ''}`} onClick={statusHandler} value='recycle'><FontAwesomeIcon icon={faTrash} /></button>
<form  className=' newtodo-container' onSubmit = {formHandler}>  <input  autocomplete="off"
   className="newtodo-box"
   id="newtodo-box"
   type="text"
   placeholder="New To-Do" onChange={inputHandler} value={todoText} required minLength='5'/>
    <label htmlFor="newtodo-box" className="newtodo-label">
 
  </label>
<button type="submit" className="newtodo-btn"></button>
  
  
</form>
</div>

)

}
export default Form