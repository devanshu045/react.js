import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModule.css'

const ErrorModal = props => {
    return (
    <div>

        <div className={classes.backdrop} onclick={props.onConfirm}/>

        
        
    <Card className={classes.modal}>
<header className={classes.header}>
    <h2>{props.title}</h2>

</header>
<div className={classes.content}>
     <p>
    {props.message}
     </p> 
</div>

<footer className={classes.acction}>
  <Button onClick={props.onConfirm}> OKay</Button>
</footer>
    </Card>
    </div>)}

export  default ErrorModal;