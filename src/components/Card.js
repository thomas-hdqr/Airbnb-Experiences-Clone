import React from "react";


function Card() {
    return (
        <div className="card">
            <img className="card-image" src="./images/katie-zaferes.png" alt="Katie Zaferes" />
            <div className="card-rating">
                <img className="card-image" src="./images/star.png" alt="Star rating" />
                <p className="card-rate">5.0</p>
                <p className="card-location">USA</p>
            </div>
            <h3>Life lessons with Katie Zaferes</h3>
            <p>From $136 / person</p>
        </div>
    )
}

export default Card;