import { useState } from 'react'
import type { Category, Product } from '../../types'
import { CATEGORIES } from '../../types'
import productsData from '../../data/products.json'
import ProductCard from '../ProductCard/ProductCard'
import './ProductSection.scss'

interface ProductSectionProps {
  onProductClick: (product: Product) => void
  title?: string
  showVerTodos?: boolean
}

const ProductSection = ({ onProductClick, title = 'Produtos relacionados', showVerTodos = false }: ProductSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>('CELULAR')
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = productsData.products as Product[]
  const visibleCount = 4

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(products.length - visibleCount, prev + 1))
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section className="product-section">
      <div className="container">

        {/* Título */}
        <div className="product-section__header">
          <h2 className="product-section__title">{title}</h2>
          {showVerTodos && (
            <a href="#" className="product-section__ver-todos">Ver todos</a>
          )}
        </div>

        {/* Abas */}
        {!showVerTodos && (
          <ul className="product-section__tabs">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button
                  className={`product-section__tab ${activeCategory === cat ? 'product-section__tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Carrossel */}
        <div className="product-section__carousel">
          <button
            className="product-section__arrow product-section__arrow--left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &#8249;
          </button>

          <div className="product-section__cards">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.productName}
                product={product}
                onClick={onProductClick}
              />
            ))}
          </div>

          <button
            className="product-section__arrow product-section__arrow--right"
            onClick={handleNext}
            disabled={currentIndex >= products.length - visibleCount}
          >
            &#8250;
          </button>
        </div>

      </div>
    </section>
  )
}

export default ProductSection