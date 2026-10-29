//Datos para Filtrar//

//Primer Filtro: productos//

const dwmike = [
    
//proyectos//
{id: 1, name:"PS4", image: "img/An-image-of-the-PS4-Pro.jpg", gender: "productos" ,description: "La PS4 es una gran forma de entrner a los niños y mejorar sus reflejos mano ojo,ademas de pasar la bien y jugar con amigos y familiares ditintos juegos de alta calidad."},
{id: 2, name:"Control Forza-horizon", image: "img/control-forza-horizon-6-edicion-limitada-xbox-series-x.jpg", gender: "productos" ,description: "Control con undiseño unico del juego Forza-Horizon compatible con consolas actuales de xbox."},
{id: 3, name:"Control DE PS5", image: "img/control-playstation-5-dualsense-ps5.jpg", gender: "productos" ,description: "Control de la PS5 compatible con consolas recientes de PLay Station."},
{id: 4, name:"Consola XBOX series s", image: "img/images (1).jpg", gender: "productos" ,description: "La Xbox Series S es una gran forma de entrner a los niños y mejorar sus reflejos mano ojo,ademas de pasar la bien y jugar con amigos y familiares ditintos juegos de alta calidad."},
{id: 5, name:"Consola XBOX series x", image: "img/images (2).jpg", gender: "productos" ,description: "La Xbox Series X es una gran forma de entrner a los niños y mejorar sus reflejos mano ojo,ademas de pasar la bien y jugar con amigos y familiares ditintos juegos de alta calidad."},

//unete//
{id: 6, name:"Audifonos", image:"img/images (3).jpg", gender:"unete", description:"Audifonos de diadema de alta calidad con la opcion de silenciar el ruido externo y como para su uso ala momento de usarlos."},
{id: 7, name:"Control", image:"img/889842875560-control-xbox-rosa-1-247x305.jpg", gender:"unete", description:"Control de consolas con el puedes usarolo para mover a tu personajes dependeindo del juego."},
{id: 8, name:"Pack comleto para Play", image:"img/images (4).jpg", gender:"unete", description:"Incluye controles de play station 5, audifonos cargador de controles, lentes de realidad virtual y un proyector."},
{id: 9, name:"Reposador para control", image:"img/images (5).jpg", gender:"unete", description:"Reposador para mando en forma de gatito." },
];

// Obtener los contenedores y botones del DOM
const xxContainer = document.getElementById("distribucion-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwmikeToRender = [];
    if (genero === "all") {
        dwmikeToRender = dwmike;
    } else {
        dwmikeToRender = dwmike.filter(Dwmike => Dwmike.genero === genero);
    }


    }
