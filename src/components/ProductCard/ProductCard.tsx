import type { Product } from '../../types'
import { formatPrice, getOldPrice, formatInstallment } from '../../hooks/usePrice'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <article className="product-card" onClick={() => onClick(product)}>

      <div className="product-card__image-wrapper">
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
        />
      </div>

      <div className="product-card__info">
        <p className="product-card__description">
          {product.descriptionShort}
        </p>

        <div className="product-card__pricing">
          <span className="product-card__old-price">
            {getOldPrice(product.price)}
          </span>
          <strong className="product-card__price">
            {formatPrice(product.price)}
          </strong>
          <span className="product-card__installment">
            ou 2x de {formatInstallment(product.price)} sem juros
          </span>
          <span className="product-card__shipping">
            Frete grátis
          </span>
        </div>

        <button className="product-card__btn">
          COMPRAR
        </button>
      </div>

    </article>
  )
}

export default ProductCard