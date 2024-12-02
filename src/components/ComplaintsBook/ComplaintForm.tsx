import React, { useRef, useState } from 'react';
import { EstablishmentInfo } from './EstablishmentInfo';
import { FormHeader } from './FormHeader';
import { ClientForm } from './ClientForm';
import { GuardianForm } from './GuardinForm';
import { ProductServiceForm } from './ProductServiceForm';
import { ComplaintDetails } from './ComplaintDetails';
import { PrintableForm } from './ComponentPrint';


interface ClientDataState {
  plate?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  documentType?: string;
  documentNumber?: string;
}
interface GuardianDataState {
  representativeName?: string;
  representativeAddress?: string;
  representativePhone?: string;
  representativeEmail?: string;
}
interface productServiceState {
  bookType?: string;
  bookClainType?: string;
  description?: string;
}

interface ComplaintDetailsState {
  bookClaimType?: string;
  claim?: string;
  base64Document?: string;
}

interface FormDataState {
  isMinor?: boolean;
  clientData?: ClientDataState;
  productService?: productServiceState;
  guardianData?: GuardianDataState;
  complaintDetails?: ComplaintDetailsState
  office?: string;
  base64Document?: string;
  SwornDeclaration?: boolean;
}




export const ComplaintForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    isMinor: false,
    office: "ASOCIACIÓN AUTOMOTRIZ DEL PERÚ - LIMA"
  });

  const [mostrarVista, setMostrarVista] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ formData })
    const data = {
      plate: formData.clientData?.plate,
      email: formData.clientData?.email,
      phoneNumber: formData.clientData?.phoneNumber,
      firstName: formData.clientData?.firstName,
      lastName: formData.clientData?.lastName,
      middleName: formData.clientData?.middleName,
      representativeName: formData.guardianData?.representativeName,
      representativeAddress: formData.guardianData?.representativeAddress,
      representativePhone: formData.guardianData?.representativePhone,
      representativeEmail: formData.guardianData?.representativeEmail,
      documentType: formData.clientData?.documentType,
      documentNumber: formData.clientData?.documentNumber,
      isMinor: formData.isMinor,
      bookType: formData.productService?.bookType,
      description: formData.productService?.description,
      bookClaimType: formData.complaintDetails?.bookClaimType,
      claim: formData.complaintDetails?.claim,
      base64Document: formData.complaintDetails?.base64Document || "",
      office: formData?.office
    };

    console.log({ data })
    try {
      const response = await fetch('https://placasdev.aap.org.pe:8090/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log(response)

      if (!response.ok) {

        if (!response.ok) {
          let json = await response.json();
          const errorMessages = json.messages.map((msg: { code: string; description: string }) => msg.description).join('\n');
          alert(`Error: \n${errorMessages}`);
        }
      }

      let json = await response.json();
      console.log({ json })


         alert("Se registro su reclamos con exito");
        setMostrarVista(true);

    } catch (error) {
      alert('Error al enviar el formulario. Por favor, intente nuevamente.');
    }
  };






  const printRef = useRef(null);



  return (
    <div ref={printRef} className="max-w-4xl mx-auto  shadow-lg rounded-lg overflow-hidden">
      {
        !mostrarVista ? (
          <div className=' '>
            <div className="p-4 border-b">
              <h1 className="text-2xl font-bold text-gray-800 text-center">LIBRO RECLAMACIONES</h1>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <FormHeader />

              <EstablishmentInfo />

              <ClientForm
                isMinor={formData.isMinor!}
                onIsMinorChange={(isMinor) => setFormData({ ...formData, isMinor })}
                onClientDataChange={(field, value) =>
                  setFormData({
                    ...formData,
                    clientData: { ...formData.clientData, [field]: value },
                  })
                }
              />

              <GuardianForm
                show={formData.isMinor!}
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
                  onChange={(e) => setFormData({ ...formData, SwornDeclaration: e.target.checked })}
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
                  type="button"

                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Inicio
                </button>
              </div>
            </form>
          </div>
        )
          : <PrintableForm data={formData} />
      }
    </div>
  );
};