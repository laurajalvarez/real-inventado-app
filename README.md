# ¿Real o Inventado?

Aplicación tipo trivia donde el usuario pone a prueba su intuición identificando si una afirmación es **real** o **inventada**. El proyecto contempla autenticación de usuarios, gestión de preguntas y respuestas, control de puntaje y visualización de récords.

## Descripción general

**¿Real o Inventado?** es una aplicación orientada al entretenimiento y la competencia ligera. El usuario inicia sesión, responde preguntas dentro de un tiempo límite y acumula puntos según sus aciertos. La experiencia está pensada para ser rápida, visual y fácil de usar desde dispositivos móviles.

## Objetivo

Desarrollar una aplicación con una API capaz de administrar usuarios, preguntas, respuestas y puntajes, ofreciendo además una interfaz amigable para el acceso al juego y la interacción con las rondas de preguntas.

## Funcionalidades principales

- Inicio de sesión de usuarios.
- Registro de nuevos usuarios.
- CRUD de usuarios.
- CRUD de preguntas.
- CRUD de respuestas/opciones.
- Gestión de puntajes.
- Registro de intentos o partidas.
- Validación de respuestas correctas.
- Consulta de récords o historial de desempeño.
- Organización de preguntas por temática o categoría.

## Flujo general de uso

1. El usuario accede a la pantalla de login.
2. Inicia sesión con correo/usuario y contraseña.
3. Entra al módulo principal del juego.
4. Responde preguntas seleccionando entre **Real** o **Inventado**.
5. El sistema evalúa la respuesta.
6. Se actualiza el puntaje según el resultado.
7. Al finalizar la ronda, el usuario puede consultar su desempeño y récords.

## Módulos del sistema

### Autenticación
Permite el acceso seguro de los usuarios mediante credenciales. Puede contemplar sesiones activas, cierre de sesión y recuperación futura de acceso.

### Gestión de usuarios
Administra la información del jugador o administrador, así como sus permisos dentro de la plataforma.

### Gestión de preguntas y respuestas
Permite crear, editar, listar y eliminar preguntas, además de registrar sus posibles respuestas o la marca de veracidad correspondiente.

### Puntaje y partidas
Registra los resultados de cada intento del usuario, sus aciertos, su puntaje acumulado y el histórico de participación.

### Récords
Muestra los mejores resultados o estadísticas relevantes de los jugadores.

## Estructura lógica propuesta

El sistema se apoya en entidades como:

- **usuarios**
- **roles**
- **sesiones**
- **preguntas**
- **respuestas**
- **categorías**
- **intentos de juego**
- **respuestas del usuario**
- **historial de puntaje**

## Alcance de la API

La API está pensada para exponer endpoints para:

- autenticación
- administración de usuarios
- administración de preguntas
- administración de respuestas
- consulta y actualización de puntajes
- consulta de historial o récords

## Beneficios de la aplicación

- Experiencia de juego rápida e intuitiva.
- Posibilidad de administrar el contenido fácilmente.
- Escalabilidad para agregar nuevas categorías, modos de juego o rankings.
- Separación entre lógica de negocio y presentación mediante una API.

## Posibles mejoras futuras

- Recuperación de contraseña.
- Rankings globales.
- Niveles de dificultad más detallados.
- Modo multijugador.
- Logros o insignias.
- Temporadas o eventos especiales.
- Inicio de sesión con redes sociales.

## Conclusión

**¿Real o Inventado?** es una propuesta de aplicación de trivia con una base sólida tanto a nivel funcional como estructural. Su combinación de autenticación, gestión de contenido y sistema de puntaje permite construir una experiencia entretenida y escalable, adecuada para prácticas académicas o como base para un producto más completo.
