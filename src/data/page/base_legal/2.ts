interface SubDetalle {
    subtipo: string;
    descripcion: string;
    subdetalles: string[];
  }
  
  interface ContenidoDetalle {
    descripcion: string;
    detalles: (string | SubDetalle)[];
  }
  
  interface Articulo {
    nombre: string;
    contenido: ContenidoDetalle[];
  }
  
  interface Capitulo {
    nombre: string;
    articulos: Articulo[];
  }
  
  interface BaseLegal {
    titulo: string;
    subtitulo: string;
    numeroTitulo: string;
    capitulos: Capitulo[];
  }


export const dataBaseLegalTituloII:BaseLegal  = {
    titulo: "Base Legal",
    subtitulo:"Reglamento de placa única nacional de rodaje.",
    numeroTitulo:"Titulo II",
    capitulos: [
        {
            nombre: "Sistema de codificación de la placa única nacional de rodaje",
            articulos: [
                {
                    nombre: "Artículo 9.- Número de matrícula de la placa ordinaria",
                    contenido: [
                        {
                            descripcion: "El número de matrícula de la placa ordinaria está conformado por:",
                            detalles: [
                                {
                                    subtipo: "9.1 Tratándose de vehículos menores",
                                    descripcion: "Por una secuencia de seis (6) caracteres separados por un guión en dos grupos de dos (2) caracteres el primero y de cuatro (4) caracteres el segundo, de acuerdo al siguiente detalle:",
                                    subdetalles: [
                                        "a) El primer carácter, que será una letra del abecedario, cuyo valor será asignado tomando los diez (10) valores numéricos posibles y las veintiséis (26) letras del abecedario, de acuerdo al orden correlativo de inscripción permitiendo un total de treinta y seis (36) combinaciones posibles.",
                                        "b) El segundo carácter, que será una dígito del abecedario, es asignado de acuerdo al orden correlativo de inscripción, permitiendo un total de veintiséis (26) combinaciones posibles.",
                                        "c) Los cuatro caracteres finales, expresados en valores numéricos, son asignados de acuerdo al orden correlativo de inscripción."
                                    ]
                                },
                                {
                                    subtipo: "9.2 Tratándose de vehículos livianos y pesados",
                                    descripcion: "Por una secuencia de seis (6) caracteres separados por un guión intermedio en dos grupos de tres (3) caracteres cada uno, de acuerdo al siguiente detalle:",
                                    subdetalles: [
                                        "a) El primer carácter, que será siempre una letra del abecedario, identifica a la zona registral de inscripción del vehículo, conforme al Anexo II del presente Reglamento, permitiendo un total de veinticinco (25) combinaciones posibles.",
                                        "b) El segundo y tercer caracteres, que serán dígitos alfanuméricos cuyo valor serán asignados tomando los diez (10) valores numéricos posibles y las veintiséis (26) letras del abecedario, de acuerdo al orden correlativo de inscripción, permitiendo un total de treinta y seis (36) combinaciones posibles para cada uno de ellos.",
                                        "c) Los tres caracteres finales, expresados en valores numéricos, son asignados de acuerdo al orden correlativo de inscripción."
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    nombre: "Artículo 10°.- Número de matrícula de la placa especial",
                    contenido: [
                        {
                            descripcion: "El número de matrícula de la placa especial está conformado por una secuencia de seis (6) caracteres separados por un guión intermedio en dos grupos de tres caracteres cada uno, de acuerdo al siguiente detalle:",
                            detalles: [
                                "10.1. El primer carácter, de dimensiones más pequeñas que el resto de caracteres, será de modo permanente la letra 'E'.",
                                "10.2. El segundo y el tercer caracteres, que serán letras del abecedario, identifican el tipo y/o subtipo de placa especial conforme al Anexo III del presente Reglamento.",
                                "10.3. Los tres caracteres finales, expresados en valores numéricos, son asignados de acuerdo al orden correlativo de inscripción."
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
