import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import Title from "components/Title";
import LeftBlock from "components/LeftBlock";
import CenterBlock from "components/CenterBlock";
import Slider from "components/Slider";
import { data } from "data";
import style from "./style.module.scss";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className={style.content}>
        <section>
          <Title title={data.section1.title} />
          <LeftBlock
            img={data.section1.img1}
            subtitle={data.section1.subtitle1}
            text={data.section1.text1}
          />
          <CenterBlock
            img={data.section1.img2}
            subtitle={data.section1.subtitle2}
            text={data.section1.text2}
          />
        </section>
        <section>
          <Title title={data.slider.title} />
          <Slider images={data.slider.images} />
        </section>
        <section>
          <Title title={data.section3.title} />
          <LeftBlock
            img={data.section3.img1}
            subtitle={data.section3.subtitle1}
            text={data.section3.text1}
          />
          <CenterBlock
            img={data.section3.img2}
            subtitle={data.section3.subtitle2}
            text={data.section3.text2}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
