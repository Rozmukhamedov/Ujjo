import classes from "./style.module.css";
import Image1 from "src/assets/images/image2.png";

function InformationRight() {
  return (
    <div className={classes.right}>
      <div className={classes.text}>
        <h3>
          THE FIRST HOT <br /> SAUCE MADE FOR <br /> COFFEE
        </h3>
      </div>
      <img src={Image1} alt="" />
    </div>
  );
}

export default InformationRight;
