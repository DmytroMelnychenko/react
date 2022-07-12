import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPostCurrentComments} from "../../services";
import PostComponent from "./PostComponent";

function PostsCurrentComment() {

    const {postId} = useParams();

   const [posts, setPosts]= useState([]);

   useEffect(() => {
       getPostCurrentComments(postId).then(value => setPosts({...value}))
       },[postId])

    return (
        <div>
            {
                posts.map(value => <PostComponent item={value} key={value.id}/>)
            }
        </div>
    );
}

export default PostsCurrentComment;