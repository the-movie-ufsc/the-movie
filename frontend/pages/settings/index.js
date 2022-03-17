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
                  <input require className={styles.input} id="usernameBox" />
                </div>
                <div className={styles.inbox}>
                  <label htmlFor="emailBox">Email</label>
                  <input type="email" require className={styles.input} id="emailBox" />
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
