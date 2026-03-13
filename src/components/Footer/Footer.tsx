import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Logo + descrição + redes sociais */}
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <img src="/assets/Logo Econverse.svg" alt="Econverse" />
          </a>
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              <img src="/assets/icons/Instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className="footer__social-link">
              <img src="/assets/icons/Facebook.svg" alt="Facebook" />
            </a>
            <a href="#" className="footer__social-link">
              <img src="/assets/icons/Linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__col-title">Institucional</h4>
            <ul className="footer__col-list">
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Ajuda</h4>
            <ul className="footer__col-list">
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Termos</h4>
            <ul className="footer__col-list">
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer