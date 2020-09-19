import axios from "axios";
import React, { useState,useEffect } from "react";
import './home.css'

const Home = () => {

    useEffect(()=>{
        GetUsers()
    },[])


    const [users,setusers] = useState([])

    async function GetUsers(){
        const res = await axios.get("/api/users")
        console.log(res.data.users)
        setusers(
          res.data.users
        )
    }

    return (
        <div className="home">
            <div className="users">
                <div className="heading">ALL USERS</div>
                <div className="user-list">
                    <ul>
                      {
                          users.map((user)=>{
                         return <li>name: {user.name} email: {user.email}</li>
                          })
                      }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
