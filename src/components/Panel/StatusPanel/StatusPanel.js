
import React from 'react' ;
import './status.css'


const StatusPanel = ({setStatus,status}) =>{
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div className='d-flex'>
<button type='button' className={`but btn-outline-info  me-1 ${status === 'all' ? 'active' : ''}`}   value='all' onClick={statusHandler}>All</button>
<button type='button' className={`but btn-outline-info  me-1 ${status === 'active' ? 'active' : ''}`} value='active' onClick={statusHandler}>Active</button>
<button type='button' className={`but btn-outline-info  me-1 ${status === 'done' ? 'active' : ''}`} value='done' onClick={statusHandler}>Done</button>
</div>
    )
}
export default StatusPanel;