import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { FiEyeOff, FiEye } from 'react-icons/fi'

export const App = () => {
  const loginFundo = document.getElementById('loginFundo')
  const loginImagem = document.getElementById('loginImagem')
  const cadastroFundo = document.getElementById('cadastroFundo')
  const cadastroImagem = document.getElementById('cadastroImagem')

  const cadastroButtonDiv = document.getElementById('cadastroButtonDiv')
  const loginButtonDiv = document.getElementById('loginButtonDiv')
  const loginItens = document.getElementById('loginItens')
  const cadastroItens = document.getElementById('cadastroItens')
  const loginLink = document.getElementById('loginLink')

  const senhaLogin = document.getElementById('senhaLogin')
  const senhaCadastro = document.getElementById('senhaCadastro')
  const confirmarSenhaCadastro = document.getElementById('confirmarSenhaCadastro')

  const [loginIndex, setLoginIndex] = useState(-1)
  const [cadastroIndex, setCadastroIndex] = useState(-1)
  const [senhaOnOff, setSenhaOnOff] = useState(0)
  const [lockInputHover, setLockInputHover] = useState(false)

  const changePageLogin = () => {
    setTimeout(() => {
      document.body.style.transform = 'translateX(0vw)'
    }, 500);

    setLockInputHover(true)
  }
  const changePageCadastro = () => {
    setTimeout(() => {
      document.body.style.transform = 'translateX(-100vw)'
    }, 500);

    setLockInputHover(true)
  }

  const showPassword = () => {
    if (senhaOnOff === 0) {
      setSenhaOnOff(1)
      senhaLogin.type = ''
      senhaCadastro.type = ''
      confirmarSenhaCadastro.type = ''
    }
    if (senhaOnOff === 1) {
      setSenhaOnOff(0)
      senhaLogin.type = 'password'
      senhaCadastro.type = 'password'
      confirmarSenhaCadastro.type = 'password'
    } 
  }
  
  useEffect(() => {
    if (lockInputHover) {
      cadastroImagem.style.backgroundPosition = 'center 10%'
      loginImagem.style.backgroundPosition = 'center 10%'
      cadastroFundo.style.backgroundPosition = '0% 0%'
      loginFundo.style.backgroundPosition = '0% 0%'
      setLoginIndex(-1)
      setCadastroIndex(-1)

      cadastroButtonDiv.style.opacity = '0'
      loginButtonDiv.style.opacity = '0'
      loginItens.style.opacity = '0'
      cadastroItens.style.opacity = '0'
      loginLink.style.opacity = '0'

      setTimeout(() => {
        cadastroButtonDiv.style.opacity = '1'
        loginButtonDiv.style.opacity = '1'
        loginItens.style.opacity = '1'
        cadastroItens.style.opacity = '1'
        loginLink.style.opacity = '1'
        setLockInputHover(false)
      }, 3500);
    }

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

  })
  switch (loginIndex) {
    case 0: 
      if (lockInputHover) break;
      loginFundo.style.backgroundPosition = '0% -25%'
      loginImagem.style.backgroundPosition = 'center 20%'
      break;
    case 1:
      if (lockInputHover) break;
      loginFundo.style.backgroundPosition = '0% -50%'
      loginImagem.style.backgroundPosition = 'center 30%'
      break;
    // default:
    //   loginFundo.style.backgroundPosition = '0% 0%'
    //   loginImagem.style.backgroundPosition = 'center 10%'
    //   break;
  }

  switch (cadastroIndex) {
    case 0:
      if (lockInputHover) break;
      cadastroFundo.style.backgroundPosition = '0% -25%'
      cadastroImagem.style.backgroundPosition = 'center 20%'
      break;
    case 1:
      if (lockInputHover) break;
      cadastroFundo.style.backgroundPosition = '0% -50%'
      cadastroImagem.style.backgroundPosition = 'center 30%'
      break;
    case 2:
      if (lockInputHover) break;
      cadastroFundo.style.backgroundPosition = '0% -75%'
      cadastroImagem.style.backgroundPosition = 'center 40%'
      break;
    case 3:
      if (lockInputHover) break;
      cadastroFundo.style.backgroundPosition = '0% -100%'
      cadastroImagem.style.backgroundPosition = 'center 50%'
      break;
    // default:
    //   cadastroFundo.style.backgroundPosition = '0% 0%'
    //   cadastroImagem.style.backgroundPosition = 'center 10%'
    //   break;
  }

  return (
    <div className={styles.background}>

      <div className={styles.login} id='login'>
        <div className={styles.headerDiv}>
          <h1 className={styles.header}>Mirror.</h1>
        </div>

        <div className={styles.loginItens} id='loginItens'>
          <input className={styles.input} type='email' placeholder='Email'/>
          <input className={styles.input} type='password' id='senhaLogin' placeholder='Senha'/>
          {senhaOnOff === 0 
          ? <FiEyeOff className={styles.eyeIcon} onClick={showPassword}/>
          : <FiEye className={styles.eyeIcon} onClick={showPassword}/>}
        </div>

        <div className={styles.cadastroDiv}>
          <p className={styles.cadastroLink} id='loginLink' onClick={changePageCadastro}>Não possui conta? Cadastre-se aqui.</p>
          <div className={styles.decoration}/>
        </div>

        <div className={styles.loginButtonDiv} id='loginButtonDiv'>
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
            <input className={styles.cadastroInput} type='password' id='senhaCadastro' placeholder='Senha'/>
            <input className={styles.cadastroInput} type='password' id='confirmarSenhaCadastro' placeholder='Confirmar senha'/>
            {senhaOnOff === 0 
          ? <FiEyeOff className={styles.eyeIconCadastro} onClick={showPassword}/>
          : <FiEye className={styles.eyeIconCadastro} onClick={showPassword}/>}
          </div>
        </div>

        <div className={styles.cadastroButtonDiv} id='cadastroButtonDiv'>
          <div className={styles.linkDiv}>
            <p className={styles.cadastroLink} id='cadastroLink' onClick={changePageLogin}>Já possuo uma conta.</p>
            <div className={styles.decoration}/>
          </div>
          <button className={styles.cadastroButton}>Cadastrar</button>
        </div>

        <div className={styles.cadastroFundo} id='cadastroFundo'/>
        <div className={styles.cadastroImagem} id='cadastroImagem'/>
      </div>
    </div>
  )
}