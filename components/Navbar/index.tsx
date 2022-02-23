import Link from "next/link";
import { FaBars } from "react-icons/fa";
import NavItem from "./NavItem";
import styles from "./styles/navbar.module.scss";

const Navbar = () => {
  const navItems = ["About", "Projects", "Contact"];

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar__container__logo}>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </div>
          <div className={styles.navbar__container__mobileIcons}>
            <FaBars />
          </div>
          <div className={styles.navbar__container__menu}>
            <ul>
              {navItems.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
