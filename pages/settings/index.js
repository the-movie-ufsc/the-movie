// import styles from "./signup.module.css";
import Head from "next/head";
import Footer from "../../components/Shared/Footer";
import styles from "./settings.module.css";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings | The Movie</title>
        <meta property="og:title" content="Settings The Movie" key="title" />
      </Head>
      <main className={styles.frame}>
        <section className={styles.container}>
          <h1>Configurações</h1>
          <h3>Meu Perfil</h3>

          <form className={styles.form}>
            <div className={styles.inbox}>
              <label htmlFor="usernameBox">Username</label>
              <input require className={styles.input} id="usernameBox" />
            </div>
            <div className={styles.inbox}>
              <label htmlFor="emailBox">Email</label>
              <input type="email" require className={styles.input} id="emailBox" />
            </div>
            <p className={styles.changePass}>Alterar senha</p>
            <button className={styles.save}>Salvar</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
