let productoLoMasVendido = [ {
    "imagen":"./assets/img/Mochila 1.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 2.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 3.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 4.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 5.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 6.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 7.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 8.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 9.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

},
{
    "imagen":"./assets/img/Mochila 10.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mochila Xtrem",
    "precio": "$18.990"

}]

let productosHogar = [ {
    "imagen":"./assets/img/hogar 1.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Mesa de centro",
    "precio": "$18.990"
}]

let productosCocina = [ {
    "imagen":"./assets/img/Bateria 1.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Juego de ollas color celeste",
    "precio": "$18.990"
},
{
    "imagen":"./assets/img/Bateria 2.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Juego de ollas color Pink",
    "precio": "$18.990"
},
{
    "imagen":"./assets/img/Bateria 3.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Juego de ollas color Beige",
    "precio": "$18.990"
},]

let productosDormitorio = [ {
    "imagen":"./assets/img/Plumon Cannon 1.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Plumon Cannon + Funda almohadas",
    "precio": "$18.990"
},
{
    "imagen":"./assets/img/Plumon Cannon 2.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Plumon Cannon + Funda almohadas",
    "precio": "$18.990"
},
{
    "imagen":"./assets/img/Pack almoadas 1.jpeg",
    "titulo": "Oferta!",
    "descripcion": "Pack 2 almohadas",
    "precio": "$18.990"
}]

const loMasVendido = document.getElementById("itemLoMasVendido");
const hogar = document.getElementById("itemHogar");
const cocina = document.getElementById("itemCocina");
const dormitorio = document.getElementById("itemDormitorio");

function crearTarjeta(producto) {
    return `<div class="tarjeta">
                <img class="tarjeta-img-top" src="${producto.imagen}" alt="${producto.descripcion}">
                <div class="tarjeta-cuerpo">
                    <h5 class="tarjeta-titulo">${producto.titulo}</h5>
                    <p class="tarjeta-texto">${producto.descripcion}</p>
                    <p class="tarjeta-texto">${producto.precio}</p>
                    <a href="#" class="boton boton-primario">Ver mas</a>
                </div>
            </div>`;
}

function mostrarProductos() {
    loMasVendido.innerHTML = productoLoMasVendido.map(crearTarjeta).join("");
    hogar.innerHTML = productosHogar.map(crearTarjeta).join("");
    cocina.innerHTML = productosCocina.map(crearTarjeta).join("");
    dormitorio.innerHTML = productosDormitorio.map(crearTarjeta).join("");
}

mostrarProductos();



    



    
