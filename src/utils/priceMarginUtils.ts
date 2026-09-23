export interface Sector {
  id: string;
  name: string;
  defaultMargin: number;
}

export const SECTORS: Sector[] = [
  { id: 'laptops', name: 'Portátiles', defaultMargin: 8 },
  { id: 'desktops', name: 'Ordenadores de sobremesa', defaultMargin: 12 },
  { id: 'monitors', name: 'Monitores', defaultMargin: 10 },
  { id: 'components', name: 'Componentes', defaultMargin: 12 },
  { id: 'memory-storage', name: 'RAM y almacenamiento', defaultMargin: 10 },
  { id: 'peripherals', name: 'Periféricos y accesorios', defaultMargin: 25 },
  { id: 'refurbished', name: 'Equipos reacondicionados', defaultMargin: 20 },
  { id: 'custom', name: 'Personalizado', defaultMargin: 0 },
];

export const calculateMarginPercentage = (
  costPrice: number,
  sellingPrice: number
): number => {
  if (costPrice <= 0) return 0;
  const margin = ((sellingPrice - costPrice) / costPrice) * 100;
  return parseFloat(margin.toFixed(2));
};

export const calculateSellingPrice = (
  costPrice: number,
  marginPercentage: number
): number => {
  const sellingPrice = costPrice * (1 + marginPercentage / 100);
  return parseFloat(sellingPrice.toFixed(2));
};

export const calculateCostPrice = (
  sellingPrice: number,
  marginPercentage: number
): number => {
  const costPrice = sellingPrice / (1 + marginPercentage / 100);
  return parseFloat(costPrice.toFixed(2));
};

export const calculateProfit = (
  costPrice: number,
  sellingPrice: number
): number => {
  const profit = sellingPrice - costPrice;
  return parseFloat(profit.toFixed(2));
};
