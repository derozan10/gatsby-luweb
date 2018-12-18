import React from 'react'

export default (props) => {
    return (
        <div style={{ width: '80vw', margin: '0 auto', maxWidth: '1200px' }}>
            {props.children}
        </div>
    )
}
