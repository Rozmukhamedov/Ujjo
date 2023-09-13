import Slider from "react-slick";
import classes from "./style.module.css";
import Image from "src/assets/images/image.svg";

type CSliderProps = {
  slidesToShow: number;
};

function CSlider({ slidesToShow }: CSliderProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "center",
  };

  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        <div>
          <div className={classes.card}>
            <img src={Image} alt="" />
            <h3>put some fire in your belly</h3>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <img src={Image} alt="" />
            <h3>put some fire in your belly</h3>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <img src={Image} alt="" />
            <h3>put some fire in your belly</h3>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <img src={Image} alt="" />
            <h3>put some fire in your belly</h3>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <img src={Image} alt="" />
            <h3>put some fire in your belly</h3>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <img src={Image} alt="" />
            <h3>put some fire in your belly</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CSlider;
