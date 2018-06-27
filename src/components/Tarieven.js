import React from 'react'
import wave from '../img/wave.png'

export default () => {
    const tarieven = {
        background: 'linear-gradient(to right top, #221C67, #00468F, #006DA9)',
        padding: '20px',
        width: '100vw'
    }
    return (
        <section style={tarieven}>
            Tarieven
            <img src={wave} alt="wave" />
        </section>
    )
}
