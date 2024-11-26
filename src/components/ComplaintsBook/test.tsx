import React, { useRef } from 'react';
import printJS from 'print-js';

export function ComponentParaImprimir() {
  const componentRef = useRef(null);

  const handlePrint = () => {
    printJS({
      printable: componentRef.current,
      type: 'html',
      header: 'Mi Encabezado'
    });
  };

  return (
    <div>
      <div ref={componentRef}>
        <h1>Documento para Imprimir</h1>
        <p>Contenido a imprimir</p>
      </div>
      <button onClick={handlePrint}>Imprimir</button>
    </div>
  );
}

