import React from "react";
import style from "./style.module.scss";

const Title = ({ title = "Title" }: { title?: string }) => {
  return (
    <div className="container">
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};

export default Title;
