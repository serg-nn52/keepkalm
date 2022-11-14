import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/icons/logo.svg";
import phone from "../../assets/icons/phone.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <a className={style.logo} href="./">
          <img src={logo} alt="logo" />
        </a>
        <a className={style.phone} href="tel:+74954954954">
          +7 (495) 495-49-54
        </a>
        <a className={style.phoneMobile} href="tel:+74954954954">
          <img src={phone} alt="tel" />
        </a>
      </div>
    </header>
  );
};

export default Header;
