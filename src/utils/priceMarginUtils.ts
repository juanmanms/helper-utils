export interface Sector {
  id: string;
  name: string;
  defaultMargin: number;
}

export const VAT_RATE = 0.21;

export const SECTORS: Sector[] = [
  { id: 'laptops', name: 'Portátiles', defaultMargin: 8 },
  { id: 'desktops', name: 'Ordenadores de sobremesa', defaultMargin: 12 },
  { id: 'monitors', name: 'Monitores', defaultMargin: 10 },
  { id: 'components', name: 'Componentes', defaultMargin: 12 },
  { id: 'memory-storage', name: 'RAM y almacenamiento', defaultMargin: 10 },
  { id: 'peripherals', name: 'Periféricos y accesorios', defaultMargin: 25 },
  { id: 'refurbished', name: 'Equipos reacondicionados', defaultMargin: 20 },
  { id: 'hosting', name: 'Hosting', defaultMargin: 40 },
  { id: 'domains', name: 'Dominios', defaultMargin: 20 },
  { id: 'custom', name: 'Personalizado', defaultMargin: 0 },
];

export const calculateMarginPercentage = (
  costPrice: number,
  sellingPrice: number,
  includeVAT = false
): number => {
  if (costPrice <= 0) return 0;
  const netSellingPrice = includeVAT ? sellingPrice / (1 + VAT_RATE) : sellingPrice;
  const margin = ((netSellingPrice - costPrice) / costPrice) * 100;
  return parseFloat(margin.toFixed(2));
};

export const calculateSellingPrice = (
  costPrice: number,
  marginPercentage: number,
  includeVAT = false
): number => {
  const netSellingPrice = costPrice * (1 + marginPercentage / 100);
  const sellingPrice = includeVAT ? netSellingPrice * (1 + VAT_RATE) : netSellingPrice;
  return parseFloat(sellingPrice.toFixed(2));
};

export const calculateCostPrice = (
  sellingPrice: number,
  marginPercentage: number,
  includeVAT = false
): number => {
  const netSellingPrice = includeVAT ? sellingPrice / (1 + VAT_RATE) : sellingPrice;
  const costPrice = netSellingPrice / (1 + marginPercentage / 100);
  return parseFloat(costPrice.toFixed(2));
};

export const calculateProfit = (
  costPrice: number,
  sellingPrice: number,
  includeVAT = false
): number => {
  const netSellingPrice = includeVAT ? sellingPrice / (1 + VAT_RATE) : sellingPrice;
  const profit = netSellingPrice - costPrice;
  return parseFloat(profit.toFixed(2));
};
