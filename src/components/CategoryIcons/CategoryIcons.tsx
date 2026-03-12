import './CategoryIcons.scss'

const categories = [
  { label: 'Tecnologia', active: true },
  { label: 'Supermercado', active: false },
  { label: 'Bebidas', active: false },
  { label: 'Ferramentas', active: false },
  { label: 'Saúde', active: false },
  { label: 'Esportes e Fitness', active: false },
  { label: 'Moda', active: false },
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
                🔲
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