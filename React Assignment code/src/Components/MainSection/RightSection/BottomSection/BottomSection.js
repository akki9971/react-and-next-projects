import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BottomSection.css';


function BottomSection(props) {

    const [characters, setcharacters] = useState([]);
    console.log(props.isAlien);

    useEffect(() => {

        let url = 'https://rickandmortyapi.com/api/character/';
        axios.get(url).then((res) => {
            console.log(res)

        //    switch (props) {
        //        case props.isAlien:
        //            return setcharacters(res.data.results.filter(r => r.species==='Alien'))
        //         case props.isHuman:
        //             return setcharacters(res.data.results.filter(r => r.species==='Human'))
        //         default :
        //             return setcharacters(res.data.results) 
        //    }
        if(props.isAlien){
            setcharacters(res.data.results.filter(r => r.species==='Alien'))
        } else if(props.isHuman){
            setcharacters(res.data.results.filter(r => r.species==='Human'))
        } else {
            setcharacters(res.data.results) 
        }
        
    }, [])

        return () => {

        }
    })


    // console.log(state);


    return (
        <div className="bottom-container">


            {
                characters.map((item, index) => {
                    return <div className="card" key={index}>
                        <div className="cardNumber">{index + 1}</div>

                        <img src={item.image} alt={item.name}></img>

                        <div className="heading">

                            <h4 key={item.id}>{item.name}</h4>
                            <p className="card-id"> id:  {item.id} - created 2 years ago</p>

                        </div>

                        <div className="card-body">

                            <div className="card-description" >
                                <p className="identifier" style={{ marginTop: "10px" }}>STATUS</p>
                                <p className="details"> {item.status}</p>
                            </div>
                            <hr></hr>
                            <div className="card-description">
                                <p className="identifier">SPECIES</p>
                                <p className="details"> {item.species}</p>
                            </div>
                            <hr></hr>
                            <div className="card-description">
                                <p className="identifier">GENDER</p>
                                <p className="details"> {item.gender}</p>
                            </div>
                            <hr></hr>
                            <div className="card-description">
                                <p className="identifier">ORIGIN</p>
                                <p className="details"> {item.origin.name}</p>
                            </div>
                            <hr></hr>
                            <div className="card-description">
                                <p className="identifier">LAST LOCATION</p>
                                <p className="details"> {item.location.name}</p>
                            </div>

                        </div>
                    </div>

                })
            }

        </div>
    )
}

export default BottomSection;
