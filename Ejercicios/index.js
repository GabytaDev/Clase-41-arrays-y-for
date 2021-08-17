// Números positivos

// Dados un array de 10 números, informar cuantos de ellos son positivos.

//Pseudocodigo

// Desde I = 0 hasta array.lenght
// declarar variable como nuemero [I]
// si numero > 5
//mostrar en consola 
//fin Desde I

// const numero = [1, -2, 66, 22, 14, 26, -8, 99, 6, -23]

// const funcionSolicitada = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const numero = array[i]
//         if (numero > 0) {
          
//         }
//     }
// }
// console.log(numero)

// son equivalentes, lo unico que cambia es que aca declaro una variable:


// const numerosPositivos = (numero) => {
//   for (let i = 0; i < numero.length; i++) {
//     const numero = array[i]
//     if (numero > 1) { 
//         console.log(numero)
//     }
//   }
// }
// console.log(numero)

// Ejercicio 3
// Promedio de promoción

// Dado un array de 10 numeros, donde cada número representa la nota de una alumna, informar el promedio
//  tomando solo aquellas que tienen una nota mayor a 7.

//Desde I = 0 hasta array.lenght
// declarar variable nota como numero [I]
// si (numero > 7) Entonces
// guaradar los mayores a 7 y realizar promedio
//mostar en consola el promedio 
// Fin desde I

// const notas = [1, 2, 66, 22, 14, 26, 8, 99, 6, 23]

// const promedio = () => {

// }

//     let suma = 0
//     for(let i = 0; i<notas.length;i++){
//         suma+=notas[i];
//         console.log(suma)
//     }
//     promedio = suma/3



// const notas = [10,9,7]

// const promedioAlumna = (notas) => {

//     let suma = 0

//     for(let i = 0; i<notas.length;i++){
//         suma+=notas[i];
//         console.log(suma)
//     }
//     promedio = suma/3

//     return promedio
// }

// console.log(promedioAlumna(notas))


//Promedio de un curso 2

// Dado un array de cualquier cantidad de numeros, donde cada número representa la nota de una alumna, 
// retornar el promedio final de nota del curso. (Nota: recordá que podes saber la longitud de un array con array.length)

// Promedio de promoción

// Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el 
// promedio tomando solo aquellas que tienen una nota mayor a 7.



// const notas = [10, 9, 6, 4, 7, 8, 5, 10, 8, 7]

// const promedioPromocion = (notas) =>{
//     let notasMayoresASiete = 0   
//     let suma = 0
//     for(let i = 0; i<notas.length; i++){
//         if (notas[i]> 7){
//             notasMayoresASiete++

//             suma+=notas[i] 

//             console.log(suma)

//             console.log(notasMayoresASiete)
//         } 
//         promedio = suma/notasMayoresASiete
//         // console.log(promedio)
//         }
        
//         return promedio
// }
// console.log(promedioPromocion(notas))

//Promedio de promoción

//Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el promedio tomando solo aquellas que tienen una nota mayor a 7.

// notas = [5,10,9,3,8,7,5,4,8,2]

// const promedio = (notas) =>{
// let notasAprobadas = 0
// let contador = 0

// for (let index = 0; index < notas.length; index++) {

//   if (notas[index] >= 7){
//     notasAprobadas += notas[index]
//     contador++
//   }
  
// }
// return notasAprobadas / contador

// }

// console.log(promedio(notas))
// Temperatura más alta

// Dado un array de cualquier longitud, compuesto por numeros que representan temperaturas de una región, 
// se requiere retornar cuál fue la mayor temperatura.

// const temperaturas = [10, 9, 6, 14, 37, 8, 25, 15, 8, 27]

// const mayorTemperarura = (temperaturas) =>{
//     let numeroMasGrande = 0

//     for (let i = 0; i < temperaturas.length; i++) {
//        if(numeroMasGrande < temperaturas[i]){  //si la var nummas grande es menor a la posicion
//         numeroMasGrande = temperaturas [i] //guarda en la var nummas grande el valor de esa posicion
//        }
//     }
//     return numeroMasGrande
    
// }
// console.log(mayorTemperarura(temperaturas))

// Promedio del curso 1

//Dado un array de 3 numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso.

// const notas = [7,10,5]

// const promedio = (notas) => {

// let sumaDeNotas = 0
// let contador = 0

// for (let index = 0; index < notas.length; index++) {
// sumaDeNotas += notas[index]
// contador++
  
// }
// return sumaDeNotas / contador

// }

// console.log(promedio(notas))



//Matrices (arreglos bidimensionales)//
//Mostrar en consola: Dado un array bidimensional, compuesto de dos arrays con 5 nombres cada uno, mostrar cada uno de los nombres en consola.
// nombres = [["naty", "mecha", "eli", "gaby", "mika"],["caro", "rocio", "maria", "agustina", "ana"]]

// console.log(nombres[0])
// console.log(nombres[1])


//Mostrar en consola 2 : Dado un array bidimensional, compuesto de dos arrays con 5 numeros cada uno, mostrar en consola solo los numeros mayores a 10.

const numeros = [
  [1, 5, 12, 9, 6],
  [8, 4, 2, 88, 9],
  [8, 15, 2, 88, 9],
];

const numerosMayoresA10 = (numeros) => {
  for (let index = 0; index < numeros.length; index++) {
    let array = numeros[index]; //guardo en array la posicion 

    for (let j = 0; j < array.length; j++) { 
      if (array[j] > 10) {
        console.log(array[j]);
      }
    }
  }
};
numerosMayoresA10(numeros);

// Alumna más grande

// Dado un array bidimensional compuesto de dos arrays de 5 elementos cada uno, donde el primero esta compuesto de nombres y el segundo de edades,
// retornar el nombre de la persona con la mayor edad.

nombresAlumnas = [
    ["naty", "mecha", "eli", "gaby", "mika"],
    [1, 5, 12, 9, 6]]

const personaMayorEdad = (nombresAlumnas) => {
    let mayorEdad = 0
    let posicionNombre = 0

    for (let index = 0; index < nombresAlumnas[1].length; index++) {
        
        if(nombresAlumnas[1][index] > mayorEdad){
            mayorEdad = nombresAlumnas[1][index]

            posicionNombre = index
        } 
    }
    return ("el nombre es " + nombresAlumnas[0][posicionNombre] + " y la edad es " + nombresAlumnas[1] [posicionNombre])
    
  
}

console.log(personaMayorEdad(nombresAlumnas))
 
