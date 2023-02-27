import React, { useEffect } from 'react';
import styles from './styles.module.css';

export const App = () => {
  const login = document.getElementById('login')
  const cadastro = document.getElementById('cadastro')

  useEffect(() => {
    Array.from(document.getElementsByClassName(styles.input))
    .forEach((item, index) => {
      item.onmouseover = () => {
        login.dataset.activeIndex = index;
      }
    })
  
    Array.from(document.getElementsByClassName(styles.cadastroInput))
    .forEach((item, index) => {
      item.onmouseover = () => {
        cadastro.dataset.activeIndex = index;
      }
    })
  })


  return (
    <div className={styles.background}>

      <div className={styles.login} id='login'>
        <div className={styles.headerDiv}>
          <h1 className={styles.header}>Mirror.</h1>
        </div>

        <div className={styles.loginItens} id='loginItens'>
          <input className={styles.input} placeholder='Email'/>
          <input className={styles.input} placeholder='Senha'/>
        </div>

        <div className={styles.cadastroDiv}>
          <p className={styles.cadastroLink}>Não possui conta? Cadastre-se aqui.</p>
          <div className={styles.decoration}/>
        </div>

        <div className={styles.loginButtonDiv}>
          <button className={styles.loginButton}>Entrar</button>
        </div>

        <div className={styles.loginFundo}/>
        <div className={styles.loginImagem}/>
      </div>

      <div className={styles.cadastro} id='cadastro'>

        <div className={styles.cadastroHeaderDiv}>
          <h1 className={styles.cadastroHeader}>Mirror.</h1>
        </div>

        <div className={styles.cadastroItens} id='cadastroItens'>
          <input className={styles.cadastroInput} placeholder='Nome'/>
          <input className={styles.cadastroInput} placeholder='Email'/>
          <input className={styles.cadastroInput} placeholder='Senha'/>
          <input className={styles.cadastroInput} placeholder='Confirmar senha'/>
        </div>

        <div className={styles.cadastroFundo}/>
        <div className={styles.cadastroImagem}/>
      </div>
    </div>
  )
}