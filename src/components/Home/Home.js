import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import video from '../../assets/images/mirrorVideo.mp4'
import astronaut from '../../assets/images/astronaut2.jpg'
import spaceStation from '../../assets/images/spaceStation.jpg'
import spaceship from '../../assets/images/spaceship.jpg'
import galaxia from '../../assets/images/galaxia.jpg'
import futuristicBackground2 from '../../assets/images/futuristicBackground5.jpg'
import { ImPlay3 } from 'react-icons/im'
import { BiChevronRight } from 'react-icons/bi'
import { FaDiscord } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsChevronCompactDown, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

export const Home = () => {

    const cardSelect = (e) => {
        switch(e.target.id) {
            case 'estacao':
                document.getElementById('conferirEstacao').style.marginLeft = '.5rem'
                document.getElementById('lineEstacao').style.width = '100%'
                break;
            case 'instalacao':
                document.getElementById('conferirInstalacao').style.marginLeft = '.5rem'
                document.getElementById('lineInstalacao').style.width = '100%'
                break;
            case 'galaxia':
                document.getElementById('conferirGalaxia').style.marginLeft = '.5rem'
                document.getElementById('lineGalaxia').style.width = '100%'
                break
        }
    }

    const cardDeselect = () => {
        document.getElementById('conferirEstacao').style.marginLeft = '0rem'
        document.getElementById('conferirInstalacao').style.marginLeft = '0rem'
        document.getElementById('conferirGalaxia').style.marginLeft = '0rem'
        document.getElementById('lineEstacao').style.width = '20%'
        document.getElementById('lineInstalacao').style.width = '20%'
        document.getElementById('lineGalaxia').style.width = '20%'
    }

    return (
        <div className={styles.mainContainer}>
            <svg>
                <filter id='grainy'>
                    <feTurbulence
                        type='turbulence'
                        baseFrequency='.85'
                    />
                </filter>
            </svg>
            <video className={styles.videoBG} src={video} autoPlay muted loop playsInline/>

            <div className={styles.subContainer}>
                <div className={styles.banner}>
                    <div className={styles.navbar}>
                        <h1 className={styles.logo}>M.</h1>
                        <a className={styles.navItem}>
                            Entrar
                            <div className={styles.buttonBorder}>
                                <span className={styles.topLeft} style={{top: '.3rem', left: '.3rem'}}></span>
                                <span className={styles.topRight} style={{top: '.3rem', right: '.3rem'}}></span>
                                <span className={styles.bottomLeft} style={{bottom: '.3rem', left: '.3rem'}}></span>
                                <span className={styles.bottomRight} style={{bottom: '.3rem', right: '.3rem'}}></span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.titleWrap}>
                        <h1 className={styles.title}>Mirror.</h1>
                        <p className={styles.subTitle}>Experiencie o outro lado.</p>
                    </div>
                    <div className={styles.imagesContainerWrapper}>
                        <div className={styles.imagesContainer}>
                            <img className={styles.img1} src={astronaut}></img>
                            <div className={styles.textBox}>
                                <p className={styles.img1Text}>Nosso programa espacial tem como objetivo viajar o vasto universo e catalogar descobertas.</p>
                                <a className={styles.joinButton}>
                                    Saiba mais
                                    <div className={styles.buttonBorder}>
                                        <span className={styles.topLeft}></span>
                                        <span className={styles.topRight}></span>
                                        <span className={styles.bottomLeft}></span>
                                        <span className={styles.bottomRight}></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.chevron}><BsChevronCompactDown/></div>
                        <div className={styles.imagesContainer}>
                            <img className={styles.img1} src={spaceStation}></img>
                            <div className={styles.textBox}>
                                <p className={styles.img1Text}>Apresentamos nossa mais nova Estação Espacial, Ishimura-02</p>
                                <a className={styles.watchButton}>
                                    <span className={styles.polygon}><ImPlay3/></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pageScroll}>
                <div className={styles.part1}>
                    <div style={{display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%'}}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardFrame}>
                            <span className={styles.topLeftCard}></span>
                            <span className={styles.topRightCard}></span>
                            <span className={styles.bottomLeftCard}></span>
                            <span className={styles.bottomRightCard}></span>
                            <h1 className={styles.teste}>Bem-vindo ao Mirror.</h1>
                            <p className={styles.infoCardText}>Nosso estimado Programa de Exploração Espacial embarca em uma exploração inspiradora para desvendar os mistérios do universo.</p>
                            <p className={styles.infoCardText}>Utilizando instrumentos de última geração, buscamos por imagens jamais antes vistas e informações valiosas que possam responder dúvidas que existem há milhares de anos.</p>
                            <p className={styles.infoCardText}>Juntos, podemos iluminar o caminho para um futuro onde não há limites para a sabedoria.</p>
                            <a className={styles.subscribeButton}>
                                <div className={styles.buttonBorder}>
                                    <span className={styles.topLeft} style={{borderColor: 'rgb(116, 213, 214)', top: '.3rem', left: '.3rem'}}></span>
                                    <span className={styles.topRight} style={{borderColor: 'rgb(116, 213, 214)', top: '.3rem', right: '.3rem'}}></span>
                                    <span className={styles.bottomLeft} style={{borderColor: 'rgb(116, 213, 214)', bottom: '.3rem', left: '.3rem'}}></span>
                                    <span className={styles.bottomRight} style={{borderColor: 'rgb(116, 213, 214)', bottom: '.3rem', right: '.3rem'}}></span>
                                </div>
                                <p>Inscreva-se</p>
                                <AiOutlineMail/>
                            </a>
                        </div>
                    </div>
                        <span className={styles.decoLines}></span>
                        <span className={styles.decoLines} style={{transform: 'scaleX(-1)'}}></span>
                        <span className={styles.decoLines2} style={{transform: 'scaleY(-1)'}}></span>
                        <span className={styles.decoLines2} style={{transform: 'rotate(-90deg)'}}></span>
                    </div>
                </div>
                <div className={styles.loading}>
                    <div className={styles.console}>
                        <span className={styles.topLeftCard}></span>
                        <span className={styles.topRightCard}></span>
                        <span className={styles.bottomLeftCard}></span>
                        <span className={styles.bottomRightCard}></span>
                        <div className={styles.consoleBackground}>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#74d5d6'}}>Programas corrompidos: 0</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>instalando [CONFIDENCIAL] em 1 segundo(s)</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>[CONFIDENCIAL] instalado com sucesso</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>Checando arquivos maliciosos...</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>47 ARQUIVOS CORROMPIDOS FORAM DETECTADOS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>[ERRO] DISPOSITIVO COMPROMETIDO</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>INICIANDO MEDIDA PROTETIVA</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>19 PROGRAMAS DESCARTADOS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>28 AMEAÇAS ELIMINADAS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>Analisando sistema...</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#74d5d6'}}>Programas corrompidos: 0</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>instalando [CONFIDENCIAL] em 1 segundo(s)</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>[CONFIDENCIAL] instalado com sucesso</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>Checando arquivos maliciosos...</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>47 ARQUIVOS CORROMPIDOS FORAM DETECTADOS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>[ERRO] DISPOSITIVO COMPROMETIDO</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>INICIANDO MEDIDA PROTETIVA</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>19 PROGRAMAS DESCARTADOS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>28 AMEAÇAS ELIMINADAS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>Analisando sistema...</p></span>
                        </div>
                    </div>
                    <div className={styles.logSide}>
                        <span className={styles.decoLines3} style={{top: '0', right: '0'}}></span>
                        <span className={styles.decoLines3} style={{top: '0', right: '0', transform: 'rotate(-90deg)'}}></span>
                        <span className={styles.decoLines3} style={{bottom: '0', left: '0'}}></span>
                        <span className={styles.decoLines3} style={{bottom: '0', left: '0', transform: 'rotate(-90deg)'}}></span>
                        <h1 className={styles.logHeader}>Nossas estações utilizam tecnologia de ponta</h1>
                        <p className={styles.img2Text}>Preocupações com navegação e manuseio de arquivos são quase inexistentes! No atual momento, diversas estações estão equipadas com inteligências artifiais capazes de conduzir tripulantes e resolver a grande maioria de problemas.</p>
                    </div>
                </div>
                <div className={styles.cardsCarousel}>
                    <span className={styles.topLeftCard}></span>
                    <span className={styles.topRightCard}></span>
                    <span className={styles.bottomLeftCard}></span>
                    <span className={styles.bottomRightCard}></span>
                    <h1 className={styles.noticiasHeader} style={{marginBlock: '2rem'}}>Últimas notícias</h1>
                    <div className={styles.noticiasBody}>
                        <div id='one' className={styles.itemWrap1} onMouseOver={cardSelect} onMouseLeave={cardDeselect}>
                            <img className={styles.carouselItem} src={spaceship}></img>
                            <p className={styles.itemText}>Modelos de estações espaciais</p>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <a className={styles.itemButton}>Conferir <BiChevronRight id='conferirEstacao' className={styles.itemChevron}/></a>
                                <span id='lineEstacao' className={styles.itemLine}></span>
                            </div>
                            <div id='estacao' className={styles.filler}></div>
                        </div>
                        <div id='two' className={styles.itemWrap2} onMouseOver={cardSelect} onMouseLeave={cardDeselect}>
                            <img className={styles.carouselItem} src={futuristicBackground2}></img>
                            <p className={styles.itemText}>Instalações em outros planetas</p>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <a className={styles.itemButton}>Conferir <BiChevronRight id='conferirInstalacao' className={styles.itemChevron}/></a>
                                <span id='lineInstalacao' className={styles.itemLine}></span>
                            </div>
                            <div id='instalacao' className={styles.filler}></div>
                        </div>
                        <div id='three' className={styles.itemWrap3} onMouseOver={cardSelect} onMouseLeave={cardDeselect}>
                            <img className={styles.carouselItem} src={galaxia}></img>
                            <p className={styles.itemText}>Galáxias recém-descobertas</p>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <a className={styles.itemButton}>Conferir <BiChevronRight id='conferirGalaxia' className={styles.itemChevron}/></a>
                                <span id='lineGalaxia' className={styles.itemLine}></span>
                            </div>
                            <div id='galaxia' className={styles.filler}></div>
                        </div>
                    </div>
                </div>
                <ul className={styles.footer}>
                    <li id='github' className={styles.socialsGithub}>
                        <BsGithub className={styles.socials}/>
                    </li>
                    <li id='discord' className={styles.socialsDiscord}>
                        <FaDiscord className={styles.socials}/>
                    </li>
                    <li id='instagram' className={styles.socialsInstagram}>
                        <BsInstagram className={styles.socials}/>
                    </li>
                    <li id='linkedin' className={styles.socialsLinkedin}>
                        <BsLinkedin className={styles.socials}/>
                    </li>
                    <li id='cinema' className={styles.creditosCinema}>
                        <a className={styles.creditosText}>SpaceCinema</a>
                    </li>
                    <li id='mark' className={styles.creditosMark}>
                        <a className={styles.creditosText}>Mark Kolobaev</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}