import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const navigate = useNavigate();
    const handleShowDetails = ()=>{
        navigate(`/user/${id}`) 
    }
    const {id,name,email,phone} = user;
    return (
        <div className='border p-3 m-5 rounded-lg'>
            <h3 className='font-bold'>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Contact: {phone}</p>
            <Link to={`/user/${id}`}>User Details</Link>
            <button onClick={handleShowDetails} className="btn text-center w-full bg-violet-400 text-black">Show Details</button>
        </div>
    );
};

export default User;