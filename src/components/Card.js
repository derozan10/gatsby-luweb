import React from 'react'
import Fade from 'react-reveal/Fade';
// import '../stylesheets/card.sass'

const Card = (props) => {
    return (
        <Fade>
            <div className="card">
                <img className="cardImage" src={props.img} alt="icon" />
                <div className="cardText">
                    <h3 style={{ color: props.titleColor }}>{props.title} →</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </Fade>
    )
}

export default Card