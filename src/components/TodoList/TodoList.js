
import React from 'react';
import Todo from './Todo'
import './TodoList.css'

const TodoList = ({todos,setTodos,status, search,setSearch,setEditingTodoText,editingTodoText}) => {
    const todosFilterHandler = () => {
        if(status === 'active'){
            return todos.filter(el => el.isActive && !el.isDeleted)
        } else if (status === 'done'){
            return todos.filter(el => el.isDone)
        } else if (status === 'recycle'){
            return todos.filter(el => el.isDeleted) 
        } else {
            return todos.filter(el => !el.isDeleted)
        }
    }
    
return (
<ul className="todo-list">
    {todosFilterHandler().length === 0 ? 
    <li className='list-unstyled text-center'>No more</li>
    : todosFilterHandler().filter(el => el.text.includes(search)).map((el, idx) => ( 
    <Todo key={el.idx} todoObj={el} todos={todos} setTodos={setTodos} status={status} editingTodoText={editingTodoText} setEditingTodoText={setEditingTodoText}/>
    ))
}
</ul> 
);

};
export default TodoList;
