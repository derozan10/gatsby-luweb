import React from 'react'

const Backdrop = (props) => {
    return (
        <div className={'backdrop ' + (props.active ? 'active' : 'inActive')}>
        </div>
    )
}

export default Backdrop