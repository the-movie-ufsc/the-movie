import styles from "./signup.module.css";
import Head from "next/head";

export default function Signup() {
  const eyeView = "/login/icons/view.svg";
  const eyeHidden = "/login/icons/hidden.svg";

  function submit() {
    console.log("data");
  }

  function changeViewPassword(element) {
    let t = document.getElementById(element);
    let image = document.getElementById("view-" + element);

    if (t.type === "password") {
      t.type = "text";
      image.src = eyeHidden;
    } else {
      t.type = "password";
      image.src = eyeView;
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
                <div
                  onClick={() => changeViewPassword("password")}
                  className={styles.boxIcon}
                >
                  <img
                    id="view-password"
                    src={eyeView}
                    className={styles.icon}
                    alt="viewOption"
                  />
                </div>
              </div>
              <div className={styles.inputIcon}>
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.input}
                  placeholder="Confirmar Senha"
                />
                <div
                  onClick={() => changeViewPassword("confirmPassword")}
                  className={styles.boxIcon}
                >
                  <img
                    id="view-confirmPassword"
                    src={eyeView}
                    className={styles.icon}
                    alt="viewOption"
                  />
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
