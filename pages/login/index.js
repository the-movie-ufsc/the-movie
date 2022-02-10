import styles from "./login.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <img src="/logo.svg" className={styles.logo} />

      <div className={styles.entrada}>
        <input className={styles.input} placeholder="Email" />
        <input className={styles.input} placeholder="Senha" />
        <div>
          <p>Esqueceu a sua senha?</p>
        </div>
      </div>

      <button className={styles.button}>
        <div>
          Login
          <img src="/login/icons/arrow-right.svg" />
        </div>
      </button>

      <div className={styles.register}>
        <p>Não possui uma conta ainda?</p>
        <a>Registre-se</a>
      </div>

      <div className={styles.footer}>
        <div className={styles.cover}></div>
      </div>
    </main>
  );
}
