import React from 'react'
import classes from './Card.module.css'
export default function Card(props) {
    return (
        <div className={`${classes.card} ${props.className}`}>
            {/* here we use two clasess components because card use two different css from two different css folders so we use this menthod to use both css components . */}
            {props.children}
        </div>
    )
}
