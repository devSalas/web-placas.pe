import React, { useRef, useState } from 'react';
import { EstablishmentInfo } from './EstablishmentInfo';
import { FormHeader } from './FormHeader';
import { ClientForm } from './ClientForm';
import { GuardianForm } from './GuardinForm';
import { ProductServiceForm } from './ProductServiceForm';
import { ComplaintDetails } from './ComplaintDetails';
import printJS from 'print-js';




export const ComplaintForm: React.FC = () => {
  const [formData, setFormData] = useState({
    isMinor: false,
    base64Document:"",
    clientData: {},
    /* 
      placa, nombres, apellidos,direccion,tipoDocumento,numeroDocumento,telefono,email,enviarEmail,
    
    */
    guardianData: {},
    /*  nombresApoderado,direccionApoderado,emailApoderado,telefonoApoderado*/
    productService: {},
    /* tipo:  */
    complaintDetails: {},
    /* tipReclamo */
    SwornDeclaration: false

  });



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    const data = {
      plate: formData.clientData?.placa,
      email: formData.clientData?.email,
      phoneNumber: formData.clientData.telefono,
      firstName: formData.clientData.nombres,
      lastName: formData.clientData.apellidos,
      middleName:formData.clientData.apellidos ,
      documentType:formData.clientData.tipoDocumento,
      documentNumber: formData.clientData.numeroDocumento,
      isMinor: formData.isMinor,
      bookType: formData.productService.tipo, // Tipo de libro
      description: formData.productService.descripcion, // Descripción
      bookClaimType: formData.complaintDetails.tipo, // Tipo de reclamación del libro
      claim:formData.complaintDetails.descripcion, // Reclamación
      base64Document: "string", // Documento en formato base64
      office: "string" // Oficina
    };
    console.log(data)
    return

    try {
      const response = await fetch('/api/submit-complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      alert('Formulario enviado exitosamente');
      // Reset form
      setFormData({
        isMinor: false,
        clientData: {},
        guardianData: {},
        productService: {},
        complaintDetails: {},
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario. Por favor, intente nuevamente.');
    }
  };


   


 
  const printRef = useRef(null);

  const handleImprimir = () => {
    printJS({
      printable: printRef.current,
      type: 'html',
      header: 'Mi Encabezado'
    });
  };

  return (
    <div  ref={printRef} className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-100 p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">LIBRO RECLAMACIONES</h1>
      </div>

      <form   className="p-6 space-y-6">
        <FormHeader />

        <EstablishmentInfo />

        <ClientForm
          isMinor={formData.isMinor}
          onIsMinorChange={(isMinor) => setFormData({ ...formData, isMinor })}
          onClientDataChange={(field, value) =>
            setFormData({
              ...formData,
              clientData: { ...formData.clientData, [field]: value },
            })
          }
        />

        <GuardianForm
          show={formData.isMinor}
          onGuardianDataChange={(field, value) =>
            setFormData({
              ...formData,
              guardianData: { ...formData.guardianData, [field]: value },
            })
          }
        />

        <ProductServiceForm
          onProductServiceChange={(field, value) =>
            setFormData({
              ...formData,
              productService: { ...formData.productService, [field]: value },
            })
          }
        />

        <ComplaintDetails
          onComplaintDetailsChange={(field, value) =>
            setFormData({
              ...formData,
              complaintDetails: { ...formData.complaintDetails, [field]: value },
            })
          }
        />
        <hr />
        <div>

          <ul className='pl-6 text-xs text-slate-600'>
            <li className='list-decimal'>
              Reclamo: Disconformidad relacionada a los productos y/o servicios.
            </li>
            <li className='list-decimal'>
              Queja: Disconformidad no relacionada a los productos y/o servicios; malestar o descontento a la atención al público.
            </li>
          </ul>
        </div>
        <hr />
        <div className='flex gap-[10px] text-xs text-slate-600'>
          <input
            type="checkbox"
            required
            onChange={(e)=>setFormData({...formData, SwornDeclaration:e.target.checked})}
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <p> Acepto bajo Declaración Jurada los hechos descritos en el presente reclamo</p>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar
          </button>
          <button
              onClick={handleImprimir}
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Imprimir
          </button>
          <button
            type="button"
            
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Inicio
          </button>
        </div>
      </form>
    </div>
  );
};