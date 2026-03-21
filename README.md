# ¿Real o Inventado?

Aplicación tipo trivia en la que el usuario debe decidir si una afirmación es real o inventada. El proyecto está planteado como un MVP académico de corto alcance, pensado para una entrega funcional en dos días de trabajo con un equipo de tres personas.

## Objetivo del proyecto

Construir una aplicación web con API que permita:

- registrar e iniciar sesión de usuarios;
- jugar una ronda corta de preguntas;
- administrar preguntas y respuestas desde la API;
- validar respuestas de tipo **Real** o **Inventado**;
- calcular y guardar el puntaje de cada partida;
- consultar resultados básicos del jugador.

El foco de la entrega es tener una experiencia completa y funcional de juego, aunque sea con alcance reducido.

## Alcance de la entrega del lunes

Para mantener el proyecto realista en tiempo y complejidad, la entrega del lunes se delimita a lo siguiente:

- registro de usuario;
- inicio de sesión con correo/usuario y contraseña;
- cierre de sesión;
- partida individual de trivia;
- preguntas precargadas en base de datos;
- respuestas almacenadas en base de datos;
- selección de respuesta entre **Real** e **Inventado**;
- validación de aciertos y errores;
- cálculo de puntaje final;
- guardado del resultado de la partida;
- consulta simple de historial o récords básicos;
- CRUD de usuarios desde API;
- CRUD de preguntas desde API;
- CRUD de respuestas desde API;
- consulta y actualización básica de puntajes desde API.

## Fuera de alcance para esta entrega

Las siguientes ideas pueden quedar como mejoras posteriores, pero no forman parte del compromiso principal del lunes:

- inicio de sesión con Google o Facebook;
- recuperación de contraseña;
- panel administrativo completo;
- CRUD completo desde interfaz para preguntas y categorías;
- multijugador;
- logros, insignias o temporadas;
- ranking global avanzado;
- manejo complejo de sesiones con refresh tokens persistidos;
- modos de juego adicionales.

## Flujo principal del usuario

1. El usuario se registra o inicia sesión.
2. Accede al juego.
3. Responde una serie de afirmaciones marcando si son **reales** o **inventadas**.
4. El sistema valida cada respuesta.
5. Al finalizar la ronda, se calcula el puntaje.
6. El usuario puede revisar su resultado y consultar sus partidas o récords básicos.

## Funcionalidades comprometidas

### Autenticación básica

- registro de usuario;
- inicio de sesión;
- protección de acceso al juego.

### Juego

- mostrar preguntas activas;
- responder en formato binario: **Real** o **Inventado**;
- registrar respuestas del usuario;
- contar aciertos y errores;
- calcular resultado final.

### Resultados

- guardar cada intento de juego;
- consultar puntaje por partida;
- mostrar historial o mejores resultados básicos.

## Propuesta funcional simplificada

Para esta primera entrega, el juego se modela como una trivia de afirmaciones. Cada pregunta tiene una sola verdad asociada:

- `Real`
- `Inventado`

Para cumplir también con la consigna académica, esas respuestas se almacenan de forma explícita en base de datos. En la práctica, cada pregunta puede tener dos registros de respuesta:

- `Real`
- `Inventado`

Una de ellas se marca como correcta. Así el proyecto mantiene una mecánica simple, pero sigue siendo compatible con CRUD de preguntas y respuestas.

## Módulos del sistema para esta fase

### 1. Usuarios

Gestiona el registro, inicio de sesión y estado básico del jugador.

### 2. Preguntas

Almacena las afirmaciones del juego y su categoría.

### 3. Respuestas

Guarda las opciones asociadas a cada pregunta. Para este proyecto, normalmente serán dos: **Real** e **Inventado**, con una marcada como correcta.

### 4. Partidas

Registra cada intento del usuario, su puntaje, número de aciertos y fecha.

### 5. Respuestas del usuario

Guarda qué eligió el jugador en cada pregunta de una partida.

## Alcance técnico esperado de la API

La API puede quedar limitada a endpoints para:

- registro e inicio de sesión;
- administración de usuarios;
- consulta de preguntas;
- administración de preguntas;
- administración de respuestas;
- creación y cierre de partidas;
- registro de respuestas del usuario;
- consulta de resultados e historial básico;
- consulta y actualización de puntajes.

## Criterio de éxito de la entrega

La entrega se considera cumplida si un usuario puede:

- crear su cuenta o iniciar sesión;
- jugar una ronda completa;
- obtener un puntaje;
- ver que su resultado quedó registrado.

## Notas sobre diseño y documentación

- Las pantallas en `/propuesta` deben entenderse como referencia visual, no como contrato exacto de implementación.
- La prioridad es la funcionalidad mínima viable, no replicar todos los elementos visuales propuestos.
- El modelo de base de datos debe responder al juego real que se entregará, no a funcionalidades futuras todavía no comprometidas.

## Conclusión

**¿Real o Inventado?** se plantea como un MVP claro, alcanzable y funcional para una entrega corta. La estrategia correcta para el lunes es priorizar autenticación básica, juego completo, guardado de resultados y una estructura de datos simple pero coherente con la mecánica central del proyecto.
