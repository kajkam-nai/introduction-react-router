import { useLoaderData, useParams } from "react-router-dom";

const PostDetails = () => {
    const {postId} = useParams()
    const post = useLoaderData();
    const {id,title,body} = post;
    console.log(postId)
    return (
        <div>
            <h3>Dynamic Post details</h3>
            <h3 className="font-semibold">Id : {id}</h3>
            <h3 className="font-bold">Title: {title}</h3>
            <p className="flex-grow">{body}</p>
        </div>
    );
};

export default PostDetails;