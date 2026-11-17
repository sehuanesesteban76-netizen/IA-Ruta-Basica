Reto 1: Programa a una persona

- Descripción

En este reto desarrolle un algoritmo en JavaScript que permite ordenar tres numeros de menor a mayor.
El programa debe funcionar con diferentes numeros, incluyendo valores repetidos.

- Herramientas utilizadas

- Visual Studio Code
- JavaScript
- Node.js

- Funcionamiento del algoritmo

1. Declare tres variables que representan las tarjetas con numeros.
2. Cree una variable auxiliar para guardar temporalmente un valor.
3. Compare la primera tarjeta con la segunda. Si la primera es mayor, intercambiamos sus valores.
4. Compare la segunda tarjeta con la tercera. Si la segunda es mayor, intercambiamos sus valores.
5. Compare nuevamente la primera tarjeta con la segunda para asegurarnos de que esten ordenadas.
6. Mostre los tres numeros ordenados en la consola.

Utilice condiciones if para realizar las comparaciones y decidir cuando intercambiar los valores.

- Pruebas del programa

    - Prueba 1

    * Datos de entrada:

    7, 2, 5


    * Proceso:

    - Primera comparación: 7 > 2. Se intercambian.
    - Segunda comparación: 7 > 5. Se intercambian.
    - Tercera comparación: 2 > 5. No se intercambian.

    * Resultado esperado y obtenido:

    2, 5, 7
    Correcto.

    - Prueba 2

    * Datos de entrada:

    2, 2, 9

    * Proceso:

    - Primera comparación: 2 > 2. No se intercambian.
    - Segunda comparación: 2 > 9. No se intercambian.
    - Tercera comparación: 2 > 2. No se intercambian.

    * Resultado esperado y obtenido:

    2, 2, 9
    Correcto.

- Instrucción ambigua

* Instrucción inicial:
Organiza los números de menor a mayor.

Esta instrucción es ambigua porque no explica como realizar las comparaciones ni cuando intercambiar las tarjetas.

- Instrucción mejorada:
Compara la primera tarjeta con la segunda, si el numero de la primera es mayor que el de la segunda, intercambia sus valores. De lo contrario, conserva sus posiciones.

De esta manera, la persona que ejecuta el algoritmo sabe exactamente qué debe hacer.

- Como ejecutar el programa

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir la terminal.
3. Ejecutar el siguiente comando:

node reto1.js

4. Observar el resultado en la consola.

Para probar otros numeros se modifica los valores iniciales de las tres variables y se ejecuta nuevamente el programa.

- Conclusión

Con este reto aprendi a ordenar tres numeros utilizando comparaciones y condiciones if y todo en un algoritmo.

Tambien comprendi la importancia de crear instrucciones claras y especificas, ya que un computador ejecuta lo que le indicamos y no interpreta instrucciones ambiguas.

La variable auxiliar me permitió intercambiar los valores sin perder la información original,, me funciono y lo use como un comodin.