import classes from "./style.module.css";
import ImgText from "src/assets/images/text1.png";
import Image1 from "src/assets/images/image1.png";
import { CSlider } from "src/components";

function InformationLeft() {
  return (
    <div className={classes.left}>
      <div className={classes.top}>
        <img src={ImgText} alt="" />
      </div>
      <CSlider slidesToShow={2} />
      <div className={classes.bottom}>
        <img src={Image1} alt="" />
      </div>
    </div>
  );
}

export default InformationLeft;
