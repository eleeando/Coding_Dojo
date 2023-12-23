import React from 'react'
import styles from './Box.module.css'

const Box = (props) => {
    return (
        <div className='box' style={{backgroundColor:props.color}}>
            hello
        </div>
    )
}

export default Box