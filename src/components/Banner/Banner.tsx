import './Banner.scss'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="banner__subtitle">
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#" className="banner__btn">Ver produto</a>
      </div>
    </section>
  )
}

export default Banner