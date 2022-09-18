import React, { useState } from 'react';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';
import './MainSection.css';

function MainSection(props) {

    const [isHuman, setIsHuman] = useState(false);
    const [isAlien, setIsAlien] = useState(false);
    const [isAll, setIsAll] = useState(true)
    // const [url, setUrl] = useState('');

    const updateHuman = (value) => {
        setIsAll(false);
        setIsAlien(false);
        setIsHuman(true)
        console.log(isHuman, isAlien, isAll );
    }
    
    const updateAlien = (value) => {
        setIsAll(false);
        setIsAlien(true);
        setIsHuman(false)
        console.log(isHuman, isAlien, isAll );
    }
    const updateAll = (value) => {
        setIsAll(true);
        setIsAlien(false);
        setIsHuman(false)
        console.log(isHuman, isAlien, isAll );
    }

    return (
        <div className="container">
            <LeftSection
                onUpdateIsHuman={updateHuman} 
                onUpdateIsAlien={updateAlien}
                onUpdateIsAll={updateAll}
            />
            <RightSection 
            isHuman={isHuman}
            isAlien={isAlien}
            isAll={isAll}

            />

        </div>
    )
}

export default MainSection
