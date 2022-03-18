import styles from "./signup.module.css";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const eyeView = "/login/icons/view.svg";
  const eyeHidden = "/login/icons/hidden.svg";

  async function submit() {
    setIsSubmited(true);
    if (
      name.trim() != "" &&
      email.trim() != "" &&
      password.trim() != "" &&
      confirmPassword.trim() != ""
    ) {
      if (password === confirmPassword) {
        setPasswordError(false);
        try {
          const response = await axios.post("http://localhost:8000/api/user", {
            name,
            email,
            password,
          });
          const user = response?.data?.user;
          localStorage.setItem("userMovie", JSON.stringify(user));
          Router.push("/home");
        } catch (e) {
          console.log("error", e);
        }
      } else {
        setPasswordError(true);
      }
    }
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

          <div>
            <div className={styles.entrada}>
              {isSubmited && name.trim() === "" && (
                <span style={{ color: "red" }}>Preencha o Username</span>
              )}
              <input
                required
                className={styles.input}
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {isSubmited && email.trim() === "" && (
                <span style={{ color: "red" }}>Preencha o Email</span>
              )}
              <input
                required
                type="email"
                id="email"
                className={styles.input}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className={styles.inputIcon}>
                {isSubmited && password.trim() === "" && (
                  <span style={{ color: "red" }}>Preencha a Senha</span>
                )}
                <input
                  required
                  type="password"
                  id="password"
                  className={styles.input}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={() => changeViewPassword("password")} className={styles.boxIcon}>
                  <img id="view-password" src={eyeView} className={styles.icon} alt="viewOption" />
                </div>
              </div>
              <div className={styles.inputIcon}>
                {isSubmited && password.trim() === "" && (
                  <span style={{ color: "red" }}>Confirme a Senha</span>
                )}
                <input
                  type="password"
                  required
                  id="confirmPassword"
                  className={styles.input}
                  placeholder="Confirmar Senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              {passwordError && (
                <span style={{ color: "red", textAlign: "center" }}>Senhas não coincidem</span>
              )}
            </div>

            <button onClick={() => submit()} type="submit" className={styles.button}>
              <div>
                Sign Up
                <img src="/login/icons/arrow-right.svg" />
              </div>
            </button>
          </div>

          <div className={styles.register}>
            <p>Já possue uma conta?</p>
            <Link href="/login">
              <a>Entrar</a>
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
