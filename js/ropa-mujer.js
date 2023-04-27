const productos = [
  {
    id: "remera-mujer-01",
    titulo:"Remeron Gris Liso",
    imagen: "./Imagenes/Imagenes-mujeres/remera-mujer-01.jpg",
    categorias:{
      nombre:"Remeras",
      id: "remeras",

    },
    precio: 900     
  },
  {
      id: "remera-mujer-02",
      titulo:"Remera Royalty Blanca",
      imagen: "./Imagenes/Imagenes-mujeres/remera-mujer-02.jpg",
      categorias:{
        nombre:"Remeras",
        id: "remeras",

      },
      precio: 1200     
  },
  {
      id: "remera-mujer-03",
      titulo:"Remera Karma Negra",
      imagen: "./Imagenes/Imagenes-mujeres/remera-mujer-03.jpg",
      categorias:{
        nombre:"Remeras",
        id: "remeras",

      },
      precio: 1500     
  },
  {
      id: "remera-mujer-04",
      titulo:"Remera Packstreet Blanca",
      imagen: "./Imagenes/Imagenes-mujeres/remera-mujer-04.jpg",
      categorias:{
        nombre:"Remeras",
        id: "remeras",

      },
      precio: 1100     
  },
  {
      id: "pantalon-mujer-01",
      titulo:"Pantalon Jogging Blanco",
      imagen: "./Imagenes/Imagenes-mujeres/pantalon-mujer-01.jpg",
      categorias:{
        nombre:"Pantalones",
        id: "pantalones",

      },
      precio: 2000     
  },
  {
      id: "pantalon-mujer-02",
      titulo:"Pantalon de Vestir Negro",
      imagen: "./Imagenes/Imagenes-mujeres/pantalon-mujer-02.jpg",
      categorias:{
        nombre:"Pantalones",
        id: "pantalones",

      },
      precio: 2500     
  },
  {
      id: "pantalon-mujer-03",
      titulo:"Jean Oversize",
      imagen: "./Imagenes/Imagenes-mujeres/pantalon-mujer-03.jpg",
      categorias:{
        nombre:"Pantalones",
        id: "pantalones",

      },
      precio: 1000     
  },
  {
      id: "pantalon-mujer-04",
      titulo:"Jean Oversize Negro",
      imagen: "./Imagenes/Imagenes-mujeres/pantalon-mujer-04.jpg",
      categorias:{
        nombre:"Pantalones",
        id: "pantalones",

      },
      precio: 1000     
  },
  {
      id: "zapatilla-mujer-01",
      titulo:'Adidas "Ozweego"',
      imagen: "./Imagenes/Imagenes-mujeres/zapatilla-mujer-01.jpg",
      categorias:{
        nombre:"Zapatillas",
        id: "zapatillas",

      },
      precio: 1000     
  },
  {
      id: "zapatilla-mujer-02",
      titulo:'Adidas "Nitro"',
      imagen: "./Imagenes/Imagenes-mujeres/zapatilla-mujer-02.jpg",
      categorias:{
        nombre:"Zapatillas",
        id: "zapatillas",

      },
      precio: 1000     
  },
  {
      id: "zapatilla-mujer-03",
      titulo:'Vans "Old School"',
      imagen: "./Imagenes/Imagenes-mujeres/zapatilla-mujer-03.jpg",
      categorias:{
        nombre:"Zapatillas",
        id: "zapatillas",

      },
      precio: 1000     
  },
  {
      id: "zapatilla-mujer-04",
      titulo:'Nike "Jordan High"',
      imagen: "./Imagenes/Imagenes-mujeres/zapatilla-mujer-04.jpg",
      categorias:{
        nombre:"Zapatillas",
        id: "zapatillas",

      },
      precio: 1000     
  }

];  

let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}


function agregarAlCarrito (e) {

  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)){
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  const botonPulsado = document.getElementById(idBoton);
  botonPulsado.innerText = "Agregado";
  setTimeout(() => {
    botonPulsado.innerText = "Agregar";
  }, 2000);

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito (){
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0 );
  numerito.innerText = nuevoNumerito;
}

/*----------------------------------MENU HAMBURGUESA---------------------------*/

const navBar = document.querySelector("#nav-bar");
const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");

abrirMenu.addEventListener("click", ()=> {
  navBar.classList.add("visible");
})

cerrarMenu.addEventListener("click", funCerrarMenu);

function funCerrarMenu (){ 
  navBar.classList.add("invisible");
  setTimeout(() => {
    navBar.classList.remove("invisible");
    
  }, 1000);
  navBar.classList.remove("visible");
};