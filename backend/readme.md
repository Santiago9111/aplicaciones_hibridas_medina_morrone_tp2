The Last of Us API

API RESTful desarrollada con Node.js, Express y MongoDB que gestiona información sobre usuarios, humanos e infectados del mundo de The Last of Us.  

Datos del proyecto:

Alumnos: Santiago Medina y Tomas Morrone.
Materia: Aplicaciones Híbridas.
Docente: Jonathan Emanuel Cruz. 
Comisión: DWM4AP.

Tecnologías utilizadas

Node.js: (https://nodejs.org/) 
Express: (https://expressjs.com/)  
MongoDB: (https://www.mongodb.com/) 
Mongoose: (https://mongoosejs.com/)  
dotenv: (https://www.npmjs.com/package/dotenv) para variables de entorno. 
nodemon: (https://nodemon.io/) para entornos de desarrollos.

Instalación y uso

1. Clonar el repositorio:
  ```bash
   git clone https://github.com/Santiago9111/aplicaciones_hibridas_medina_morrone_tp1.git
   cd aplicaciones_hibridas_medina_morrone_tp1

   Instalar dependencias:

   npm install o npm i


Configurar variables de entorno (.env):

Ejecutar el servidor en desarrollo:

npm run dev

El servidor esta disponible en http://localhost:5000/

Endpoints principales:
1. Usuarios

GET /api/users => Listar todos los usuarios

GET /api/users/:id => Obtener usuario por ID

POST /api/users => Crear usuario

PUT /api/users/:id => Actualizar usuario

DELETE /api/users/:id => Eliminar usuario

2. Humanos

GET /api/humans => Listar todos los humanos

GET /api/humans/:id => Obtener humano por ID

POST /api/humans => Crear humano

PUT /api/humans/:id => Actualizar humano

DELETE /api/humans/:id => Eliminar humano

3. Infectados

GET /api/infecteds => Listar todos los infectados

GET /api/infecteds/:id => Obtener infectado por ID

POST /api/infecteds => Crear infectado

PUT /api/infecteds/:id => Actualizar infectado

DELETE /api/infecteds/:id => Eliminar infectado