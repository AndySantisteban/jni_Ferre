import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { useForm, ValidationError } from '@formspree/react'

export default function Contacto() {
  const [state, handleSubmit] = useForm('xdoypdev')
  if (state.succeeded) {
    return <p>Thanks</p>
  }
  return (
    <Layout>
      <h1 className="text-center mt-4">Contacto</h1>
      <p className="text-center mt-1 p-3">
        Si deseas comunicarte con nosotros Envíanos un correo y nos trataremos
        de comunicarnos contigo
      </p>
      <div className={styles.formulario}>
        <form name="contact" method="POST" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="example@domain.com"
              required={true}
            ></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Mensaje:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              required={true}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="col-12 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger d-flex "
              disabled={state.submitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
