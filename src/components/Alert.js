import React from 'react'

 const Alert=(props) =>{
  return (
    props.alert && <div className="alert alert-success" role="alert" style={{height:'20px',lineHeight: "1px",textAlign:"center"}} >
  {props.alert.massage}
</div>
  )
}
export default Alert;