import React from "react";


function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.coverImg} alt="" />
            <div className="card-rating">
                <img className="card-star" src="./images/star.png" alt="Star rating" />
                <span className="card-rate">{props.rating}</span>
                <span className="gray">{props.reviewCount}</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;