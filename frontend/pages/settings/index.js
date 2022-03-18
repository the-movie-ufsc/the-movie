// import styles from "./signup.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../../components/Shared/Footer";
import { getAuthUser } from "../../helpers/useAuth";
import styles from "./settings.module.css";
import Router from "next/router";

export default function Settings() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function getUser() {
    try {
      const newUser = await getAuthUser();
      setUser(newUser);
      setName(newUser.name);
      setEmail(newUser.email);
    } catch {
      Router.push("/login");
    }
  }

  useEffect(() => {
    console.log("a");
    getUser();
  }, []);

  return (
    <>
      <Head>
        <title>Settings | The Movie</title>
        <meta property="og:title" content="Settings The Movie" key="title" />
      </Head>
      <main className={styles.container}>
        <section className={styles.screen}>
          <h1>Configurações</h1>
          <div className={styles.frameOne}>
            {/* Informacoes basicas da conta */}
            <div className={styles.containerAccount}>
              <h3>Meu Perfil</h3>

              <form className={styles.form}>
                <div className={styles.inbox}>
                  <label htmlFor="usernameBox">Username</label>
                  <input require className={styles.input} id="usernameBox" value={name} />
                </div>
                <div className={styles.inbox}>
                  <label htmlFor="emailBox">Email</label>
                  <input
                    type="email"
                    require
                    className={styles.input}
                    id="emailBox"
                    value={email}
                  />
                </div>
                <p className={styles.changePass}>Alterar senha</p>
                <button className={styles.save}>Salvar</button>
              </form>
            </div>

            {/* Image profile */}
            <div className={styles.profileImage}>
              <img src="/profile/avatar1.png" alt="imagemDePerfil" />
              <button>
                {" "}
                <img src="/settings/edit.svg" />
                Editar
              </button>
            </div>
          </div>

          {/* Settings payment */}
          <div>
            <h3>Configurações da Conta</h3>

            <div className={styles.boxPayment}>
              <h4>Método de pagamento</h4>
              <div>
                <button>
                  {" "}
                  <img src="/settings/edit.svg" />
                  Editar
                </button>
              </div>
            </div>

            <div className={styles.boxPayment}>
              <h4>Intervalo de cobrança</h4>
              <div>
                <button>
                  {" "}
                  <img src="/settings/edit.svg" />
                  Editar
                </button>
              </div>
            </div>

            <div className={styles.boxPayment}>
              <h4>Email de cobrança</h4>
              <div>
                <button>
                  {" "}
                  <img src="/settings/edit.svg" />
                  Adicionar
                </button>
              </div>
            </div>

            <div className={styles.boxPayment}>
              <h4>Notificações</h4>
              <div>
                <button>
                  {" "}
                  <img src="/settings/edit.svg" />
                  Adicionar
                </button>
              </div>
            </div>
          </div>

          {/* Suicide mode */}
          <div className={styles.suicideMode}>
            <h3>Excluir conta</h3>

            <p>Cuidado! Essa ação não poderá ser desfeita.</p>
            <button>Excluir sua conta</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
