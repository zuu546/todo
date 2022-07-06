import React from 'react';
import './header.css'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header=({todos})=>{
    const moreHandler = todos.filter(el => el.isActive && !el.isDeleted).length
    const doneHandler = todos.filter(el => !el.isActive && !el.isDeleted).length
    
    return (
        <header className='header d-flex justify-content-between aling-items-end'>
        <h1 className='title'>TodoList
        <FontAwesomeIcon icon={faStar} /></h1>
        <span className='span'>{moreHandler} more, {doneHandler} done </span>
            </header>
    )

}
export default Header