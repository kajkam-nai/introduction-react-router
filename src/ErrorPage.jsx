import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1 className="text-red-800">Oops!! This is empty.</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>Go back where you from</p>
                    <Link to='/'><button className="btn text-center  bg-red-800 text-black">Home</button></Link>
                </div>
            }
            
             
        </div>
    );
};

export default ErrorPage;