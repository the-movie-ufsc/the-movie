import styles from "./login.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  async function submit() {
    setIsSubmited(true);
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      const user = response?.data?.user;
      localStorage.setItem("userMovie", JSON.stringify(user));
      Router.push("/home");
    } catch (e) {
      console.log("error", e);
    }
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

          <div>
            <div className={styles.entrada}>
              {isSubmited && email.trim() === "" && (
                <span style={{ color: "red" }}>Preencha o Email</span>
              )}
              <input
                type="email"
                className={styles.input}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isSubmited && password.trim() === "" && (
                <span style={{ color: "red" }}>Preencha a Senha</span>
              )}
              <input
                className={styles.input}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <p>Esqueceu a sua senha?</p>
              </div>
            </div>

            <button onClick={() => submit()} className={styles.button}>
              <div>
                Login
                <img src="/login/icons/arrow-right.svg" />
              </div>
            </button>
          </div>

          <div className={styles.register}>
            <p>Não possui uma conta ainda?</p>
            <Link href="/signup">
              <a>Registre-se</a>
            </Link>
          </div>
        </div>

        <div className={styles.footer}>
          <img src="/login/efeito.svg" className={styles.image} />
        </div>
      </main>
    </>
  );
}
