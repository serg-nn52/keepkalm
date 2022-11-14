import React from "react";
import style from "./style.module.scss";

type TProps = {
  subtitle: string;
  text: string[];
};

const TextBlock = (props: TProps) => {
  const { subtitle, text } = props;
  return (
    <div className={style.wrapper}>
      <h3 className={style.subtitle}>{subtitle}</h3>
      {text.map((el, i) => (
        <p key={i}>{el}</p>
      ))}
    </div>
  );
};

export default TextBlock;
