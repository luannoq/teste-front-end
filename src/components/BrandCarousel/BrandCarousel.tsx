import './BrandCarousel.scss'

const BrandCarousel = () => {
  return (
    <section className="brand-carousel">
      <div className="container">
        <h2 className="brand-carousel__title">Navegue por marcas</h2>

        <div className="brand-carousel__list">
          {[1, 2, 3, 4, 5].map((i) => (
            <a href="#" key={i} className="brand-carousel__item">
              <div className="brand-carousel__circle">
                <img
                  src="/assets/Logo Econverse.svg"
                  alt="Econverse"
                  className="brand-carousel__logo"
                />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BrandCarousel