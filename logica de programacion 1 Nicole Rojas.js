//Práctica de Comparación de Números
//Crear un programa en PSeInt o JavaScript que realice lo siguiente:
//Debe solicitar al usuario 3 números y guardarlos.
//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
//Debe imprimir los números ordenados de mayor a menor, y de menor a mayor.
//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje diciendo que los números son iguales.

let cantidades = []
for(i = 0; i < 3; i++)
{
    posicion = i+1
    entrada = Number(prompt("Ingrese la cantidad " + posicion + ":\n"))
    while (isNaN(entrada) === true)
    {
        entrada = Number(prompt("Debe ingresar un número.\nIngrese la cantidad " + posicion + ":\n"))
    }
    cantidades.push(entrada)
}
let mayor = cantidades[0]
function cantidadMayor(myArray)
{
    for(j = 1; j < myArray.length; j++)
    {
        if(myArray[j] > mayor)
        {
             mayor = myArray[j]
        }
    }
    console.log("La cantidad mayor del arreglo es: " + mayor)    
}
cantidadMayor(cantidades)
let menor = cantidades[0]
function cantidadMenor(myArray)
{
    for(j = 1; j < myArray.length; j++)
    {
        if(myArray[j] < menor)
        {
             menor = myArray[j]
        }
    }
    console.log("La cantidad menor del arreglo es: " + menor)    
}
cantidadMenor(cantidades)
let medio = cantidades[0]
function cantidadMedio(myArray)
{
    for(j = 1; j < myArray.length; j++)
    {
        if(myArray[j] !== menor && myArray[j] !== mayor)
        {
             medio = myArray[j]
        }
    }

}
cantidadMedio(cantidades)
if(medio===mayor || medio===menor)
{
    console.log("No se puede determinar la cantidad del medio. Hay números que son iguales en el arreglo")
}
else 
{
    console.log("La cantidad del medio en el arreglo es: " + medio)    
}
function ordenarMenorAMayor (numbers)
{
     console.log("El arreglo ordenado de menor a mayor es: " + numbers.sort(function(a, b){return a - b}))
}
ordenarMenorAMayor (cantidades)
function ordenarMayorAMenor(numbers)
{
     console.log("El arreglo ordenado de mayor a menor es: " + numbers.sort(function(a, b){return b - a}))
}
ordenarMayorAMenor(cantidades)
