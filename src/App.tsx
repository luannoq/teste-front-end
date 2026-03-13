import { useState } from 'react'
import type { Product } from './types'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import CategoryIcons from './components/CategoryIcons/CategoryIcons'
import ProductSection from './components/ProductSection/ProductSection'
import PartnerBanner from './components/PartnerBanner/PartnerBanner'
import BrandCarousel from './components/BrandCarousel/BrandCarousel'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import ProductModal from './components/ProductModal/ProductModal'
import './styles/global.scss'


function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div>
      <Header />
      <Banner />
      <CategoryIcons />
      <ProductSection onProductClick={setSelectedProduct} />
      <PartnerBanner />
      <ProductSection onProductClick={setSelectedProduct} title="Produtos relacionados" showVerTodos />
      <PartnerBanner />
      <BrandCarousel />
      <ProductSection onProductClick={setSelectedProduct} title="Produtos relacionados" showVerTodos />
      <Newsletter />
      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      
      />
    </div>
  )
}

export default App