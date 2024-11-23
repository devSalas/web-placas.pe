import React from 'react';

interface EstablishmentInfoProps {
  onEstablishmentChange: (establishment: string) => void;
}

export const EstablishmentInfo: React.FC<EstablishmentInfoProps> = ({ onEstablishmentChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Establecimiento en Reclamo:</label>
        <select
          onChange={(e) => onEstablishmentChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          disabled
        >
          <option value="AAP">ASOCIACIÓN AUTOMOTRIZ DEL PERÚ - LIMA</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Dirección de Establecimiento:</label>
        <input
          type="text"
          value="LIMA / Av. Nicolás Arriola # 304 - La Victoria"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          readOnly
          disabled
        />
      </div>
    </div>
  );
};