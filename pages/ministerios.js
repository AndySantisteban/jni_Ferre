import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Contacto() {
  return (
    <div>
      <Layout>
        <div className={styles.titulo}>
          <h1>Ministerios</h1>
          <div className={styles.gridMinisterios}>
            <div className={styles.ministerio}>
              <div className={styles.contenidoMinisterio}>
                <p>Ministerio de Alabanza πΈ</p>
              </div>
            </div>
            <div className={styles.ministerio1}>
              <div className={styles.contenidoMinisterio}>
                <p>Minisiterio de Adolescentes π¦π»</p>
              </div>
            </div>
            <div className={styles.ministerio2}>
              <div className={styles.contenidoMinisterio}>
                <p>Ministerio de JΓ³venes π¨βπ©βπ§βπ¦ </p>
              </div>
            </div>
            <div className={styles.ministerio3}>
              <div className={styles.contenidoMinisterio}>
                <p>Ministerio de Mujeres π©π»</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
