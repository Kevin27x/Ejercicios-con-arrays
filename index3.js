//1. PUSH: Inserta elementos dentro de un array
let arreglo = ["a", "b", "c"];
console.log(arreglo);
arreglo.push("d","e","f","g","h");
console.log("con push: ",arreglo);
//2. POP: Elimina el último elemento del array
arreglo.pop()
console.log("con pop: ", arreglo)
//3.Shift: Elimina el primer elemento
arreglo.shift()
console.log("con shift: ", arreglo)
//4.Split: Transforma una cadena a un arreglo. Se especifica el carácter a usar para separar la cadena
let cadena = "hola soy una cadena y me transformaré en arreglo";
let arregloSplit = cadena.split(" ")
console.log("método split :", arregloSplit)
//5. Join: Transforma un arreglo a cadena
let arregloJoin = ["hola","que","tal"];
let arregloaCadena = arregloJoin.join(" ");
console.log(arregloaCadena)
//6. Map: Aplica una función a cada elemento del arreglo. NO MODIFICA EL ARRAY ORIGINAL, SINO QUE GENERA UNO NUEVO
let arregloMap = ["A","B","C","D"]
console.log("Mapeado del arreglo: ")
arregloMap.map(function (elemento, index) {
    console.log(elemento, index)
    console.log(typeof(elemento), typeof(index))
});
//También permite modificar los elementos y devolver un nuevo arreglo con la misma longitud q el original
console.log("Arreglo 1 sin modificar: ",arregloMap)
let arreglomap2 = [1, 2, 3, 4, 5, 6]
let arregloX2 = arreglomap2.map( x => x*2);
console.log("Arreglo 2: ", arregloX2)
//Es ideal para extraer valores de atributos en un conjunto de objetos agrupados en un array
let arreglo3 = [
    {nombre: "Pedro", edad: 23},
    {nombre: "Juan", edad: 25},
    {nombre: "kevin", edad: 27}
];
let edadesArreglo = arreglo3.map( x => x.edad);
console.log(edadesArreglo)

