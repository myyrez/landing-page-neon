import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Modal } from '../Modal/Modal';
import { FiEyeOff, FiEye } from 'react-icons/fi'

export const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [changeModalPage, setChangeModalPage] = useState('login')
  const [modalMessage, setModalMessage] = useState('default')
  const [hideModal, setHideModal] = useState(false)
  const emailLogin = document.getElementById('emailLogin')
  const senhaLogin = document.getElementById('senhaLogin')

  const nomeCadastro = document.getElementById('nomeCadastro')
  const emailCadastro = document.getElementById('emailCadastro')
  const senhaCadastro = document.getElementById('senhaCadastro')
  const confirmarSenhaCadastro = document.getElementById('confirmarSenhaCadastro')

  const loginFundo = document.getElementById('loginFundo')
  const loginImagem = document.getElementById('loginImagem')
  const cadastroFundo = document.getElementById('cadastroFundo')
  const cadastroImagem = document.getElementById('cadastroImagem')

  const cadastroButtonDiv = document.getElementById('cadastroButtonDiv')
  const loginButtonDiv = document.getElementById('loginButtonDiv')
  const loginItens = document.getElementById('loginItens')
  const cadastroItens = document.getElementById('cadastroItens')
  const loginLink = document.getElementById('loginLink')
  const senhaErrada = document.getElementById('senhaErrada')
  const senhaReqs = document.getElementById('senhaReqs')

  var cadastroArray = []
  const [showModalAgain, setShowModalAgain] = useState(true)

  const [loginIndex, setLoginIndex] = useState(-1)
  const [cadastroIndex, setCadastroIndex] = useState(-1)
  const [senhaOnOff, setSenhaOnOff] = useState(0)
  const [lockInputHover, setLockInputHover] = useState(false)

  const [caracteres, setCaracteres] = useState(false)
  const [numero, setNumero] = useState(false)
  const [maiusculo, setMaiusculo] = useState(false)
  const [simbolo, setSimbolo] = useState(false)

  const handleNumeros = (string) => {
    let match = string.match(/\d+/g)
    setNumero(match != null ? true : false)
  }

  const handleMaiusculo = (string) => {
    let match = string.match(/[A-Z]/)
    setMaiusculo(match != null ? true : false)
  }

  const handleSimbolo = (string) => {
    let simbolo = new RegExp(/[^A-Z a-z0-9]/)
    setSimbolo(simbolo.test(string) ? true : false)
  }

  const onChange = e => {
    let targetValue = e.target.value
    handleNumeros(targetValue)
    handleMaiusculo(targetValue)
    handleSimbolo(targetValue)
    setCaracteres(targetValue.length > 7 ? true : false)
  }

  const cadastrar = () => {
    cadastroArray = JSON.parse(localStorage.getItem('cadastroObject'))
    var cadastrarEmail = true

    if (cadastroArray === null) cadastroArray = []

    if (nomeCadastro.value === ''
    || emailCadastro.value === ''
    || senhaCadastro.value === ''
    || confirmarSenhaCadastro.value === '') {
      if(showModalAgain) {
        setShowModalAgain(false)

        setModalMessage('Preencha todos os campos.')
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
        }, 5000);

        setTimeout(() => {
          setShowModalAgain(true)
        }, 6000);
      }
      return
    }

    if (senhaCadastro.value !== confirmarSenhaCadastro.value) {
      if(showModalAgain) {
        setShowModalAgain(false)

        setModalMessage('as senhas não coincidem.')
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
        }, 5000);

        setTimeout(() => {
          setShowModalAgain(true)
        }, 6000);
      }
      return
    }

    if (!caracteres || !numero || !simbolo || !maiusculo) {
      if(showModalAgain) {
        setShowModalAgain(false)
        
        setModalMessage('A senha não apresenta os requisitos.')
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
        }, 5000);

        setTimeout(() => {
          setShowModalAgain(true)
        }, 6000);
      }
      return
    }

    var cadastroObject = {
      nomeCadastro: nomeCadastro.value,
      emailCadastro: emailCadastro.value,
      senhaCadastro: senhaCadastro.value
    }

    for (let i = 0; i < cadastroArray.length; i++) {
      if (emailCadastro.value === cadastroArray[i].emailCadastro) {
        if(showModalAgain) {
          setShowModalAgain(false)
          
          setModalMessage('Email já cadastrado.')
          setShowModal(true)
          setTimeout(() => {
            setShowModal(false)
          }, 5000);
  
          setTimeout(() => {
            setShowModalAgain(true)
          }, 6000);
        }
        cadastrarEmail = false
      }
    }
    
    if (cadastrarEmail) {
      cadastroArray.push(cadastroObject)  
      localStorage.setItem('cadastroObject', JSON.stringify(cadastroArray))

      changePageLogin()
    }
  }

  const logar = () => {
    cadastroArray = JSON.parse(localStorage.getItem('cadastroObject'))
    var loginEncontrado = false

    if (emailLogin.value === ''
    || senhaLogin.value === '') {
      if(showModalAgain) {
        setShowModalAgain(false)
        
        setModalMessage('preencha todos os campos.')
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
        }, 5000);

        setTimeout(() => {
          setShowModalAgain(true)
        }, 6000);
      }
      return
    }
    
    if (cadastroArray == null) {
      senhaErrada.style.opacity = '1'
      loginEncontrado = false
    }

    for (let i = 0; i < cadastroArray.length; i++) {
      if (emailLogin.value === cadastroArray[i].emailCadastro
      && senhaLogin.value === cadastroArray[i].senhaCadastro) {
        senhaErrada.style.opacity = '0'
        loginEncontrado = true
        alert('sucesso')
      }
    }

    if (!loginEncontrado) {
      senhaErrada.style.opacity = '1'
      loginEncontrado = false
    }
  }

  const changePageLogin = () => {
    setTimeout(() => {
      document.body.style.transform = 'translateX(0vw)'
    }, 500);

    setShowModal(false)
    setTimeout(() => {
      setChangeModalPage('login')
    }, 1000);
    setLockInputHover(true)
  }
  const changePageCadastro = () => {
    setTimeout(() => {
      document.body.style.transform = 'translateX(-100vw)'
    }, 500);

    setShowModal(false)
    setTimeout(() => {
      setChangeModalPage('cadastro')
    }, 1000);
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
      senhaErrada.style.opacity = '0'
      senhaReqs.style.opacity = '0'

      setTimeout(() => {
        cadastroButtonDiv.style.opacity = '1'
        loginButtonDiv.style.opacity = '1'
        loginItens.style.opacity = '1'
        cadastroItens.style.opacity = '1'
        loginLink.style.opacity = '1'
        senhaReqs.style.opacity = '1'
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
  }

  return (
    <>
    <div className={styles.background}>
      
      <div className={styles.login} id='login'>
        <div className={styles.headerDiv}>
          <h1 className={styles.header}>Mirror.</h1>
        </div>

        <div className={styles.loginItensWrap}>
          <div className={styles.loginItens} id='loginItens'>
            <input 
              className={styles.input} 
              type='email' 
              id='emailLogin' 
              placeholder='Email'
            />
            <input 
              className={styles.input} 
              type='password' 
              id='senhaLogin' 
              placeholder='Senha'
            />
            {senhaOnOff === 0 
            ? <FiEyeOff className={styles.eyeIcon} onClick={showPassword}/>
            : <FiEye className={styles.eyeIcon} onClick={showPassword}/>}
          </div>
        </div>

        <Modal
          changeModalPage={changeModalPage}
          showModal={showModal}
          modalMessage={modalMessage}
          showModalAgain={showModalAgain}
          hideModal={hideModal}
        />

        <p 
          className={styles.senhaEmailIncorretos} 
          style={{opacity: '0'}}
          id='senhaErrada'>
            Senha ou email incorretos.
        </p>

        <div className={styles.loginButtonDiv} id='loginButtonDiv'>
          <div className={styles.cadastroDiv}>
            <p 
              className={styles.cadastroLink} 
              id='loginLink' 
              onClick={changePageCadastro}>Não possui conta? Cadastre-se aqui.
            </p>
            <div className={styles.decoration}/>
          </div>
          <button 
            className={styles.loginButton}
            onClick={logar}>Entrar
          </button>
        </div>

        <div className={styles.loginFundo} id='loginFundo'/>
        <div className={styles.loginImagem} id='loginImagem'/>
      </div>

      {/* divisão de telas */}

      <div className={styles.cadastro} id='cadastro'>
        <div className={styles.cadastroHeaderDiv}>
          <h1 className={styles.cadastroHeader}>Mirror.</h1>
        </div>

        <div className={styles.cadastroItensWrap}>
          <div className={styles.cadastroItens} id='cadastroItens'>
            <input 
              className={styles.cadastroInput} 
              id='nomeCadastro'
              placeholder='Nome'
            />
            <input 
              className={styles.cadastroInput}
              id='emailCadastro'
              placeholder='Email'
            />
            <input 
              className={styles.cadastroInput} 
              type='password' 
              id='senhaCadastro' 
              placeholder='Senha'
              onChange={onChange}
            />
            <input 
              className={styles.cadastroInput} 
              type='password' 
              id='confirmarSenhaCadastro' 
              placeholder='Confirmar senha'
            />

            {senhaOnOff === 0 
            ? <FiEyeOff className={styles.eyeIconCadastro} onClick={showPassword}/>
            : <FiEye className={styles.eyeIconCadastro} onClick={showPassword}/>}
          </div>
        </div>

        <div className={styles.senhaRequirements} id='senhaReqs'>
          <p 
            id='contemCaracter' 
            className={caracteres ? styles.whiteText : styles.redText}>8 ou mais caracteres.</p>
          <p 
            id='contemMaiusculo' 
            className={maiusculo ? styles.whiteText : styles.redText}>Letra maiúscula.</p>
          <p 
            id='contemSimbolo' 
            className={simbolo ? styles.whiteText : styles.redText}>Símbolo.</p>
          <p 
            id='contemNumero' 
            className={numero ? styles.whiteText : styles.redText}>Número.</p>
        </div>

        <div className={styles.cadastroButtonDiv} id='cadastroButtonDiv'>
          <div className={styles.linkDiv}>
            <p 
              className={styles.cadastroLink} 
              id='cadastroLink' 
              onClick={changePageLogin}>Já possuo uma conta.
              </p>
            <div className={styles.decoration}/>
          </div>

          <button 
            className={styles.cadastroButton}
            onClick={cadastrar}>Cadastrar
            </button>
        </div>

        <div className={styles.cadastroFundo} id='cadastroFundo'/>
        <div className={styles.cadastroImagem} id='cadastroImagem'/>
      </div>
    </div>
    <svg>
        <filter id='grainy'>
          <feTurbulence
            type='turbulence'
            baseFrequency='.85'
          />
        </filter>
      </svg>
    </>
  )
}