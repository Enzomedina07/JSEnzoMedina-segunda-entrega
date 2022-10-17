let nombre = prompt("Elija el nombre de su aventurero");
console.log("Bienvenido aventurero "+nombre);
alert("Bienvenido aventurero "+nombre);
let clase=prompt("Elige una clase para tu aventurero, puedes inventar una si quieres\nAlgunos ejemplos, guerrero, mago, barbaro");
if((clase == "guerrero")||(clase == "barbaro")||(clase == "mago")){
    console.log("Un clasico me gusta");
    console.log("Eres un "+clase);
}else{
    console.log("Interesante eleccion, no la habia pensando");
    console.log("Eres un "+clase);
}
alert("Este es el nacimiento de "+nombre+" el "+clase);
alert("Necesitaras equipamiento para comenzar tu aventura.\nVoy a darte una lista con todas las cosas que tenemos a la venta para que puedas comenzar.");
let equipo = prompt("Lista de equipo, pocion, espada, escudo, carpa, daga.\nCuentas con 100 monedas de oro para comprar, compra sabiamente, escribe el nombre del objeto para conocer sus precios. escribe s para dejar de preguntar\nPuedes escribir (todos) para conocer todos los precios");

//Objetos
//funcion constructora
const Equipo = [
    {
        nombre: "pocion",
        precio:200,
    },
    {
        nombre: "espada",
        precio:40
    },
    {
        nombre:"escudo",
        precio:30
    },
    {
        nombre:"carpa",
        precio:150
    },
    {
        nombre:"daga",
        precio:25
    },
]
while(equipo!="s"){
    switch (equipo){
        case "pocion":
            console.log("El precio de la pocion es: "+Equipo[0].precio+" de oro");
            break;
        case "espada":
            console.log("El precio de la espada es: "+Equipo[1].precio+" de oro");
            break;
        case "escudo":
            console.log("El precio del escudo es: "+Equipo[2].precio+" de oro");
            break;
        case "carpa":
            console.log("El precio de la carpa es: "+Equipo[3].precio+" de oro");
            break;
        case "daga":
            console.log("El precio de la daga es: "+Equipo[4].precio+" de oro");
            break;
        case "todos":
            Equipo.forEach((equipo) => console.log(equipo.nombre+":"+equipo.precio))
            break;
        default:
            console.log("Eso no esta en la lista!");
            break;
    }
    equipo=prompt("Consultar precio de equipo\nOpciones: pocion, espada, escudo, carpa, daga, todos. s para detenerse")
}


const objetoComprable = Equipo.filter((objeto) => objeto.precio <100);
objetoComprable.forEach((equipo)=>console.log("Puedes comprar:\n"+equipo.nombre))
let compra=(prompt("Deseas comprar los objetos?\n(si,no, daga, escudo, espada, daga y escudo, daga y espada, escudo y espada)"))
if(compra=="si"){
    const inventario=["daga","escudo","espada"]
    console.log("Posees: "+inventario)
    console.log("Estas listo para una aventura, deberias probar primero tu arma si es que compraste una")
    let dado = Math.round(Math.random()*19+1);
console.log("Golpeas con tu arma el munieco de practica y le haces: "+dado+" de danio")
}if(compra=="no"){
    const inventario=["vacio"]
    console.log("Tu inventario esta "+inventario+"\n Deberias comprar un arma")
}if(compra=="daga"){
    const inventario=["daga"]
    console.log("Posees: "+inventario)
    console.log("Estas listo para una aventura, deberias probar primero tu arma si es que compraste una")
    let dado = Math.round(Math.random()*19+1);
console.log("Golpeas con tu arma el munieco de practica y le haces: "+dado+" de danio")
}if(compra=="espada"){
    const inventario=["espada"]
    console.log("Posees: "+inventario)
    console.log("Estas listo para una aventura, deberias probar primero tu arma si es que compraste una")
    let dado = Math.round(Math.random()*19+1);
console.log("Golpeas con tu arma el munieco de practica y le haces: "+dado+" de danio")
}if(compra=="escudo"){
    const inventario=["escudo"]
    console.log("Posees: "+inventario+"\n Deberias comprar un arma")
}if(compra=="daga y escudo"){
    const inventario=["daga","escudo"]
    console.log("Posees: "+inventario)
    console.log("Estas listo para una aventura, deberias probar primero tu arma si es que compraste una")
    let dado = Math.round(Math.random()*19+1);
console.log("Golpeas con tu arma el munieco de practica y le haces: "+dado+" de danio")
}if(compra=="daga y espada"){
    const inventario=["daga","espada"]
    console.log("Posees: "+inventario)
    console.log("Estas listo para una aventura, deberias probar primero tu arma si es que compraste una")
    let dado = Math.round(Math.random()*19+1);
console.log("Golpeas con tu arma el munieco de practica y le haces: "+dado+" de danio")
}if(compra=="escudo y espada"){
    const inventario=["escudo","espada"]
    console.log("Posees: "+inventario)
    console.log("Estas listo para una aventura, deberias probar primero tu arma si es que compraste una")
    let dado = Math.round(Math.random()*19+1);
console.log("Golpeas con tu arma el munieco de practica y le haces: "+dado+" de danio")
}






