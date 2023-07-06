import React from "react";
import s from "./nav.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}>
                <NavLink to={"/profile"} className = {(state) => state.isActive ? s.active : s.item }>Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/dialogs"} className = {(state) => state.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/news"} className = {(state) => state.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/music"} className = {(state) => state.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/settings"} className = {(state) => state.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Sidebar;

