import React from "react";
import TextBlock from "../TextBlock";
import style from "./style.module.scss";

type TProps = {
  subtitle: string;
  text: string[];
  img: string;
};

const CenterBlock = (props: TProps) => {
  const { subtitle, text, img } = props;
  return (
    <div className="container">
      <div className={style.centerWrapper}>
        <TextBlock subtitle={subtitle} text={text} />
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default CenterBlock;
