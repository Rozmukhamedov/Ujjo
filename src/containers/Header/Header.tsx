import classes from "./style.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "src/assets/images/logo.svg";
import { Button } from "src/components";

function Header() {
  return (
    <header className={classes.header}>
      <Button type="button">Go back</Button>
      <ul>
        <li>
          <Link to="#">story</Link>
        </li>
        <li>
          <Link to="#">shop</Link>
        </li>
        <li className={classes.logo}>
          <Link to="#">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="#">contact</Link>
        </li>
        <li>
          <Link to="#">wholesale</Link>
        </li>
      </ul>
      <Button type="button">clone</Button>
    </header>
  );
}

export default Header;
