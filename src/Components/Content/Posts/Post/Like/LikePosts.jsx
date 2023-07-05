import React from "react";
import s from "./LikePost.module.css"

const LikePosts = (props) => {
    return (
        <div>
            {props.number + ` like` }
        </div>
    )

}

export default LikePosts;