import classes from "./style.module.css";
import {
  InformationLeft,
  InformationRight,
  Products,
  RightStory,
} from "src/containers";

import { CSlider } from "src/components";
import ImgScropt1 from "src/assets/images/skorpionleft.png";
import ImgScropt2 from "src/assets/images/skorpionright.png";
import Image4 from "src/assets/images/image4.png";
import LeftStory from "src/containers/Home/LeftStory";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.first}>
        <InformationLeft />
        <InformationRight />
      </div>
      <div className={classes.second}>
        <img src={ImgScropt1} alt="" />
        <h2>
          THROW SOME LAVA IN <br /> YOUR JAVA
        </h2>
        <img src={ImgScropt2} alt="" />
      </div>
      <Products />
      <CSlider slidesToShow={4} />
      <div className={classes.third}>
        <img src={Image4} alt="" />
      </div>
      <div className={classes.story}>
        <RightStory />
        <LeftStory />
      </div>
      <CSlider slidesToShow={4} />
    </div>
  );
}

export default Home;
