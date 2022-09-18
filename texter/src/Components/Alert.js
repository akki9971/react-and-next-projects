import React from "react";

export default function Alert(props) {
  const capitalize = word =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div style={{height:30}}>
      { props.alert && <div >
      <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert" >

        <div className="container">{capitalize(props.alert.type)} : {props.alert.message}</div>
      </div>
    </div>}
    </div>
  );
}
