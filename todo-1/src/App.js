import React,{ useState } from 'react'

import Adduser from './components/Users/AddUser'
import UserList from './components/Users/UserList'
function App() {
const [usersList , setUsersList] = useState([])

// here we called a function which help us to get data from the Adduser and we call two parameters after that to print to data we use setUsersList with a fuction to we can print both data preves and present
const addUserHandler = (uName, uAge) => {
  setUsersList((prevUsersList)=>{ // in setUsersList we use a function to print the preves data with help of prevUsersList key word after that we return two things first preves data and second new data 
      return [...prevUsersList,{name : uName, age : uAge, id : Math.random().toString()}]; 
  })
}

  return (
    <div className="">
       <Adduser onAddUser = {addUserHandler}/>   {/*here in addUserHandler we call a function and get that data with the help of props  */}
      <UserList users= {usersList}/>
    </div>
  );
}

export default App;
