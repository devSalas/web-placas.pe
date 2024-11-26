function validatePlateData(data:{plate:string,titleOrNumberVin:string}) {
    const plateRegex = /^[A-Z]{3}-\d{3}$|^[A-Z]{2}-\d{5}$/;
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
  
    const errors = [];
  
    // Validar la placa
    if (!data.plate || !plateRegex.test(data.plate)) {
      errors.push("La placa debe tener un formato válido (ABC-123 o AB-12345).");
    }
  
    // Validar el número VIN o título
    if (!data.titleOrNumberVin || !vinRegex.test(data.titleOrNumberVin)) {
      errors.push(
        "El VIN debe tener exactamente 17 caracteres alfanuméricos (sin incluir I, O, Q)."
      );
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  }
  
  // Ejemplo de uso
  const plateData = {
    plate: "ABC-123",
    titleOrNumberVin: "1HGCM82633A123456",
  };
  
