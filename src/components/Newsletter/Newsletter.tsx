import { useState } from 'react'
import './Newsletter.scss'

const Newsletter = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [accepted, setAccepted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!accepted) {
      alert('Aceite os termos e condições!')
      return
    }
    alert(`Inscrito com sucesso! ${name}`)
    setName('')
    setEmail('')
    setAccepted(false)
  }

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">

        <div className="newsletter__text">
          <h2 className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__subtitle">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__inputs">
            <input
              type="text"
              placeholder="Digite seu nome"
              className="newsletter__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="newsletter__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter__btn">
              INSCREVER
            </button>
          </div>

          <label className="newsletter__terms">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span>Aceito os termos e condições</span>
          </label>
        </form>

      </div>
    </section>
  )
}

export default Newsletter