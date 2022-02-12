import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={styles.gridBox}>
            <div>
              <h3>The Movie</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum id nulla sit amet
                pulvinar. Cras vitae fringilla justo, viverra consequat magna
              </p>
            </div>
          </div>

          <div className={styles.gridBox}>
            <div className={styles.links}>
              <a>Política de Privacidade</a>
              <a>Central de ajuda</a>
              <a>Contato</a>
              <a>Termos de uso</a>
            </div>
          </div>

          <div className={styles.gridBox}>
            <div>
              <img src="/footer/instagram.svg" alt="instaIcon" className={styles.socialIncon} />
              <img src="/footer/facebook.svg" alt="faceIcon" className={styles.socialIncon} />
              <img src="/footer/twitter.svg" alt="twitterIcon" className={styles.socialIncon} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <img className={styles.image} src="/footer/onda.svg" />
        <h4 className={styles.mark}>© 2021-2022 TheMovie</h4>
      </div>
    </div>
  );
}
