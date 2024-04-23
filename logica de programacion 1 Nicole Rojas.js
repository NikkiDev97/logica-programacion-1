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
}

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
}

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

function ordenarMenorAMayor(myArray)
{
   menorAMayor = myArray.sort(function(a, b){return a - b})
   console.log("El arreglo ordenado de menor a mayor es: " + menorAMayor) 
}
function ordenarMayorAMenor(myArray)
{
   mayorAMenor = myArray.sort(function(a, b){return b - a})
   console.log("El arreglo ordenado de mayor a menor es: " + mayorAMenor)
}

cantidadMayor(cantidades)
cantidadMenor(cantidades)
cantidadMedio(cantidades)

if(medio === mayor && medio === menor)
{
    console.log("Las 3 cantidades en el arreglo son iguales, no se pueden ordenar de mayor a menor ni de menor a mayor.")
}
else
{
    console.log("La cantidad mayor del arreglo es: " + mayor)   
    console.log("La cantidad menor del arreglo es: " + menor)    
    if(medio === mayor || medio === menor)
    {
        console.log("No hay una cantidad que sea intermedia porque hay 2 números que son iguales en el arreglo.")
    }
    else 
    {
        console.log("La cantidad intermedia del arreglo es: " + medio)
    }
    ordenarMenorAMayor(cantidades)
    ordenarMayorAMenor(cantidades)
}
