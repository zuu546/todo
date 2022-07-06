
import React from 'react';
import './todo.css'
import {
    faPencil,
    faCheck,
    faStar,
    faTrash,
    
    faTrashRestore,
   
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Todo = ({todoObj,todos,setTodos,status,todoText, editingTodoText,setEditingTodoText}) =>{
   
 
    const activeHandler = () =>{
    setTodos(todos.map(el => el.id === todoObj.id? 
        {...el,isActive: !el.isActive, isDone: !el.isDone}: el))
    }
    const importantHandler = () => {
        setTodos(todos.map(el => el.id === todoObj.id? {...el,isImportant: !el.isImportant}: el))
     }

    const deleteHandler = () => {
        setTodos(todos.map(el => el.id === todoObj.id ? {...el, isDeleted: !el.isDeleted} :el))
    }

    const recycleHandler = () => {
      setTodos(todos.filter(el => el.id !== todoObj.id ))
    }

    const editHandler = () => {
        setEditingTodoText(todoObj.text)
        setTodos(todos.map(el =>{
            if (todoObj.id === el.id){
                return {...el, isEdited: true}
            }else {
                return el
            }
        }))
    }

    const saveHandler = (e) => {
        e.preventDefault()
        console.log(e.target.children[0].value)
        setTodos(todos.map(el =>{
            if (todoObj.id === el.id){
                return {...el, isEdited: false,text: e.target.children[0].value}
            }else {
                return el
            }
        }))
    }
    const inputHandler = (e) => {
      setEditingTodoText(e.target.value)
    }
    return (
        <li className='d-flex justify-content-between mb-2 border-bottom border-2 pb-2'>
<span className={`${todoObj.isDone ? 'text-decoration-line-through' : '' } ${todoObj.isImportant ? 'text-warning' : ''} ${todoObj.isEdited ? 'd-none' : ''}`}>{todoObj.text}</span>
    <form action="" className={`${todoObj.isEdited ? 'd-block' : 'd-none'}`} onSubmit={saveHandler}>
        <input type='text' placeholder={todoText} required value={editingTodoText} onChange={inputHandler}/>
        <button type='submit'className=' btn btn-outline-primary me-1'>
        </button>
        </form> 
<div>
    {status === 'recycle' ?<> <button type='button'className='btn-recycle btn-outline-danger me-1' onClick={recycleHandler}><FontAwesomeIcon icon={faTrash}/></button>
    <button type='button' className='btn-deleted btn-outline-success' onClick={deleteHandler}><FontAwesomeIcon icon={faTrashRestore} /></button></>
    :<>   
<button type='button' className=' button btn-outline-primary me-1' ><FontAwesomeIcon icon={faPencil} /></button>
<button type='button' className={` button btn-outline-success me-1 ${todoObj.isActive  ?'': 'active'}`} onClick={activeHandler}><FontAwesomeIcon icon={faCheck} /></button>
<button type='button' className= {`button btn-outline-warning me-1 ${todoObj.isImportant ?'active' : ''}`} onClick={importantHandler}><FontAwesomeIcon icon={faStar} /></button>
<button type='button' className='button btn-outline-danger me-1' onClick={deleteHandler}><FontAwesomeIcon icon={faTrash} /></button></>}

</div>
</li>







    )
}
export default Todo;