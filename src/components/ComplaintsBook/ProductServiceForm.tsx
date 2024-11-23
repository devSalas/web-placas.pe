import React from 'react';

interface ProductServiceFormProps {
  onProductServiceChange: (field: string, value: string) => void;
}

export const ProductServiceForm: React.FC<ProductServiceFormProps> = ({
  onProductServiceChange,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
        IDENTIFICACIÓN DEL BIEN CONTRATADO
      </h2>
      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="tipoContratado"
            value="servicio"
            onChange={(e) => onProductServiceChange('tipo', e.target.value)}
            className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <span className="ml-2 text-sm text-gray-600">Servicio</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="tipoContratado"
            value="producto"
            onChange={(e) => onProductServiceChange('tipo', e.target.value)}
            className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Producto</span>
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción:</label>
        <textarea
          rows={3}
          onChange={(e) => onProductServiceChange('descripcion', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
    </div>
  );
};