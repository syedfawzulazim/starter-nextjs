import { Link as LinkS } from "react-scroll";
import styles from "./styles/navItem.module.scss";

type Props = {
  item: string;
};

const NavItem = ({ item }: Props): JSX.Element => {
  return (
    <>
      <li className={styles.navItem}>
        <LinkS to={`/${item}`}>
          <a>{item}</a>
        </LinkS>
      </li>
    </>
  );
};

export default NavItem;
