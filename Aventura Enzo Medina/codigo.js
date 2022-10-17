let nombre = prompt("Elija el nombre de su aventurero");
console.log("Bienvenido aventurero "+nombre);
alert("Bienvenido aventurero "+nombre);
let clase=prompt("Elige una clase para tu aventurero, puedes inventar una si quieres\nAlgunos ejemplos, guerrero, mago, barbaro");
if(clase == "guerrero"||"mago"||"barbaro"){
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
        precio:20,
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
        precio:15
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
            console.log(Equipo)
            break;
        default:
            console.log("Eso no esta en la lista!");
            break;
    }
    equipo=prompt("Consultar precio de equipo\nOpciones:pocion, espada, escudo, carpa, daga, capucha, comida. s para detenerse")
}
function sumaProductos(){
    let producto1=parseInt(prompt("Ingresa el precio del primer producto"))
    let producto2=parseInt(prompt("Ingresa el precio del segundo producto"))
    let producto3=parseInt(prompt("Ingresa el precio del tercer producto"))
    let producto4=parseInt(prompt("Ingresa el precio del cuarto producto"))
    let producto5=parseInt(prompt("Ingresa el precio del quinto producto"))
    let totalAPagar = producto1+producto2+producto3+producto4+producto5
    console.log("El total de oro a pagar es "+totalAPagar)
    if(totalAPagar>=101){
        alert("No tienes oro suficiente, ve a completar aventuras o algo para comprar esto.")
    }else{
        alert("Gracias por su compra, ahora puede ir a cazar monstruos")
    }
}
sumaProductos()








