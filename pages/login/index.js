import styles from "./login.module.css";
import Head from "next/head";

export default function Login() {
  function submit() {
    console.log("data");
  }

  return (
    <>
      <Head>
        <title>Login | The Movie</title>
        <meta property="og:title" content="Login The Movie" key="title" />
      </Head>
      <main className={styles.container}>
        <div className={styles.login}>
          <h1 className={styles.title}>Login</h1>
          <img src="/logo.svg" className={styles.logo} />

          <form onSubmit={() => submit()}>
            <div className={styles.entrada}>
              <input
                type="email"
                className={styles.input}
                placeholder="Email"
              />
              <input className={styles.input} placeholder="Senha" />
              <div>
                <p>Esqueceu a sua senha?</p>
              </div>
            </div>

            <button type="submit" className={styles.button}>
              <div>
                Login
                <img src="/login/icons/arrow-right.svg" />
              </div>
            </button>
          </form>

          <div className={styles.register}>
            <p>Não possui uma conta ainda?</p>
            <a>Registre-se</a>
          </div>
        </div>

        <div className={styles.footer}>
          <img src="/login/efeito.svg" className={styles.image} />
        </div>
      </main>
    </>
  );
}
