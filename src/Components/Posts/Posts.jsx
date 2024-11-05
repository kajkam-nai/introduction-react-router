import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className="">
            <h3>Total post : {posts.length}</h3>
            <div className="grid grid-cols-3">
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;