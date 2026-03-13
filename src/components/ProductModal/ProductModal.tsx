import { useState } from 'react'
import type { Product } from '../../types'
import { formatPrice } from '../../hooks/usePrice'
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
        <button className="modal__close" onClick={onClose}>✕</button>

        <div className="modal__image-wrapper">
          <img src={product.photo} alt={product.productName} className="modal__image" />
        </div>

        <div className="modal__info">
          <h2 className="modal__name">{product.productName}</h2>
          <strong className="modal__price">{formatPrice(product.price)}</strong>
          
          <p className="modal__description">
            Many desktop publishing packages and web page editors now many desktop publishing
          </p>

          <a href="#" className="modal__link">Veja mais detalhes do produto &gt;</a>

          <div className="modal__footer">
            <div className="modal__quantity-controls">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <button className="modal__btn-buy">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal