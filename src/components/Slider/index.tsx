/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import style from "./style.module.scss";

type TProps = {
  images: string[];
};

const Slider = (props: TProps) => {
  const { images } = props;

  let initialX: number;
  let widthHorizont: number;
  let stepX: number;

  const horizont = useRef(null);

  useEffect(() => {
    if (horizont.current) {
      initialX = (horizont.current as HTMLDivElement).getBoundingClientRect().x;
      widthHorizont = (
        horizont.current as HTMLDivElement
      ).getBoundingClientRect().width;
      stepX = initialX;
    }
  }, []);

  const changePositionX = (e: React.WheelEvent<HTMLDivElement>) => {
    if (window.innerWidth < 992) return;
    if (e.deltaY > 0) {
      stepX > initialX - widthHorizont / 2 && (stepX -= 65);
    } else {
      stepX < initialX && (stepX += 65);
    }
    if (horizont.current) {
      (horizont.current as HTMLDivElement).style.left = `${stepX}px`;
    }
  };
  return (
    <>
      <div className={style.viewport} onWheel={(e) => changePositionX(e)}>
        <div className={style.horizCont} ref={horizont}>
          {images.map((el) => (
            <div key={el} className={style.slide}>
              <img src={el} alt="slide" />
            </div>
          ))}
        </div>
      </div>
      <div className={style.fantom}></div>
    </>
  );
};

export default Slider;
