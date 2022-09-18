// Step 1- importing the React from react package
import React from 'react';


// Step 2- cleate a function in javascript

function JSXDemo(props){

    // Step 3: return you HTML from function
 let myage = 30;

    // const myH1Element = React.createElement('h1',null, "JSX DEMO COMPONENT !!");
    // return myH1Element;

    if(props.id > 100){
    return(
  
        <h1 id="id1" name="header1">JSX DEMO COMPONENT !! -- id is:{props.id} , name is:{props.name} , city is :{props.city}</h1>
    );
    }
    else{
       return ( 
           <div>
       <input type="button" onCl value="abc" />
       <h1>JSX DEMO id is not valid !! my age is -{props.id}</h1>
       </div>
       
       );
    }
};

// step 4: export you created component

export default JSXDemo;


// const h1Element = {
//     type:'h1',
//     props:{
   //     id:'id1',
 //       name: 'header1'
//     },
//     "JSX DEMO id is not valid 98"
// };