import React from "react";
import navigation from "../data/navigation.json"

function CitySlider() {
    return (
        <>
            {navigation.cities.map( item => {
                return <p>{item.label}</p>
            })}
        </>
    )
}

export default CitySlider