import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
const Footer = () => {
  return (
    <div className=" bg-dark text-white">
      <div className={styles.pie_pagina}>
        <div className={styles.section_pie}>
          Direccion
          <p>Arequipa 203 A, Ferreñafe</p>
        </div>
        <div className={styles.section_pie}>
          Redes Sociales
          <div className="container d-flex justify-content-center ">
            <a href="#" className="m-3">
              <img src="https://img.icons8.com/metro/40/ffffff/facebook-new--v2.png" />
            </a>
            <a href="#" className="m-3">
              <img src="https://img.icons8.com/pastel-glyph/40/ffffff/whatsapp--v2.png" />
            </a>
            <a href="#" className="m-3">
              <img src="https://img.icons8.com/material-outlined/42/ffffff/instagram-new--v1.png" />
            </a>
          </div>
        </div>
        <div className={styles.section_pie}>
          <p>&copy; 2021 Iglesia del Nazareno ⛪</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
