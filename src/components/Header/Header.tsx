import './Header.scss'

const Header = () => {
  return (
    <header className="header">

      {/* Topbar */}
      <div className="header__topbar">
        <div className="container header__topbar-inner">
          <span className="header__topbar-item">
            <img src="/assets/icons/ShieldCheck.svg" alt="" />
            Compra <strong>100% segura</strong>
          </span>
          <span className="header__topbar-item">
            <img src="/assets/icons/Truck.svg" alt="" />
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
          <span className="header__topbar-item">
            <img src="/assets/icons/CreditCard.svg" alt="" />
            <strong>Parcele</strong> suas compras
          </span>
        </div>
      </div>

      {/* Main */}
      <div className="header__main">
        <div className="container header__main-inner">

          {/* Logo */}
          <a href="/" className="header__logo">
            <img src="/assets/Logo Econverse.svg" alt="Econverse" />
          </a>

          {/* Search */}
          <div className="header__search">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="header__search-input"
            />
            <button className="header__search-btn">
              <img src="/assets/icons/SearchIcon.svg" alt="Buscar" />
            </button>
          </div>

          {/* Ícones */}
          <div className="header__icons">
            <a href="#" className="header__icon-link">
              <img src="/assets/icons/GroupBox.svg" alt="Categorias" />
            </a>
            <a href="#" className="header__icon-link">
              <img src="/assets/icons/Heart.svg" alt="Favoritos" />
            </a>
            <a href="#" className="header__icon-link">
              <img src="/assets/icons/UserCircle.svg" alt="Usuário" />
            </a>
            <a href="#" className="header__icon-link">
              <img src="/assets/icons/ShoppingCart.svg" alt="Carrinho" />
            </a>
          </div>

        </div>
      </div>

      {/* Nav */}
      <nav className="header__nav">
        <div className="container header__nav-inner">
          <a href="#" className="header__nav-link">TODAS CATEGORIAS</a>
          <a href="#" className="header__nav-link">SUPERMERCADO</a>
          <a href="#" className="header__nav-link">LIVROS</a>
          <a href="#" className="header__nav-link">MODA</a>
          <a href="#" className="header__nav-link">LANÇAMENTOS</a>
          <a href="#" className="header__nav-link header__nav-link--active">OFERTAS DO DIA</a>
          <a href="#" className="header__nav-link">
            <img src="/assets/icons/CrownSimpleSignature.svg" alt="" />
            ASSINATURA
          </a>
        </div>
      </nav>

    </header>
  )
}

export default Header