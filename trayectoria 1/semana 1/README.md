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


Reto 2 - Entrena a un clasificador humano

- Descripcion

En este reto aprendi a identificar mensajes que pueden ser sospechosos y diferenciarlos de los mensajes normales.
Para hacerlo revise 6 mensajes y buscamos algunas caracteristicas que nos ayudaran a saber si eran deseados o no deseados.

- Herramientas utilizadas

- Bloc de notas
- Visual Studio Code

- Como funciona

Primero revise los 6 mensajes que nos dieron en la actividad, de esos mensajes 3 eran no deseados y los otros 3 eran normales.

Despues busque algunas pistas que nos ayudaran a reconocer los mensajes sospechosos como premios inesperados, enlaces extraños, amenazas o solicitudes de contraseñas.

Con esas pistas cree 5 reglas para poder clasificar otros mensajes, si un mensaje tiene caracteristicas sospechosas lo clasificamos como no deseado y si es un mensaje informativo sin señales sospechosas lo clasificamos como deseado.

Si no estamos seguros de su clasificacion lo dejamos pendiente para revisarlo.

- Pruebas realizada 
    - Prueba 1

    * Mensaje:
    Felicidades ganaste un celular nuevo. Ingresa al enlace para reclamarlo

    *Resultado esperado:
    Mensaje no deseado

    *Resultado obtenido:
    Mensaje no deseado

    *Explicacion:
    El mensaje ofrece un premio que no esperabamos y tambien nos pide entrar a un enlace. Por eso lo clasificamos como no deseado.

    - Prueba 2

    * Mensaje:
    Recuerden que mañana tenemos una evaluacion de programacion a las 8 de la mañana

    * Resultado esperado:
    Mensaje deseado

    * Resultado obtenido:
    Mensaje deseado

    * Explicacion: 
    Este mensaje solo nos informa sobre una evaluacion y no tiene ninguna caracteristica sospechosa por eso lo clasificamos como deseado.


- Que aprendi

Aprendi que podemos identificar diferentes tipos de mensajes buscando palabras o caracteristicas que se repiten.
Tambien entendi que no siempre podemos estar seguros de que un mensaje sea bueno o malo por eso en algunos casos es mejor revisarlo antes de tomar una decision.

- Conclusion

Con este reto aprendi a clasificar mensajes utilizando pistas y reglas sencillas, tambien comprendi que reconocer patrones nos ayuda a tomar decisiones y que este proceso se parece a la forma en la que algunos sistemas clasifican informacion.

Reto 3 - Diseña el primer asistente

- Descripcion

En este reto diseñe un asistente virtual llamado CodeTutor que tiene como objetivo ayudar a los estudiantes que estan aprendiendo programacion.

La idea es que los estudiantes puedan hacer preguntas sobre temas de programacion y recibir explicaciones sencillas con ejemplos que les ayuden a entender mejor, este boceto me ayude de chat gpt para crear mi boceto.

- Herramientas utilizadas

- ChatGPT
- Diseño en formato PNG

- Como funciona

Primero pense en una necesidad que tienen algunos estudiantes al momento de aprender programacion, y despues diseñe una pantalla donde el estudiante puede escribir una pregunta y recibir una respuesta del asistente, tambien cree un recorrido de 6 pasos para mostrar como funcionaria CodeTutor.

En ese recorrido utilice tres letras:

- * R: son las reglas que sigue el sistema
- * M: es el modelo de inteligencia artificial que analiza las preguntas y genera las respuestas
- * H: es la parte donde una persona puede revisar la informacion

El funcionamiento seria el siguiente:

1. El estudiante escribe una pregunta
2. El sistema revisa si la pregunta es sobre programacion
3. La inteligencia artificial analiza la pregunta
4. La inteligencia artificial genera una explicacion con un ejemplo
5. Un profesor puede revisar la respuesta si es necesario
6. El sistema muestra la respuesta al estudiante

- Diseño del asistente

El asistente cuenta con una pantalla de chat donde el estudiante puede escribir sus preguntas, tambien tiene un espacio donde se muestran las respuestas y ejemplos de codigo.

En la parte inferior agrege un mensaje que informa que el asistente puede cometer errores y que algunas respuestas deben ser revisadas por un profesor.


- Pruebas del diseño

    * Prueba 1

    * Pregunta:
    Que es una variable en JavaScript

    * Respuesta esperada:
    El asistente explica que una variable sirve para guardar informacion y muestra un ejemplo sencillo.

    * Resultado:
    El boceto muestra como seria esta respuesta.

    * Prueba 2

    * Pregunta:
    Que es un ciclo for en JavaScript

    * Respuesta esperada:
    El asistente deberia explicar que un ciclo for permite repetir instrucciones y mostrar un ejemplo.

    * Resultado:
    El diseño permite representar este tipo de preguntas aunque todavia no es una aplicacion funcional.

- Que aprendi

Aprendi que antes de crear una aplicacion es importante pensar en el problema que quieres resolver y en como funcionaria, tambien entendi que la inteligencia artificial puede ayudar a responder preguntas pero necesita reglas y en algunos casos la revision de una persona y con esta misma podemos tener respuesta e informacion mas rapidaente.

- Conclusion

Con este reto aprendi a diseñar un asistente virtual que puede ayudar a los estudiantes a entender temas de programacion, tambien comprendi la importancia de establecer limites para que el asistente no proporcione informacion incorrecta sin advertirlo.