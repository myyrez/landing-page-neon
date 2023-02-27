import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const App = () => {
  const loginFundo = document.getElementById('loginFundo')
  const loginImagem = document.getElementById('loginImagem')
  const cadastroFundo = document.getElementById('cadastroFundo')
  const cadastroImagem = document.getElementById('cadastroImagem')

  const [loginIndex, setLoginIndex] = useState(-1)
  const [cadastroIndex, setCadastroIndex] = useState(-1)

  
  useEffect(() => {
    Array.from(document.getElementsByClassName(styles.input))
    .forEach((item, index) => {
      item.onmouseover = () => {
        setLoginIndex(index)
      }
    })
  
    Array.from(document.getElementsByClassName(styles.cadastroInput))
    .forEach((item, index) => {
      item.onmouseover = () => {
        setCadastroIndex(index)
      }
    })

    switch (loginIndex) {
      case 0: 
        loginFundo.style.backgroundPosition = '0% -25%'
        loginImagem.style.backgroundPosition = 'center 10%'
        break;
      case 1:
        loginFundo.style.backgroundPosition = '0% -50%'
        loginImagem.style.backgroundPosition = 'center 20%'
        break;
    }

    switch (cadastroIndex) {
      case 0: 
        cadastroFundo.style.backgroundPosition = '0% -25%'
        cadastroImagem.style.backgroundPosition = 'center 10%'
        break;
      case 1:
        cadastroFundo.style.backgroundPosition = '0% -50%'
        cadastroImagem.style.backgroundPosition = 'center 20%'
        break;
      case 2:
        cadastroFundo.style.backgroundPosition = '0% -75%'
        cadastroImagem.style.backgroundPosition = 'center 30%'
        break;
      case 3:
        cadastroFundo.style.backgroundPosition = '0% -100%'
        cadastroImagem.style.backgroundPosition = 'center 40%'
        break;
    }
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

        <div className={styles.loginFundo} id='loginFundo'/>
        <div className={styles.loginImagem} id='loginImagem'/>
      </div>

      <div className={styles.cadastro} id='cadastro'>

        <div className={styles.cadastroHeaderDiv}>
          <h1 className={styles.cadastroHeader}>Mirror.</h1>
        </div>

        <div className={styles.cadastroItensWrap}>
          <div className={styles.cadastroItens} id='cadastroItens'>
            <input className={styles.cadastroInput} placeholder='Nome'/>
            <input className={styles.cadastroInput} placeholder='Email'/>
            <input className={styles.cadastroInput} placeholder='Senha'/>
            <input className={styles.cadastroInput} placeholder='Confirmar senha'/>
          </div>
        </div>

        <div className={styles.cadastroFundo} id='cadastroFundo'/>
        <div className={styles.cadastroImagem} id='cadastroImagem'/>
      </div>
    </div>
  )
}