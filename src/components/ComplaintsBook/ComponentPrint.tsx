import React, { useEffect, useRef, useState } from "react";
import printJS from "print-js";
import type FormDataState from "src/types/bookTypes";

interface FormPrintProps {

  plate?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  documentType?: string;
  documentNumber?: string;
  isMinor?: boolean;
  bookType?: string;
  description?: string;
  bookClaimType?: string;
  claim?: string;
  base64Document?: string;
  office?: string;

}


const FormPrintComponent = ({data}:{data:FormDataState }) => {
  console.log({data,n:25})
  return (
    <div id="print-container" className="font-sans max-w-3xl p-6 ">
      <div className="text-center border-b-2 border-gray-700 pb-4 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Detalles del Formulario</h1>
      </div>

      <div className="mb-6 border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
          Información Personal
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Primer Nombre:</strong> {data.clientData?.firstName || "N/A"}
          </div>
          <div>
            <strong>Segundo Nombre:</strong> {data.clientData?.middleName || "N/A"}
          </div>
          <div>
            <strong>Apellidos:</strong> {data.clientData?.lastName || "N/A"}
          </div>
          <div>
            <strong>Tipo de Documento:</strong> {data.clientData?.documentType || "N/A"}
          </div>
          <div>
            <strong>Número de Documento:</strong> {data.clientData?.documentNumber || "N/A"}
          </div>
        </div>
      </div>
      {data.isMinor &&(<div className="mb-6 border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
          Información del apoderado
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Nombre y Apellido:</strong> {data.guardianData?.representativeName || "N/A"}
          </div>
          <div>
            <strong>dirección:</strong> {data.guardianData?.representativeAddress || "N/A"}
          </div>
          <div>
            <strong>Teléfono:</strong> {data.guardianData?.representativePhone || "N/A"}
          </div>
          <div>
            <strong>Correo:</strong> {data.guardianData?.representativeAddress || "N/A"}
          </div>
        </div>
      </div>)}

      <div className="mb-6 border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
          Información de Contacto
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Correo Electrónico:</strong> {data.clientData?.email || "N/A"}
          </div>
          <div>
            <strong>Teléfono:</strong> {data.clientData?.phoneNumber || "N/A"}
          </div>
          <div>
            <strong>Placa:</strong> {data.clientData?.plate || "N/A"}
          </div>
        </div>
      </div>

      <div className="mb-6 border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
          Detalles del Libro y Reclamo
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Tipo de Libro:</strong> {data.productService?.bookType || "N/A"}
          </div>
          <div>
            <strong>Descripción del Libro:</strong> {data.productService?.description || "N/A"}
          </div>
          <div>
            <strong>Tipo de Reclamo:</strong> {data.complaintDetails?.bookClaimType || "N/A"}
          </div>
          <div>
            <strong>Detalle del Reclamo:</strong> {data.complaintDetails?.claim ||"N/A"}
          </div>
        </div>
      </div>

      <div className="mb-6 border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
          Información Adicional
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Es Menor:</strong> {data.isMinor ? "Sí" : "No"}
          </div>
          <div>
            <strong>Oficina:</strong> {data.office || "N/A"}
          </div>
        </div>
      </div>

      {data.base64Document && (
        <div className="mb-6 border border-gray-300 p-4 rounded">
          <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
            Documento Adjunto
          </h2>

        </div>
      )}
    </div>
  );
};

// Componente contenedor para manejar la impresión
export const PrintableForm = ({ data }:{ data:FormDataState}) => {

  const [currentData, setCurrentData] = useState<FormDataState>(data);

  useEffect(() => {
    console.log({currentData, data})
    setCurrentData(data);
  }, [data]);


  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (containerRef.current) {
      printJS({
        printable: containerRef.current,
        type: "html",
        targetStyles: ["*"]
      });
    }
  };

  return (
    <div className="my-[50px]">
      <div ref={containerRef} className="w-full flex justify-center items-center ">
        <FormPrintComponent data={currentData} />
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700"
        >
          Imprimir Formulario
        </button>
      </div>
    </div>
  );
};
