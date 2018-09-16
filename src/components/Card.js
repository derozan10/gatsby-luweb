import React from 'react'
import Fade from 'react-reveal/Fade';
import '../stylesheets/card.sass'

const Card = (props) => {
    return (
        <Fade>
            <div className="card">
                <img className="cardImage" src={props.img} alt="icon" />
                <div className="cardText">
                    <h2 style={{ color: props.titleColor }}>{props.title} →</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </Fade>
    )
}

export default Card