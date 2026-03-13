// Instanciamos o formatador uma única vez para melhor performance
const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// Transforma 15000 → "R$ 15.000,00"
export const formatPrice = (price: number): string => {
  return currencyFormatter.format(price);
};

// Gera o preço riscado (10% a mais que o preço atual) para mostrar o desconto
// Ex: 15000 → "R$ 16.500,00"
export const getOldPrice = (price: number): string => {
  const oldPrice = price * 1.1;
  return currencyFormatter.format(oldPrice);
};

// Gera o valor da parcela dividindo o preço pelo número de parcelas (padrão é 2)
// Ex: 15000 em 2x → "R$ 7.500,00"
export const formatInstallment = (price: number, parcelas: number = 2): string => {
  const installment = price / parcelas;
  return currencyFormatter.format(installment);
};