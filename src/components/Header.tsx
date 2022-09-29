import styles from "./Header.module.scss";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
    </header>
  );
}
