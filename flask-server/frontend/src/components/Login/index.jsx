import React from 'react';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="/path-to-your-image/Captura de tela 2024-05-24 175600.png" alt="Cute dog" />
        <p>Photo by <a href="https://unsplash.com/@karlijn_does_photography">Karlijn Vianen</a> on <a href="https://unsplash.com/">Unsplash</a></p>
      </div>
      <div className={styles.loginSection}>
        <div className={styles.logo}>
          <img src="/path-to-your-logo/logo.png" alt="Campanha Animal" />
        </div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className={styles.forgotPassword}>
            <a href="/">Esqueci a senha</a>
          </div>
          <button type="submit" className={styles.submitButton}>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
