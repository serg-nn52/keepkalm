import React from "react";
import style from "./style.module.scss";
import TextBlock from "../TextBlock";

type TProps = {
  subtitle: string;
  text: string[];
  img: string;
};

const LeftBlock = (props: TProps) => {
  const { subtitle, text, img } = props;
  return (
    <div className={style.leftWrapper}>
      <img src={img} alt="photo1" />
      <TextBlock subtitle={subtitle} text={text} />
    </div>
  );
};

export default LeftBlock;
