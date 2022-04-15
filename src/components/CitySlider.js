import React from "react";
import './CitySlider.css';
import navigation from "../data/navigation.json"

function CitySlider() {
    return (
        <>
            <div className="slider">
                {navigation.cities.map( item => {
                    return <p>{item.label}</p>
                })}
            </div>
        </>
    )
}

export default CitySlider