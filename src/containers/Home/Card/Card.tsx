import classes from "./style.module.css";

type CardProps = {
  title: string;
  desc: string;
  img: any;
};

function Card({ title, desc, img }: CardProps) {
  return (
    <div className={classes.card}>
      <h4>{desc}</h4>
      <h2>{title}</h2>
      <img src={img} alt={title} />
    </div>
  );
}

export default Card;
