import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'
import React from 'react'; 
import Typewriter from "typewriter-effect"
import Cookies from 'universal-cookie/cjs/Cookies'
import traductionOfLanding from '../lenguajes/landing'

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
      </Layout>
    </div>
  )
}

export default Home