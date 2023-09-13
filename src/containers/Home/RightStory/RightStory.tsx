import classes from "./style.module.css";
import Image from "src/assets/images/story1.png";

function RightStory() {
  return (
    <div className={classes.right}>
      <h2>
        the story behind <br /> the souce
      </h2>
      <img src={Image} alt="" />
    </div>
  );
}

export default RightStory;
