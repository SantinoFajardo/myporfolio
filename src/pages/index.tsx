import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'
import React from 'react'; 
import Typewriter from "typewriter-effect"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.divMe}>
          <h1>Fajardo Santino</h1>
          <h3>Full-stack developer</h3>
        </div>
          <div className={styles.divTypewriter}>
            <p className={styles.pTypewriter}>
            <Typewriter
            onInit={(typewriter:any)=> {
            typewriter
             .typeString("Welcome to my portfolio!")
             .pauseFor(200)
             .deleteAll()
             .typeString('Thank you for taking the time to get to know me and see my efforts.')
             .deleteAll()
             .typeString("Enough of detours and let's begin!")
             .start()
             
             }}/>
            </p>
          </div>
      </Layout>
    </div>
  )
}

export default Home
