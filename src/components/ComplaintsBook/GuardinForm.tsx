import React from 'react';

interface GuardianFormProps {
  show: boolean;
  onGuardianDataChange: (field: string, value: string) => void;
}

export const GuardianForm: React.FC<GuardianFormProps> = ({ show, onGuardianDataChange }) => {
  if (!show) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">DATOS DEL APODERADO</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombres:</label>
          <input
            type="text"
            onChange={(e) => onGuardianDataChange('representativeName', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Dirección:</label>
          <input
            type="text"
            onChange={(e) => onGuardianDataChange('representativeAddress', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono:</label>
          <input
            type="tel"
            onChange={(e) => onGuardianDataChange('representativePhone', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">E-Mail:</label>
          <input
            type="email"
            onChange={(e) => onGuardianDataChange('representativeEmail', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );
};