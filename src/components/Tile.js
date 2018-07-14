import React from 'react'
import './tile.css'

export default (props) => {
    return (
        <div className="tile">
            <div className="tileTop">
                <p>{props.title}</p>
            </div>
            <div className="tileBottom">
                <div className="vanaf">vanaf </div>
                <p style={{ textAlign: 'center' }}>
                    <span className="price">{props.price}</span>
                    {props.hourly === true ? <span>/ uur</span> : null}
                </p>
                <div className="usps">
                    {props.usps.map((usp, index) => <p key={index + 'card'} className="usp"><span className="checkMark">&#10003;</span> {usp}</p>)}
                </div>
            </div>
        </div>
    )
}
