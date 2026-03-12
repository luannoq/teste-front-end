// Interface para definir a estrutura de um produto 
export interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

// Define as categorias possíveis
export type Category = 
  | 'CELULAR' 
  | 'ACESSÓRIOS' 
  | 'TABLETS' 
  | 'NOTEBOOKS' 
  | 'TVS' 
  | 'VER TODOS'

// Lista de categorias para usar nos componentes
export const CATEGORIES: Category[] = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS'
]