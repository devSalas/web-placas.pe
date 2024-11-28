import React, { useRef, useState, type ChangeEvent } from 'react';

interface ComplaintDetailsProps {
  onComplaintDetailsChange: (field: string, value: any) => void; // Cambiado `value` a `any` para manejar arrays de objetos
}

export const ComplaintDetails: React.FC<ComplaintDetailsProps> = ({
  onComplaintDetailsChange,
}) => {
  const [charCount, setCharCount] = useState(0);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCharCount(value.length);
    onComplaintDetailsChange('claim', value);
  };

  const handleFileChange = (event:ChangeEvent) => {
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file) {
      const reader = new FileReader();

      // Evento que se ejecuta cuando la lectura es exitosa
      reader.onload = () => {
        onComplaintDetailsChange('base64Document', reader.result);
      
      };
    }
  };

  


  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
        DETALLE DE LA RECLAMACIÓN
      </h2>
      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="tipoReclamo"
            value="reclamo"
            onChange={(e) => onComplaintDetailsChange('bookClainType', e.target.value)}
            className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <span className="ml-2 text-sm text-gray-600">Reclamo</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="tipoReclamo"
            value="queja"
            onChange={(e) => onComplaintDetailsChange('bookClainType', e.target.value)}
            className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Queja</span>
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción:</label>
        <textarea
          maxLength={750}
          rows={4}
          onChange={handleDescriptionChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
        <div className="text-sm text-gray-500 mt-1">{charCount} / 750 caracteres</div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Adjuntar archivos adicionales:
        </label>
        <input
          type="file"
          multiple
          accept=".doc,.docx,.pdf,.jpg,.jpeg"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <p className="mt-1 text-sm text-gray-500">(Formatos DOC, DOCX, PDF, JPG y JPEG)</p>
      </div>
    </div>
  );
};
