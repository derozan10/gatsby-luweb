import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="cardImage">
                <img className="img-responsive" src={props.img} alt={props.alt} />
            </div>
            <div className="cardText">
                <p className="cardTitle">{props.title}</p>
                <div className="usps">
                    {props.usps.map((usp, index) => <div key={index + 'card'} className="uspContainer"><span className="checkMark">&#10003;</span><p className="usp">{usp}</p></div>)}
                </div>
                {props.btn}
            </div>
        </div>
    )
}

export default Card