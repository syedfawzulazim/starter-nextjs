import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import NavItem from "./NavItem";
import styles from "./styles/navbar.module.scss";
import logo from "../../assets/images/logo.png";
import { navItems } from "../../lib";

interface Props {
  toggle: () => void;
}

const Navbar = ({ toggle }: Props) => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar__container__logo}>
            <Link href="/">
              <a>
                {" "}
                <Image src={logo} alt="logo" />
              </a>
            </Link>
          </div>
          <div
            onClick={() => toggle()}
            className={styles.navbar__container__mobileIcons}
          >
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
