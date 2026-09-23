import { useState } from 'react';
import {
  calculateMarginPercentage,
  calculateSellingPrice,
  calculateCostPrice,
  calculateProfit,
  SECTORS,
} from '../utils/priceMarginUtils';

const usePriceMarginCalculator = () => {
  const [costPrice, setCostPrice] = useState<number>(0);
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [selectedSectorId, setSelectedSectorId] = useState<string>('laptops');

  const selectedSector = SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];
  const marginPercentage = calculateMarginPercentage(costPrice, sellingPrice);
  const profit = calculateProfit(costPrice, sellingPrice);

  const applyMarginByPrice = (price: number): void => {
    setCostPrice(price);
    const newSellingPrice = calculateSellingPrice(price, selectedSector.defaultMargin);
    setSellingPrice(newSellingPrice);
  };

  const applyMarginToSelling = (price: number): void => {
    setSellingPrice(price);
    const newCostPrice = calculateCostPrice(price, selectedSector.defaultMargin);
    setCostPrice(newCostPrice);
  };

  const applySectorMargin = (sectorId: string): void => {
    setSelectedSectorId(sectorId);
    if (costPrice > 0) {
      const newSellingPrice = calculateSellingPrice(
        costPrice,
        SECTORS.find((s) => s.id === sectorId)?.defaultMargin || 0
      );
      setSellingPrice(newSellingPrice);
    }
  };

  const reset = (): void => {
    setCostPrice(0);
    setSellingPrice(0);
    setSelectedSectorId('laptops');
  };

  return {
    costPrice,
    setCostPrice,
    sellingPrice,
    setSellingPrice,
    selectedSectorId,
    setSelectedSectorId,
    selectedSector,
    marginPercentage,
    profit,
    applyMarginByPrice,
    applyMarginToSelling,
    applySectorMargin,
    reset,
  };
};

export default usePriceMarginCalculator;
