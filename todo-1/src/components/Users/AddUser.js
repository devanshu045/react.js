import React,{ useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'


export default function Adduser(props) {

 const [enteredUsername, setEnteredUsername] = useState('')  //we use 2 arrays because usestate always use two arrays in this arrays 1 array is current state and and 2nd array is use for store the change 
//use state is use to store value and change the value
const [enteredAge, setEnteredAge] = useState('')  // how many time use what data we use state and store the data in 2ns array of usestate
const [error,setError] = useState()


const addUserHandler = (event)=> {
event.preventDefault(); /* prevent default is use to not reload the page after submit */
if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){ // here trim() is use for finding any blackspace
    setError({
        title: 'Please enter a username',
        message :'Please enter a valid username and age (now empty value)'
    })
}
if(+enteredAge<0){ //here + is use because the form will take input as string so we have to change string to number to we use +
    setError({
        title: 'Please enter a Age',
        message :'Please enter a valid username and age (greater than 0 )'
    })
}



props.onAddUser(enteredUsername,enteredAge); // to send the data we use props with fuction 
setEnteredAge('');   // here we use empty fuction because to get the form empty after submited the form after writing this we have to change the value in input html code bello
setEnteredUsername('')
};




// this function is use when some one change username 
const usernameChangedHandler = (event)=> {
setEnteredUsername(event.target.value)  // here setEnteredUsename is 2nd array which is ise in setstate and event.target.value is use to get the value 
}
const ageChangedHandler = (event)=> {
    setEnteredAge(event.target.value)
}

const errorHandler = (event)=> {
    setError(null)
}





    return (
        <div>
         
           {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>  }

            <Card className={classes.input}>
           <form onSubmit={addUserHandler}> {/*  here we use onsubmit bec when to user click of submit button what acction is perform is depends os this fuction  */}
            <label htmlFor="username">ADD USER NAME</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} />
            <label htmlFor="age">ADD AGE</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler} />
            <Button  type="submit">ADD USER</Button>
            </form>
            
            </Card>
            </div>        
    )
}


