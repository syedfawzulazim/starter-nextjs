import styles from "./styles/sidebar.module.scss";
import { FaTimes } from "react-icons/fa";
import { navItems } from "../../lib";
import SidebarItem from "./sidebarItem";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: Props) => {
  return (
    <>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.sidebar__active : ""}`}
      >
        <div className={styles.sidebar__icon} onClick={() => toggle()}>
          <FaTimes />
        </div>
        <div className={styles.sidebar__wrapper}>
          <div className={styles.sidebar__wrapper__menu}>
            <ul>
              {navItems.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
