import './BrandCarousel.scss'

const brands = [
  { name: 'Econverse 1' },
  { name: 'Econverse 2' },
  { name: 'Econverse 3' },
  { name: 'Econverse 4' },
  { name: 'Econverse 5' },
]

const BrandCarousel = () => {
  return (
    <section className="brand-carousel">
      <div className="container">
        <h2 className="brand-carousel__title">Navegue por marcas</h2>

        <div className="brand-carousel__list">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-carousel__item">
              <a href="#" className="brand-carousel__link">
                <div className="brand-carousel__circle">
                  <span className="brand-carousel__logo">
                    <span className="brand-carousel__logo-e">e</span>converse
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BrandCarousel