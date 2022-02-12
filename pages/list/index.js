import styles from "./list.module.css";
import Menu from "../../components/Shared/Menu";
import Head from "next/head";

export default function List() {

  return (
    <div className={styles.container}>
      <Menu className={styles.menu} />
      <div className={styles.list}>
        <h1 className={styles.title}>Minha lista</h1>
      </div>
    </div>
  );
}
