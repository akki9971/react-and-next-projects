import React from "react";


function Home(props) {


    let onClickHandler = (event) => {
        console.log(event);
        alert('onClickHandler')
    }

    const onChangehandler = (event) => {
        // const textValue = event.target.value;
        // console.log(textValue)

        // console.log(event);
        alert('Hi 123')
        //   alert('onChangehandler')
    };

    /// What's is the Props
    // Props used to pass data from one component to another component
    // But reactJS support Unidirectional data flow -: All the the data flo will be from TOP to BOTTOM direction

    return (
        // <React.Fragment >
        //     <h1>Home Component and Props values is  -{props.myCityName}</h1>
        //     <input type="button" value="click me !!" />
        //     <p>This is sample text !!</p>
        // </React.Fragment>

        <>
            <h1>Home Component and Props values is  -{props.myCityName}</h1>
            <input type="text" onChange={() =>{onChangehandler()}} />
            <input type="button" value="click me !!" onClick={onClickHandler} />

            <p>This is sample text !!</p>
        </>
    );
};


export default Home;


