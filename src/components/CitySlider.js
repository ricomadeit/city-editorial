import React, { useState } from "react";
import './CitySlider.css';
import navigation from "../data/navigation.json"

function CitySlider() {

    const [current, setCurrent] = useState(navigation.cities[0].section)

    function resize(section) {
        setCurrent(section)
    }

    return (
        <>
            <div className="slider">
                {navigation.cities.map( (item, i) => {
                    return <p className={current === item.section ? 'currentItem' : 'item'} key={i} onClick={() => resize(item.section)}>{item.label}</p>
                })}
            </div>
        </>
    )
}

export default CitySlider