import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.Posts}>
                <Post message = "It's okey, hello " likePost = "0"/>
                <Post message = "I'm hating you " likePost = "2"/>


            </div>
        </div>

    )

}

export default MyPosts;