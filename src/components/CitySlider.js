import React, { useState } from "react";
import './CitySlider.css';
import navigation from "../data/navigation.json"

function CitySlider() {

    const [current, setCurrent] = useState(navigation.cities[0].section)

    function resize(e, section) {
        setCurrent(section)
        var marker = document.querySelector('#marker')
        marker.style.left = e.offsetLeft+"px";
        marker.style.width = e.offsetWidth+"px";
        console.log(marker.style.left)
    }

    return (
        <>
            <nav className="nav">
                {navigation.cities.map( (item, i) => {
                    return <p className={current === item.section ? 'currentItem' : 'item'} id={item.section} key={i} onClick={(e) => resize(e.target, item.section)}>{item.label}</p>
                })}
                <div className="slider" id="marker"></div>
            </nav>
        </>
    )
}

export default CitySlider