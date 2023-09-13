import classes from "./style.module.css";
import Image from "src/assets/images/footer.png";
import ImageBG from "src/assets/images/bg_footer.png"

function Footer() {
  return (
    <div className={classes.footer}>
      <img className={classes.bg_img} src={ImageBG} alt="" />
      <img src={Image} alt="" />
      <footer>
        <p>privacy</p>
        <p>ujjo llc, columbus oh, 43219</p>
        <p>instagram</p>
      </footer>
    </div>
  );
}

export default Footer;
