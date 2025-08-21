import React from "react";
import FruitsCounter from "./FruitsCounter";

function Fruits({ fruits }) {

    return (
        <>
            {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </>
    );
}

export default Fruits;