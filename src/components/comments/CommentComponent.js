import {Link} from "react-router-dom";

function CommentComponent({item}) {
    return (
        <div>
            <h4>{item.id} - {item.name}</h4>
            <h4>{item.email}</h4>
            <p>{item.body}</p>
            <span><Link to={item.postId.toString()}>comment</Link></span>

        </div>
    );
}

export default CommentComponent;
