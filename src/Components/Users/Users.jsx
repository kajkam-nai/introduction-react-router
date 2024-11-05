
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    // const [users, setUsers] = useState([]);
    const users = useLoaderData()
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data));
    // },[])
    console.log(users)
    return (
        <div>
            <h3>Users: {users.length}</h3>
            <div className="grid grid-cols-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;