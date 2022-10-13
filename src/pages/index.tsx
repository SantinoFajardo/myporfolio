import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'
import React from 'react'; 
import Typewriter from "typewriter-effect"
import Cookies from 'universal-cookie'
import traductionOfLanding from '../lenguajes/landing'
import AboutMe from '../components/aboutMe'
import {BsGithub,BsLinkedin} from "react-icons/bs"
import links from '../utils/links'
import Link from 'next/link'

const Home: NextPage = () => {
  const Cookie = new Cookies()
  const typeWriterLenguaje = traductionOfLanding.typewriter
  let lenguajeofPage = Cookie.get("Lenguaje")
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.divButtons}>
          <Link href={links.myCVLink} passHref>
            <a target={"_blank"}>
              <button className={styles.resumeButton}>Resume</button>
            </a>
          </Link>
          <Link href={links.myGitHubLink} passHref>
            <a  target={"_blank"}>
              <button className={styles.gitHubButton}>
                <BsGithub fontSize={"30px"}/>
              </button>
            </a>
          </Link>
          <Link href={links.myLinkedinLink} passHref>
            <a  target={"_blank"}>
              <button className={styles.linkedinButton}>
                <BsLinkedin fontSize={"30px"}/>
              </button>
            </a>
          </Link>
        </div>
      <div className={styles.vline}>
      </div>
        <div className={styles.divMe}>
          <h1>Fajardo Santino</h1>
          <h3>Full-stack developer</h3>
        </div>
        <div className={styles.vline2}>
        </div>
          <div className={styles.divTypewriter}>
            <p className={styles.pTypewriter}>
            <Typewriter
            onInit={(typewriter:any)=> {
            typewriter
             .typeString(lenguajeofPage == "ES" ? typeWriterLenguaje[0].ES : typeWriterLenguaje[0].EN)
             .start()
             }}/>
            </p>
          </div>
          <div className={styles.vline3}>
          </div>
          <div className={styles.divButtonStart}>
            <button className={styles.buttonStart}>
              {lenguajeofPage == "ES" ? traductionOfLanding.buttonStart.ES : traductionOfLanding.buttonStart.EN}
              </button>
          </div>
          <div className={styles.vline4}>
          </div>
          <AboutMe/>
      </Layout>
    </div>
  )
}

export default Home
