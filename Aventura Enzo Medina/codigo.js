let objetos = "";
let oro = 5;
let vivo;

let nombre = prompt("Elija el nombre de su aventurero");
console.log("Bienvenido aventurero " + nombre);
alert("Bienvenido aventurero " + nombre);
let camino = prompt(
    "Donde quieres iniciar tu aventura? " +
    nombre +
    " \nOpciones: bosque, ciudad, lago"
);
//Camino del bosque
if ((camino = "bosque")) {
alert(
    "Llegas a un bosque tetrico y oscuro, sientes que algo podria atacarte en cualquier momento. \n Ves delante tuyo 2 caminos."
);
let caminoBosque = prompt("En que camino te aventuras, derecha o izquierda");
}
if ((caminoBosque = "izquierda")) {
  //Camino izquierda del bosque
alert(
    "Te adentras mas profundo en el bosque, al cabo de unos minutos un tronco cae de un arbol, es una trampa!"
);
}
if (objetos != "Pocion") {
alert(
    "El tronco te golpea y mueres. Si tan solo tuvieras mejores reflejos :("
);
    debugger
}
if ((objetos = "Pocion")) {
alert(
    "Ni uno ni mil troncos son suficientes para superar tus reflejos despues de tomar esa pocion. \nSigues tu camino por el bosque hasta encontrarte con unos pequeños hongos al costado del camino"
);
let hongos = prompt(
    "Comer hongo (c), ignorarlo(i) o tomarlo para despues (d)"
);
}
if ((hongos = "c")) {
alert(
    "Tu estomago empieza a doler, tu vista se pone borrosa y te caes al piso inconsiente"
);
vivo = "false";
}
if ((hongos = "i")) {
alert(
    "Al final del camino ves una pequeña cueva. \nAl acercarte podes notar que hay ruidos dentro, como de alguien comiendo"
);
let cueva = prompt("Quieres adentrarte en la cueva? (si;no)");
}
if ((cueva = "si")) {
alert(
    "Al entrar en la cueva todo esta oscuro, cuando tus ojos al fin se acostumbran a la oscuridad ves una pequeña criatura verde, al mirarla ella tambien se percata de tu presencia y se acerca corriendo a atacarte"
);
}
if ((objetos = "espada")) {
alert(
    "Logras sacar tu espada justo a tiempo para defenderte, tus agudos reflejos te lo ponen demasiado facil.\nEn cuestion de segundos logras desarmar al pequeño monstruo verde y matarlo.\nDebe ser el problema del que la gente de la ciudad estuvo hablando hace unos dias"
);
camino = prompt(
    "Al terminar tu trabajo decides tomar otro camino, puedes volves al bosque y tomar el camino (derecha), puedes ir a la (ciudad) o aventurarte en el (lago) "
);
}

if ((vivo = "false")) {
alert("Estas muerto, prueba de nuevo recargando la pagina");
}
