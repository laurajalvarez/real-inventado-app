## Modelo de base de datos

El modelo propuesto para la aplicación **¿Real o Inventado?** se diseñó para soportar autenticación, administración de preguntas y respuestas, así como el control de puntajes de cada usuario.

### Entidades principales

#### `roles`
Define el tipo de usuario dentro del sistema, por ejemplo:
- administrador
- jugador

#### `users`
Almacena la información principal de cada usuario:
- nombre de usuario
- correo electrónico
- contraseña en formato cifrado
- estado del usuario
- rol asignado

#### `sessions`
Permite gestionar la autenticación, persistencia de sesión o tokens de acceso del usuario.

#### `categories`
Agrupa las preguntas por temas, por ejemplo:
- ciencia natural
- historia
- tecnología
- entretenimiento

#### `questions`
Guarda cada enunciado que será mostrado en el juego. Además, puede relacionarse con una categoría y con el usuario que creó la pregunta.

#### `answers`
Contiene las posibles respuestas o la validación asociada a cada pregunta. En este proyecto sirve para identificar la opción correcta o el valor esperado de la pregunta.

#### `quiz_attempts`
Representa cada partida o intento del usuario. Aquí se puede registrar:
- fecha de inicio
- fecha de finalización
- puntaje obtenido
- número total de preguntas
- aciertos

#### `user_answers`
Registra qué respondió el usuario en cada pregunta durante una partida.

#### `score_history`
Permite llevar un historial de los puntos ganados o perdidos, útil para estadísticas, récords o auditoría.

## Relación general del modelo

- Un rol puede pertenecer a muchos usuarios.
- Un usuario puede tener muchas sesiones.
- Una categoría puede tener muchas preguntas.
- Una pregunta puede tener varias respuestas asociadas.
- Un usuario puede realizar muchos intentos de juego.
- Un intento puede contener varias respuestas del usuario.
- Un usuario puede acumular múltiples registros en su historial de puntaje.

## Explicación breve de las pantallas compartidas

### 1. Pantalla de login
La primera pantalla corresponde al acceso de la aplicación.

#### Elementos observados
- Título principal: **¿REAL O INVENTADO?**
- Subtítulo motivacional: **Pon a prueba tu intuición**
- Campo de **usuario o email**
- Campo de **contraseña**
- Botón principal de **Entrar**
- Opciones de acceso con **Google** y **Facebook**
- Enlace para **registro de nuevos usuarios**
- Opciones inferiores de ayuda e idioma

#### Propósito
Esta pantalla permite autenticar al usuario antes de ingresar al juego. También funciona como punto de entrada para registro y posibles integraciones de acceso social.

### 2. Pantalla de juego
La segunda pantalla corresponde a una ronda activa del juego.

#### Elementos observados
- Encabezado con nombre de la app
- Indicador de **racha**
- Número de pregunta actual, por ejemplo **8/10**
- Temporizador visible
- Barra de progreso
- Etiqueta de categoría, por ejemplo **Ciencia Natural**
- Tarjeta central con el enunciado de la pregunta
- Botones de respuesta: **Real** e **Inventado**
- Control inferior relacionado con el **nivel de duda**
- Barra de navegación con accesos como **Jugar**, **Temas** y **Récords**

#### Propósito
Esta pantalla es el núcleo de la experiencia del usuario. Aquí se presenta la pregunta, se controla el tiempo de respuesta y se registra la selección del jugador para calcular su puntaje y su avance dentro de la ronda.

## Interpretación funcional de las pantallas respecto al modelo

- La **pantalla de login** se relaciona principalmente con las tablas `users`, `roles` y `sessions`.
- La **pantalla de juego** se relaciona con `questions`, `answers`, `quiz_attempts`, `user_answers` y `score_history`.
- La navegación hacia **récords** puede apoyarse en `score_history` y `quiz_attempts`.
- La navegación hacia **temas** puede apoyarse en `categories`.

## Conclusión

El modelo de datos y las pantallas compartidas muestran coherencia entre la parte visual y la lógica del sistema. La interfaz sugiere una aplicación de trivia dinámica y móvil, mientras que el modelo propuesto ofrece la estructura necesaria para soportar autenticación, administración del contenido y seguimiento del desempeño del usuario.