import React, { useState } from 'react';

interface FormHeaderProps {
  codigoReclamo: string;
  onFechaChange: (fecha: string) => void;
}

export const FormHeader: React.FC<FormHeaderProps> = ({ codigoReclamo, onFechaChange }) => {
  const [fecha, setFecha] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`; // Formato YYYY-MM-DD
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setFecha(newDate);
    onFechaChange(newDate); // Emitimos la fecha en el formato correcto
  };

  // Conversión para mostrar DD/MM/AAAA
  const formattedDate = fecha.split('-').reverse().join('/');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Código Reclamo:</label>
        <input
          type="text"
          disabled
          value={codigoReclamo}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          readOnly
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha:</label>
        <input
          type="date"
          value={fecha} // Valor controlado en formato YYYY-MM-DD
          onChange={handleChange}
          disabled
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />

      </div>
    </div>
  );
};
