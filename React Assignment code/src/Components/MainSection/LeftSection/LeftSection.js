import React from 'react';
import './LeftSection.css';


function LeftSection(props) {

    // const updateIsHuman = (e) => {
    //     props.onUpdateIsHuman(e.target.checked)
    //     console.log('humans checkbox clicked ');
    // }
    // const updateIsAlien = (e) => {
    //     props.onUpdateIsAlien(e.target.checked)
    //     console.log('aliens checkbox clicked ');
    // }
    // const updateIsAll = (e) => {
    //     props.onUpdateIsAll(e.target.checked)
    //     console.log('alls checkbox clicked ');
    // }

    return (
        <div className="Left-Section">
            <h2 className="filters">Filters</h2>

            <div className="Species">
                
            <label className="checkbox-value" htmlFor="Human" >
                <input type="radio"
                    value="one"
                    id="Human"
                    name="species"
                    onChange={props.onUpdateIsHuman}
                />
                    <strong>Human</strong></label>

                    <label className="checkbox-value" htmlFor="Alien" >
                <input type="radio"
                    value="two"
                    id="Alien"
                    name="species"
                    onChange={props.updateIsAlien}
                />  
                    <strong>Alien</strong></label>
                <label className="checkbox-value" htmlFor="All">
                <input type="radio"
                    value="three"
                    name="species"
                    id="All"
                    // checked="checked"
                    onChange={props.updateIsAll}
                />
                    
                    <strong>All</strong></label>

            </div>
        </div>


    )
}

export default LeftSection;
