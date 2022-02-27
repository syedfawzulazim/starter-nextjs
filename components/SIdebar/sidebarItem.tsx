import { Link as LinkS } from "react-scroll";
import styles from "./styles/sidebarItem.module.scss";

type Props = {
  item: string;
};

const SidebarItem = ({ item }: Props): JSX.Element => {
  return (
    <>
      <li className={styles.sidebarItem}>
        <LinkS to={`/${item}`}>
          <a>{item}</a>
        </LinkS>
      </li>
    </>
  );
};

export default SidebarItem;
