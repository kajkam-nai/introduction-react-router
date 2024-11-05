import { useLoaderData, useNavigate } from "react-router-dom";

const ShowDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Dynamic route</h2>
            <h3 className="font-bold">{user.id}</h3>
            <h3>Name: {user.name}</h3>
            <p>{user.email}</p>
            <button onClick={handleGoBack} className="btn text-center bg-violet-400 text-black">Go Back</button>
        </div>
    );
};

export default ShowDetails;