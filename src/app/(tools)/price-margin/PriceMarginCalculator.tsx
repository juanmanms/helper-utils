'use client';

import React from 'react';
import usePriceMarginCalculator from '../../../hooks/usePriceMarginCalculator';
import { SECTORS } from '../../../utils/priceMarginUtils';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const euroFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
});

const PriceMarginCalculator: React.FC = () => {
  const {
    costPrice,
    setCostPrice,
    sellingPrice,
    setSellingPrice,
    selectedSectorId,
    selectedSector,
    marginPercentage,
    profit,
    applyMarginByPrice,
    applyMarginToSelling,
    applySectorMargin,
    reset,
  } = usePriceMarginCalculator();

  const handleCostPriceChange = (inputValue: string) => {
    const value = parseFloat(inputValue) || 0;
    setCostPrice(value);
  };

  const handleSellingPriceChange = (inputValue: string) => {
    const value = parseFloat(inputValue) || 0;
    setSellingPrice(value);
  };

  const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    applySectorMargin(e.target.value);
  };

  const handleApplyMarginToCost = () => {
    if (costPrice > 0) {
      applyMarginByPrice(costPrice);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-center">Calculadora de Margen</h1>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Margen recomendado para retail informático en España, sin IVA
        </p>

        {/* Selector de Sector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoría de producto
          </label>
          <select
            value={selectedSectorId}
            onChange={handleSectorChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {SECTORS.map((sector) => (
              <option key={sector.id} value={sector.id}>
                {sector.name} ({sector.defaultMargin}%)
              </option>
            ))}
          </select>
        </div>

        {/* Precio de Costo */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio de coste sin IVA
          </label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="0.00"
              value={costPrice || ''}
              onChange={handleCostPriceChange}
              className="flex-1"
            />
            <Button
              onClick={handleApplyMarginToCost}
              className="bg-green-500 text-white hover:bg-green-600 px-4"
              title="Aplicar margen del sector"
            >
              Aplicar
            </Button>
          </div>
        </div>

        {/* Precio de Venta */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio de venta sin IVA
          </label>
          <Input
            type="number"
            placeholder="0.00"
            value={sellingPrice || ''}
            onChange={handleSellingPriceChange}
            className="w-full"
          />
        </div>

        {/* Resultados */}
        <div className="bg-blue-50 p-4 rounded-md mb-6 space-y-3 border border-blue-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Recargo sobre coste:</span>
            <span className="text-2xl font-bold text-blue-600">{marginPercentage}%</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-blue-200">
            <span className="text-gray-700 font-medium">Ganancia (monto):</span>
            <span className="text-xl font-bold text-green-600">
              {euroFormatter.format(profit)}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Recargo recomendado:</span>
            <span className="font-semibold">{selectedSector.defaultMargin}%</span>
          </div>
        </div>

        {/* Tabla de Comparación */}
        {costPrice > 0 && sellingPrice > 0 && (
          <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-3">Resumen</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Costo:</span>
                <span className="font-semibold">{euroFormatter.format(costPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Venta:</span>
                <span className="font-semibold">{euroFormatter.format(sellingPrice)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Ganancia:</span>
                <span className="font-bold">{euroFormatter.format(profit)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Botón de Reset */}
        <Button
          onClick={reset}
          className="w-full bg-gray-500 text-white hover:bg-gray-600"
        >
          Limpiar
        </Button>
      </div>
    </div>
  );
};

export default PriceMarginCalculator;
