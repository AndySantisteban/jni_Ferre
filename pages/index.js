import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.titulo}>
          <h1>JNI - Ferreñafe</h1>
        </div>
      </Layout>
    </div>
  )
}
