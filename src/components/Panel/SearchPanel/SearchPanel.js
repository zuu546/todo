import React from "react";
import "./search.css";


const  SearchPanel = () => {
 
 
 
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={formHandler} className="search-container">
      <input
        autocomplete="off"
        className="search-box"
        id="search-box"
        type="text"
        placeholder="Quick Find"
      
       
      />
    
      <button type="reset" className="search-btn"></button>
    </form>



    )
}
export default  SearchPanel

