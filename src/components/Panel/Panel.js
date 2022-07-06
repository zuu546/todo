import React from 'react';
import SearchPanel from './SearchPanel';
import StatusPanel from './StatusPanel';
import './SearchPanel/search.css'



const Panel=({setStatus,status,todos,setTodos,search,setSearch}) =>{
   
    return (
      <div className='d-flex justify-content-between mb-4' >
        <StatusPanel setStatus={setStatus} status = {status}/>
        <SearchPanel search ={search} setSearch={setSearch}/>
      </div>






)

}
export default Panel