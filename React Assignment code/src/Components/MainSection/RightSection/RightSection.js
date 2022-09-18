import React from 'react';
import BottomSection from './BottomSection/BottomSection'

function RightSection(props) {
    return (
        <div>
            {<h3>Selected Filters</h3> }
            <BottomSection 
            isHuman={props.isHuman}
            isAlien={props.isAlien}
            isAll={props.isAll}

            />
        </div>
    )
}

export default RightSection;
