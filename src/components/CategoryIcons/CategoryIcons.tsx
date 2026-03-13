import './CategoryIcons.scss'
const categories = [
  { label: 'Tecnologia', icon: '/assets/icons/Tecnologia.svg', active: true },
  { label: 'Supermercado', icon: '/assets/icons/Supermercado.svg', active: false },
  { label: 'Bebidas', icon: '/assets/icons/Bebidas.svg', active: false },
  { label: 'Ferramentas', icon: '/assets/icons/Ferramentas.svg', active: false },
  { label: 'Saúde', icon: '/assets/icons/Saude.svg', active: false },
  { label: 'Esportes e Fitness', icon: '/assets/icons/Esportes e fitness.svg', active: false },
  { label: 'Moda', icon: '/assets/icons/Moda.svg', active: false },
]

const CategoryIcons = () => {
  return (
    <section className="category-icons">
      <div className="container">
        <ul className="category-icons__list">
          {categories.map((cat) => (
            <li
              key={cat.label}
              className={`category-icons__item ${cat.active ? 'category-icons__item--active' : ''}`}
            >
              <div className="category-icons__box">
                <img src={cat.icon} alt={cat.label} />
              </div>
              <span className="category-icons__label">{cat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default CategoryIcons