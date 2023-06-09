const productos = [
    {
      id: "remera-01",
      titulo:"Remera Kritikal Roja",
      imagen: "./Imagenes/Imagenes-hombres/remera-01.jpg",
      categorias:{
        nombre:"Remeras",
        id: "remeras",

      },
      precio: 7590     
    },
    {
        id: "remera-02",
        titulo:"Remera Oversize Negra",
        imagen: "./Imagenes/Imagenes-hombres/remera-02.jpg",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 7590     
    },
    {
        id: "remera-03",
        titulo:"Remera Oversize Blanca",
        imagen: "./Imagenes/Imagenes-hombres/remera-03.jpg",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 7590     
    },
    {
        id: "remera-04",
        titulo:"Remera Onasaez Blanca",
        imagen: "./Imagenes/Imagenes-hombres/remera-04.jpg",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 7590     
    },
    {
        id: "pantalon-01",
        titulo:"Pantalone Largo Puma",
        imagen: "./Imagenes/Imagenes-hombres/pantalon-01.jpg",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 8790     
    },
    {
        id: "pantalon-02",
        titulo:"Pantalon Jogging Largo",
        imagen: "./Imagenes/Imagenes-hombres/pantalon-02.jpg",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 8790     
    },
    {
        id: "pantalon-03",
        titulo:"Bermuda Oversize",
        imagen: "./Imagenes/Imagenes-hombres/pantalon-03.jpg",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 6790     
    },
    {
        id: "pantalon-04",
        titulo:"Bermuda Jean",
        imagen: "./Imagenes/Imagenes-hombres/pantalon-04.jpg",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 6790     
    },
    {
        id: "zapatilla-01",
        titulo:'Nike "Air Force 1"',
        imagen: "./Imagenes/Imagenes-hombres/zapatilla-01.jpg",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 12590     
    },
    {
        id: "zapatilla-02",
        titulo:'Nike "Dunk"',
        imagen: "./Imagenes/Imagenes-hombres/zapatilla-02.jpg",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 12590     
    },
    {
        id: "zapatilla-03",
        titulo:'Vans "Classic"',
        imagen: "./Imagenes/Imagenes-hombres/zapatilla-03.jpg",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 10590     
    },
    {
        id: "zapatilla-04",
        titulo:'Puma "Rider"',
        imagen: "./Imagenes/Imagenes-hombres/zapatilla-04.jpg",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 10590     
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
const btnmenu = document.querySelectorAll(".menu-item");

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

btnmenu.forEach(element => {
  element.addEventListener("click", ()=>{
    funCerrarMenu();
  })
});