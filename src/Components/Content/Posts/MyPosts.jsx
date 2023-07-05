import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import LikePosts from "./Post/Like/LikePosts";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.Posts}>
                <Post message = "It's okey, hello"/>
                <LikePosts number = "1"/>
                <Post message = "I'm hating you"/>
                <LikePosts number = "2"/>

            </div>
        </div>

    )

}

export default MyPosts;