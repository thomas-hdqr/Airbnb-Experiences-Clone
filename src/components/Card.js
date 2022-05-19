import React from "react";


function Card() {
    return (
        <div className="card">
            <img className="card-image" src="./images/katie-zaferes.png" alt="Katie Zaferes" />
            <div className="card-rating">
                <img className="card-star" src="./images/star.png" alt="Star rating" />
                <span className="card-rate">5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray"> USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;