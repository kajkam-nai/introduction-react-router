import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title,body} = post;
    return (
        <div className="border p-2 m-3 rounded-xl flex flex-col">
            <h3 className="font-semibold">Id : {id}</h3>
            <h3 className="font-bold">Title: {title}</h3>
            <p className="flex-grow">{body}</p>
            <Link className="text-center text-rose-800 font-bold" to={`/posts/${id}`}>Post Details</Link>
            <Link to={`/posts/${id}`}><button className="btn text-center w-full bg-violet-400 text-black">Show Details</button></Link>
        </div>
    );
};

export default Post;