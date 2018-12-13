import React from 'react'

export default (props) => {
    return (
        <div style={{ width: '80vw', margin: '0 auto', minHeight: '50vh' }}>
            {props.children}
        </div>
    )
}
