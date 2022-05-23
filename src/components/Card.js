import React from "react";


function Card(props) {

    let badgeText
    if (props.experience.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.experience.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <div className="card">
            {badgeText &&  <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={props.experience.coverImg} alt="" />
            <div className="card-rating">
                <img className="card-star" src="./images/star.png" alt="Star rating" />
                <span className="card-rate">{props.experience.stats.rating}</span>
                <span className="gray">({props.experience.stats.reviewCount}) • </span>
                <span className="gray">{props.experience.location}</span>
            </div>
            <p className="card-title">{props.experience.title}</p>
            <p className="card-price"><span className="bold">From ${props.experience.price}</span> / person</p>
        </div>
    )
}

export default Card;