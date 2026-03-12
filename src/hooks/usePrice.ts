// Transforma 15000 → "R$ 150,00" dividimos por 100 para converter de centavos para reais
export const formatPrice = (price: number): string => {
  return (price / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

// Gera o preço riscado (10% a mais que o preço atual) para mostrar o desconto
export const getOldPrice = (price: number): string => {
  const oldPrice = price * 1.1
  return (oldPrice / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

// Gera o valor da parcela dividindo o preço por 2 (ou pelo número de parcelas) e formatando como moeda
// Ex: 15000 em 2x → "R$ 75,00"
export const formatInstallment = (price: number, parcelas: number = 2): string => {
  const installment = price / 100 / parcelas
  return installment.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}