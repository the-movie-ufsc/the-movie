import styles from "./signup.module.css";
import Head from "next/head";
import { MdVisibility } from "react-icons/md";

export default function Home() {
  function submit() {
    console.log("data");
  }

  function changeViewPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function changeViewConfirmPassword() {
    var x = document.getElementById("confirmPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <>
      <Head>
        <title>Signup | The Movie</title>
        <meta property="og:title" content="Signup The Movie" key="title" />
      </Head>
      <main className={styles.container}>
        <div className={styles.signup}>
          <h1 className={styles.title}>Sign Up</h1>

          <form onSubmit={() => submit()}>
            <div className={styles.entrada}>
              <input className={styles.input} placeholder="Username" />
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Email"
              />
              <div className={styles.inputIcon}>
                <input
                  type="password"
                  id="password"
                  className={styles.input}
                  placeholder="Senha"
                />
                <div>
                  <div className={styles.icon}>
                    <MdVisibility onClick={changeViewPassword} />
                  </div>
                </div>
              </div>
              <div className={styles.inputIcon}>
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.input}
                  placeholder="Confirmar Senha"
                />
                <div>
                  <div className={styles.icon}>
                    <MdVisibility onClick={changeViewConfirmPassword} />
                  </div>
                </div>
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
            <p>Já possue uma conta?</p>
            <a>Entrar</a>
          </div>
        </div>

        <div className={styles.footer}>
          <img src="/login/efeito.svg" className={styles.image} />
        </div>
      </main>
    </>
  );
}
