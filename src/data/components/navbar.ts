export const sectionsLinks:LinkSections[] = [
    {
        name:"Inicio",
        path:"https://www.placas.pe/Index.aspx",
        description:"Página Principal"
    },
    {   
        name:"Orientación",
        path:"/orientacion",
        description:"Trámites, consultas y puntos de entrega",
        subSections:[
            {
                name:"Tipos de Placas",
                path:"/orientacion/tipos-de-placas"
            },
            {
                name:"Procedimientos y Requisitos",
                path:"/orientacion/procedimientos-y-requisitos",
            },
            {
                name:"Canales de atención",
                path:"/orientacion/canales-de-atencion",
            },  
            {
                name:"Bancos Afilidos",
                path:"/orientacion/bancos-afilidados",
            },
            {
                name:"Oficinas Registrales",
                path:"/orientacion/oficinas-registrales",
            },
            {
                name:"Puntos de Entrega",
                path:"/orientacion/puntos-de-entrega",
            },
            {
                name:"Base Legal",
                path:"/orientacion/base-legal",
            },
            {
                name:"Preguntas Frecuentes",
                path:"/orientacion/preguntas-frecuentes",
            },
             
        ]
    },
    {
        name:"Multimedia",
        path:"/multimedia",
        description:"Videos Instructivos"
    },
    {
        name:"Novedades",
        path:"/novedades",
        description:"Página Principal",
       
    },
    {
        name:"Alerta Vehicular",
        path:"/alerta-vehicular",
        description:"Instructivo de Alerta Vehicular"
    },
    {
        name:"Contacto",
        path:"/contacto",
        description:"Atención al cliente"
    },
]

interface LinkSections{
    name:string
    path:string
    description:string
    subSections?: subSections[]
}

interface subSections{
    name:string
    path:string
}