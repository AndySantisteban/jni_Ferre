import Link from 'next/link'
import Head from 'next/head'
const Navbar = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        ></link>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid ms-2">
          <Link href="/">
            <a className="navbar-brand">Jni Ferreñafe</a>
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/ministerios">
                  <a className="nav-link" aria-current="page">
                    Ministerios
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cultos">
                  <a className="nav-link">Cultos</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto">
                  <a className="nav-link">Contáctanos</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
