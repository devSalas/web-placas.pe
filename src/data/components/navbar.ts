export const sectionsLinks:LinkSections[] = [
    {
        name:"Inicio",
        path:"/inicio",
        description:"Página Principal"
    },
    {   
        name:"Orientación",
        path:"/orientación.html",
        description:"Trámites, consultas y puntos de entrega"
    },
    {
        name:"Multimedia",
        path:"/Multimedia",
        description:"Videos Instructivos"
    },
    {
        name:"Novedades",
        path:"/inicio",
        description:"Página Principal",
        subSections:[
            {
                name:"Tipos de Placas",
                path:"/tipo-de-placas"
            },
            {
                name:"Procedimientos y Requisitos",
                path:"/procedimientos-y-requisitos",
            },
            {
                name:"Canales de atención",
                path:"/inicio",
            },
            {
                name:"Bancos Afilidos",
                path:"/bancos-afilidados",
            },
            {
                name:"Oficinas Registrales",
                path:"/oficinas-registrales",
            },
            {
                name:"Puntos de Entrega",
                path:"/puntos-de-entrega",
            },
            {
                name:"Base Legal",
                path:"/Preguntas Frecuentes",
            },
             
        ]
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