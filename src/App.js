import './App.css';
import UsersForm from "./components/UsersForm/UsersForm";
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";
import {userService} from "./services";



function App() {
  const[users,setUsers]=useState([]);

  useEffect(()=>{
    userService.getAll().then(({data})=>setUsers([...data]))
  },[])

  return (

<div style={{textAlign:"center"}}>
<UsersForm setUser={setUsers}/>
  <hr/>
  <Users users={users}/>
</div>

  );
}

export default App;
