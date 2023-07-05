import React from "react";
import s from "./Content.module.css"
import MyPosts from "./Posts/MyPosts";

const Content = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.cap_img}
                     src={'https://img5.goodfon.ru/wallpaper/big/a/e6/sergei-simonian-moskva-siti-moskva-reka-moskva-rossiia-nochn.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )

}

export default Content;