import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'
import styles from '../styles/Home.module.css'
const Layout = ({ children }) => (
  <>
    <Head>
      <title>JNI Ferreñafe</title>
    </Head>
    <Navbar />
    <main className={styles.bodyHTML}>{children} </main>
    <Footer></Footer>
  </>
)
export default Layout
