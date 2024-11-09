export const dataProcedimientoRequisitos = {
    title: "Procedimiento",
    procedimiento: {
        parrafo: "Para ingresar la solicitud de su nueva placa de rodaje, debe seguir los siguientes pasos:",
        lista: [
            {
                name: "1. Realizar previamente el trámite de la nueva Tarjeta de Identificación Vehicular acercándose a las oficinas de registros públicos SUNARP"
            },
            {
                name: "2. Generar su solicitud, según sea el tipo de trámite que se está realizando:",
                lista: [
                    "a) Nueva placa (Inmatriculación, Transferencias, cambio de Clase / Categoría y Cambio Voluntario).",
                    "b) Duplicado de Nueva Placa.",
                    "c) Duplicado de Tercera Placa.",
                    "d) Cambio de Uso."
                ]
            },
            {
                name: "Para lo cual tiene tres formas de hacerlo (Lima y Provincias):",
                lista: [
                    "a) Llamando a nuestro Call Center al 640-3636 y de Provincia al 0800-71111 (línea gratuita).",
                    "b) Acercándose a las oficinas de entregas ubicadas a nivel nacional.",
                    "c) Ingresando a la página web:<a href='/canales-atencion' class='text-red-500' target='_blank'> www.placas.pe</a>."
                ]
            },
            {
                name: "3. Tomar nota del código de pago, que se le asignará al término de su solicitud.",
                lista: ""
            },
            {
                name: "4. Acercarse a las oficinas del banco afiliado, presentar el código de pago proporcionado y realizar el pago correspondiente.",
                lista: ""
            },
            {
                name: "5. Verificar el voucher de pago entregado por el operador del banco, antes de retirarse de la ventanilla, comprobando que sus datos (N° de placa, marca y modelo del vehículo) sean los correctos.",
                lista: ""
            },
            {
                name: "6. Recoger su nueva placa de rodaje, si es en Lima a partir del 2do día hábil, previa confirmación electrónica, de haber realizado el pago en el banco, acercándose a nuestra oficina de entrega en Av. Nicolás Arriola 304, La Victoria. Para el caso de provincia a partir del 5to día hábil, previa confirmación electrónica, de realizado el pago en el banco, acercándose a las sedes autorizadas a nivel nacional  <a href='/canales-atencion' class='text-red-500' target='_blank'>(ver canales de atención)</a>.",
                lista: ""
            }
        ]
    },
    requisitos: {
        personaNatural: {
            nuevaPlaca: {
                parrafo: "NUEVA PLACA (Inmatriculación, Transferencias, Reemplacamiento, Cambio de Características, Cambio de uso):",
                lista: [
                    "1. Orden de Giro o Boleta Informativa (Original) del propietario actual emitida por la Sunarp.",
                    "2. DNI (Original) de la persona que recoge.",
                    "3. Juego de placas anteriores o denuncia policial original o copia certificada por la PNP por perdida, robo o deterioro indicando 1 o 2 planchas metálicas (en caso tenga 1 placa legible ésta deberá ser entregada).",
                    "4. El apoderado deberá entregar una Carta Poder original legalizada indicando el N° de la placa y copia legalizada del DNI del propietario."
                ]
            },
            duplicadoNuevaPlaca: {
                parrafo: "DUPLICADO DE NUEVA PLACA:",
                lista: [
                    "1. Boleta Informativa (Original) del propietario actual emitida por la Sunarp.",
                    "2. DNI (Original y Copia) de la persona que recoge.",
                    "3. Denuncia policial original o copia certificada por la PNP, por perdida, robo o deterioro indicando 1 o 2 planchas metálicas (en caso tenga 1 placa legible ésta deberá ser entregada).",
                    "4. El apoderado deberá entregar una Carta Poder original legalizada indicando el N° de la placa y copia legalizada del DNI del propietario."
                ]
            },
            duplicadoTerceraPlaca: {
                parrafo: "DUPLICADO DE TERCERA PLACA:",
                lista: [
                    "1. Boleta Informativa (Original) del propietario actual emitida por la Sunarp.",
                    "2. DNI (Original y Copia) de la persona que recoge.",
                    "3. Denuncia policial original o copia certificada por la PNP por pérdida, robo o deterioro.",
                    "4. El apoderado deberá entregar una Carta Poder original legalizada indicando el N° de la placa y copia legalizada del DNI del propietario."
                ]
            }
        },
        personaJuridica: {
            nuevaPlaca: {
                parrafo: "NUEVA PLACA (Inmatriculación, Transferencias, Reemplacamiento, Cambio de Características, Cambio de uso):",
                lista: [
                    "1. Orden de Giro o Boleta Informativa (Original) del propietario actual emitida por la Sunarp.",
                    "2. DNI (Original) de la persona que recoge.",
                    "3. Juego de placas anteriores o denuncia policial original o copia certificada por la PNP por perdida, robo o deterioro indicando 1 o 2 planchas metálicas (en caso tenga 1 placa legible ésta deberá ser entregada).",
                    "4. El Representante Legal deberá entregar su Vigencia Poder original y copia (no mayor a 30 días de antigüedad) acreditando sus facultades.",
                    "5. Los apoderados deberán presentar la Vigencia Poder original (no mayor a 30 días de antigüedad) y entregar copia de ésta más una Carta Poder original Legalizada, indicando el N° de la placa y copia legalizada del DNI del representante legal."
                ]
            },
            duplicadoNuevaPlaca: {
                parrafo: "DUPLICADO DE NUEVA PLACA:",
                lista: [
                    "1. Boleta Informativa (Original) del propietario actual emitida por la Sunarp.",
                    "2. DNI (Original y copia) de la persona que recoge.",
                    "3. Denuncia policial original o copia certificada por la PNP por perdida, robo o deterioro indicando 1 o 2 planchas metálicas (en caso tenga 1 placa legible ésta deberá ser entregada).",
                    "4. El Representante Legal deberá entregar su Vigencia Poder original y copia (no mayor a 30 días de antigüedad) acreditando sus facultades.",
                    "5. Los apoderados deberán presentar la Vigencia Poder original (no mayor a 30 días de antigüedad) y entregar copia de ésta más una Carta Poder original Legalizada, indicando el N° de la placa y copia legalizada del DNI del representante legal."
                ]
            },
            duplicadoTerceraPlaca: {
                parrafo: "DUPLICADO DE TERCERA PLACA:",
                lista: [
                    "1. Boleta Informativa (Original) del propietario actual emitida por la Sunarp.",
                    "2. DNI (Original y copia) de la persona que recoge.",
                    "3. Denuncia policial original o copia certificada por la PNP por perdida, robo o deterioro.",
                    "4. El Representante Legal deberá entregar su Vigencia Poder original y copia (no mayor a 30 días de antigüedad) acreditando sus facultades.",
                    "5. Los apoderados deberán presentar la Vigencia Poder original (no mayor a 30 días de antigüedad) y entregar copia de ésta más una Carta Poder original Legalizada, indicando el N° de la placa y copia legalizada del DNI del representante legal."
                ]
            }
        }
    }
}
