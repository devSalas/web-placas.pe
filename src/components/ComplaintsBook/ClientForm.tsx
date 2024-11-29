import React from 'react';

interface ClientFormProps {
  isMinor: boolean;
  onIsMinorChange: (isMinor: boolean) => void;
  onClientDataChange: (field: string, value: string) => void;
}

export const ClientForm: React.FC<ClientFormProps> = ({
  isMinor,
  onIsMinorChange,
  onClientDataChange,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">DATOS DEL CLIENTE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nro. Placa:</label>
          <input
            type="text"
            onChange={(e) => onClientDataChange('plate', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Primer Nombre:</label>
          <input
            type="text"
            onChange={(e) => onClientDataChange('firstName', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Segundo Nombre:</label>
          <input
            type="text"
            onChange={(e) => onClientDataChange('middleName', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Apellidos:</label>
          <input
            type="text"
            onChange={(e) => onClientDataChange('lastName', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Dirección:</label>
          <input
            type="text"
            onChange={(e) => onClientDataChange('direccion', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Documento:</label>
          <select
            onChange={(e) => onClientDataChange('documentType', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">- Seleccione -</option>
            <option value="DNI">DNI</option>
            <option value="CE">Carnet de Extranjería</option>
            <option value="PASAPORTE">Pasaporte</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nro. Documento:</label>
          <input
            type="text"
            onChange={(e) => onClientDataChange('documentNumber', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono:</label>
          <input
            type="tel"
            onChange={(e) => onClientDataChange('phoneNumber', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">E-Mail:</label>
          <input
            type="email"
            onChange={(e) => onClientDataChange('email', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            onChange={(e) => onClientDataChange('enviarEmail', e.target.checked.toString())}
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Enviar reclamo a Email del usuario</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isMinor}
            onChange={(e) => onIsMinorChange(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Reclamante es menor de edad</span>
        </label>
      </div>
    </div>
  );
};