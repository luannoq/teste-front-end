import './Header.scss'

const Header = () => {
  return (
    <header className="header">

      {/* Topbar */}
      <div className="header__topbar">
        <div className="container header__topbar-inner">
          <span>🛡️ Compra <strong>100% segura</strong></span>
          <span>🚚 <strong>Frete grátis</strong> acima de R$ 200</span>
          <span>💳 <strong>Parcele</strong> suas compras</span>
        </div>
      </div>

      {/* Logo + Search + Ícones */}
      <div className="header__main">
        <div className="container header__main-inner">

          <a href="/" className="header__logo">
            <span className="header__logo-circle">e</span>
            <span className="header__logo-text">converse</span>
          </a>

          <div className="header__search">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="header__search-input"
            />
            <button className="header__search-btn">🔍</button>
          </div>

          <div className="header__icons">
            <button className="header__icon-btn">🏪</button>
            <button className="header__icon-btn">♡</button>
            <button className="header__icon-btn">👤</button>
            <button className="header__icon-btn">🛒</button>
          </div>

        </div>
      </div>

      {/* Nav */}
      <nav className="header__nav">
        <div className="container">
          <ul className="header__nav-list">
            <li><a href="#">TODAS CATEGORIAS</a></li>
            <li><a href="#">SUPERMERCADO</a></li>
            <li><a href="#">LIVROS</a></li>
            <li><a href="#">MODA</a></li>
            <li><a href="#">LANÇAMENTOS</a></li>
            <li><a href="#" className="header__nav-list--active">OFERTAS DO DIA</a></li>
            <li><a href="#">ASSINATURA</a></li>
          </ul>
        </div>
      </nav>

    </header>
  )
}

export default Header