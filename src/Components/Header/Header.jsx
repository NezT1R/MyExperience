import React from "react";
import s from "./Header.module.css"


const Header = () => {
    return (
        <header className={s.header}>
             <img className={s.header_img} src='https://play-lh.googleusercontent.com/GntsGclzheXXASOhjSF1lCOPOznM_OARDObiTW_NQZtpYVwPQr_0ARyRyiXB0_OocmI'/>
        </header>
    )
};

export default Header;