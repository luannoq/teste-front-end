import { useState } from 'react'
import type { Product } from '../../types'
import { formatPrice, getOldPrice, formatInstallment } from '../../hooks/usePrice'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">

        {/* Botão fechar */}
        <button className="modal__close" onClick={onClose}>✕</button>

        {/* Imagem */}
        <div className="modal__image-wrapper">
          <img
            src={product.photo}
            alt={product.productName}
            className="modal__image"
          />
        </div>

        {/* Info */}
        <div className="modal__info">
          <h2 className="modal__name">{product.productName}</h2>
          <p className="modal__description">{product.descriptionShort}</p>

          <div className="modal__pricing">
            <span className="modal__old-price">{getOldPrice(product.price)}</span>
            <strong className="modal__price">{formatPrice(product.price)}</strong>
            <span className="modal__installment">
              ou 2x de {formatInstallment(product.price)} sem juros
            </span>
            <span className="modal__shipping">🚚 Frete grátis</span>
          </div>

          {/* Quantidade */}
          <div className="modal__quantity">
            <span className="modal__quantity-label">Quantidade:</span>
            <div className="modal__quantity-controls">
              <button
                className="modal__quantity-btn"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="modal__quantity-value">{quantity}</span>
              <button
                className="modal__quantity-btn"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button className="modal__btn">COMPRAR</button>
        </div>

      </div>
    </div>
  )
}

export default ProductModal