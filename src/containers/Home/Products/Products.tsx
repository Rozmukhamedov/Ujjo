import Card from "../Card/Card";
import classes from "./style.module.css";
import image1 from "src/assets/images/products/image1.png";
import image2 from "src/assets/images/products/image2.png";
import image3 from "src/assets/images/products/image3.png";
import { ReactComponent as FireIcon1 } from "src/assets/images/products/fire1.svg";
import { ReactComponent as FireIcon2 } from "src/assets/images/products/fire2.svg";

function Products() {
  const data = [
    {
      title: "LIGHT ROAST BLEND",
      desc: "tangy and tingly",
      img: image1,
    },
    {
      title: "light & dark roast",
      desc: "UJJO SAMPLER PACK",
      img: image2,
    },
    {
      title: "tangy and tingly",
      desc: "DARK ROAST BLEND",
      img: image3,
    },
  ];

  return (
    <div className={classes.products}>
      <div className={classes.bg}>
        <FireIcon1 />
        <FireIcon2 />
        <FireIcon2 />
        <FireIcon1 />
      </div>
      {data.map((d: any) => (
        <Card title={d.title} desc={d.desc} img={d.img} />
      ))}
    </div>
  );
}

export default Products;
