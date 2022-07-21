import React from 'react'

export default function 
(props) {
    
    
    
  return (
    <div id="myalert">
        <div  className={`alert alert-warning alert-dismissible fade show d-flex justify-content-between align-items-center`}  role="alert" onClick={props.hideAlert}>
        <strong>{props.alerttxt}</strong> 
        <div className='text-dark' onClick={props.hideAlert} >X</div>
        </div>
    </div>
  )
}
