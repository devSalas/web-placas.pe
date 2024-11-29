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

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result.toString()); // Convierte el resultado en string
        } else {
          reject(new Error('Failed to read the file.'));
        }
      };
  
      reader.onerror = () => {
        reject(new Error('An error occurred while reading the file.'));
      };
  
      reader.readAsDataURL(file); // Lee el archivo como Data URL
    });
  };
  


  const handleFile = async (file: File) => {
    try {
      const base64String = await convertFileToBase64(file);
      console.log('Base64:', base64String);
  
      // Aquí puedes enviar el base64String a tu API
      await fetch('/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ base64Document: base64String }),
      });
    } catch (error) {
      console.error('Error converting file to Base64:', error);
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
          accept=".doc,.docx,.pdf,.jpg,.jpeg"
          onChange={()=>handleFile}
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
