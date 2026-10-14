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
  const [includeVAT, setIncludeVATState] = useState<boolean>(false);

  const selectedSector = SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];
  const marginPercentage = calculateMarginPercentage(costPrice, sellingPrice, includeVAT);
  const profit = calculateProfit(costPrice, sellingPrice, includeVAT);

  const setIncludeVAT = (enabled: boolean): void => {
    setIncludeVATState(enabled);
    if (costPrice > 0) {
      setSellingPrice(
        calculateSellingPrice(costPrice, selectedSector.defaultMargin, enabled)
      );
    }
  };

  const applyMarginByPrice = (price: number): void => {
    setCostPrice(price);
    const newSellingPrice = calculateSellingPrice(
      price,
      selectedSector.defaultMargin,
      includeVAT
    );
    setSellingPrice(newSellingPrice);
  };

  const applyMarginToSelling = (price: number): void => {
    setSellingPrice(price);
    const newCostPrice = calculateCostPrice(
      price,
      selectedSector.defaultMargin,
      includeVAT
    );
    setCostPrice(newCostPrice);
  };

  const applySectorMargin = (sectorId: string): void => {
    setSelectedSectorId(sectorId);
    if (costPrice > 0) {
      const newSellingPrice = calculateSellingPrice(
        costPrice,
        SECTORS.find((s) => s.id === sectorId)?.defaultMargin || 0,
        includeVAT
      );
      setSellingPrice(newSellingPrice);
    }
  };

  const reset = (): void => {
    setCostPrice(0);
    setSellingPrice(0);
    setSelectedSectorId('laptops');
    setIncludeVATState(false);
  };

  return {
    costPrice,
    setCostPrice,
    sellingPrice,
    setSellingPrice,
    includeVAT,
    setIncludeVAT,
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
