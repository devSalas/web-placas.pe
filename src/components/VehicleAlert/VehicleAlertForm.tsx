import { useState, useEffect} from 'react';

interface PropertiesError {
  plate: string,
  titleOrNumberVin: string,
}

export default function VehicleAlertForm() {
  const [section, setSection] = useState("create");
  const [formData, setFormData] = useState({
    plate: "",
    titleOrNumberVin: "",
  });

  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000); 
      return () => clearTimeout(timer); 
    }
  }, [error]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      console.log(formData)
      const res =await fetch("https://placasdev.aap.org.pe:8090/api/alert",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log("Error en la API:", errorData.messages);
        setError(errorData.messages[0]?.description || "Error desconocido")
        throw new Error(errorData.messages[0]?.description || "Error desconocido");
      }
  
      let json = await res.json();
      console.log(json);
  
    } catch (error) {
    
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = e.target;
    console.log({ name, value })
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
      <header className="bg-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/aap-logo.png" alt="AAP Logo" className="h-8" />
          <h1 className="text-xl font-semibold text-gray-800">Alerta Vehicular</h1>
        </div>
      </header>

      <div className="p-6">
        <nav className="mb-6">
          <ul className="flex border-b">
            <li className="mr-1">
              <button
                onClick={() => setSection("list")}
                className={`inline-block px-4 py-2 text-sm font-medium ${section === "list" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Listar Vehículos
              </button>
            </li>
            <li className="mr-1">
              <button
                onClick={() => setSection("create")}
                className={`inline-block px-4 py-2 text-sm font-medium ${section === "create" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Nuevo/Editar Vehículo
              </button>
            </li>
          </ul>
        </nav>

        {section === "list" ? (
          <div>Lista de Vehículos (en construcción)</div>
        ) : (
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-6">NUEVO/EDITAR VEHÍCULO</h2>
            {error && <p className="mt-4 text-red-500">Error: {error}</p>}
            {success && <p className="mt-4 text-green-500">¡Vehículo guardado con éxito!</p>}
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="1" className="block text-sm font-medium text-gray-700 mb-1">
                    Ingrese el Nro. de placa de su vehículo
                  </label>
                  <input
                    type="text"
                    required
                    name='plate'
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.plate}
                  />
                  <p className="mt-1 text-sm text-red-600 hidden" id={`1-error`}></p>
                </div>
              

                <div>
                  <label htmlFor="1" className="block text-sm font-medium text-gray-700 mb-1">
                    Ingrese el Nro. de título de su vehiculo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.titleOrNumberVin}
                    name='titleOrNumberVin'
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-sm text-red-600 hidden" id={`1-error`}></p>
                </div>
                

                <div className="flex gap-4">
                  <button
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 flex items-center gap-2"
                    onClick={() => setFormData({ plate: "", titleOrNumberVin: "" })}
                  >
                    Cancelar
                  </button>
                </div>
              </div>

              <div className="hidden md:block">
                <img
                  src="https://www.cuscoenportada.com/wp-content/uploads/2015/04/tarjeta-vehicular-690x340.jpg"
                  alt="Ejemplo de Tarjeta Vehicular"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
