import React from 'react'

export default (props) => {
    return (
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            {props.children}
        </div>
    )
}
