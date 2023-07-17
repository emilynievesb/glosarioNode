// --------------------------------------
// NODE.JS

// Características de Node.js
// - Node.js es un entorno de ejecución del lado del servidor basado en el motor V8 de Chrome.
// - Permite ejecutar JavaScript fuera del navegador, lo que lo hace ideal para crear aplicaciones web y servidores.
// - Una de las características clave de Node.js es su modelo de programación orientado a eventos y no bloqueante.
//   Esto significa que puede manejar múltiples conexiones simultáneas sin bloquear el hilo principal de ejecución.

// NVM (Node Version Manager)
// - NVM es una herramienta muy útil para gestionar múltiples versiones de Node.js en un mismo sistema.
// - Permite instalar, cambiar y administrar fácilmente las versiones de Node.js que utilizas en tus proyectos.
// - Por ejemplo, puedes utilizar NVM para cambiar a la versión 14 de Node.js ejecutando "nvm use 14".
// --------------------------------------
// PROCESS

// Objeto global process
// - En Node.js, el objeto global "process" proporciona información y control sobre el proceso actual en ejecución.
// - Es especialmente útil para acceder a argumentos de línea de comandos, variables de entorno y manejar la salida del programa.
// - Por ejemplo, puedes acceder a los argumentos de línea de comandos a través de "process.argv", que es un array que contiene los argumentos pasados al programa.
// Ejemplo:
// node archivo.js argumento1 argumento2
// console.log(process.argv); // Output: ['node', 'archivo.js', 'argumento1', 'argumento2']

// --------------------------------------
// COMMONJS

// CommonJS es una especificación de módulos para JavaScript que se utiliza en Node.js.
// - Proporciona una forma estándar de definir y exportar módulos reutilizables en Node.js.
// - El sistema de módulos CommonJS utiliza la función "require()" para importar módulos en un archivo.
// Ejemplo:
// const fs = require('fs'); // Importa el módulo fs (file system)

// REQUIRE JSON

// En Node.js, también puedes utilizar "require()" para importar archivos JSON.
// - Puedes importar archivos JSON como módulos y acceder a sus datos en tu programa.
// Ejemplo:
// const data = require('./data.json'); // Importa el archivo JSON 'data.json'

// REQUIRE FS

// El módulo "fs" en Node.js proporciona funciones para trabajar con el sistema de archivos.
// - Con el módulo "fs", puedes leer, escribir, actualizar y eliminar archivos en el sistema de archivos.
// Ejemplo:
// const fs = require('fs');
// fs.readFile('archivo.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data); // Muestra el contenido del archivo.txt
// });

// REQUIRE HTTP

// El módulo "http" en Node.js permite crear un servidor HTTP y manejar solicitudes y respuestas HTTP.
// - Con el módulo "http", puedes crear tu propio servidor web en Node.js.
// Ejemplo:
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hola, mundo!');
// });
// server.listen(3000, 'localhost', () => {
//   console.log('Servidor en ejecución en http://localhost:3000/');
// });

// --------------------------------------
// NPM

// NPM (Node Package Manager) es el gestor de paquetes para Node.js.
// - Con NPM, puedes descargar, instalar y administrar paquetes y dependencias de Node.js de forma sencilla.
// Ejemplo:
// npm install express // Instala el paquete "express"

// ES MODULES

// ES Modules es un estándar para trabajar con módulos en JavaScript.
// - Proporciona una sintaxis más moderna y concisa para importar y exportar módulos en tu código.
// Ejemplo:
// import fs from 'fs'; // Importa el módulo fs (file system)

// Diferencias en el import

// En los módulos ES, en lugar de utilizar la función "require()", se utiliza la sintaxis "import" para importar módulos.
// Ejemplo:
// import fs from 'fs'; // Importa el módulo fs (file system)

// --------------------------------------
// NODEMON

// Nodemon es una herramienta muy útil durante el desarrollo de aplicaciones Node.js.
// - Nodemon se utiliza para reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos.
// Ejemplo:
// nodemon archivo.js // Inicia la aplicación con Nodemon

// REQUEST HTTP EN NODE

// En Node.js, puedes realizar solicitudes HTTP a otros servidores utilizando módulos como "http", "axios" o "node-fetch".
// Ejemplo utilizando el módulo "http":
// const http = require('http');
// http.get('http://api.example.com/data', (res) => {
//   let data = '';
//   res.on('data', (chunk) => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     console.log(data); // Muestra la respuesta recibida
//   });
// });

// Propiedades y métodos comunes en el objeto request

// El objeto "request" en Node.js proporciona propiedades y métodos para manejar solicitudes HTTP entrantes.
// Ejemplo:
// http.createServer((req, res) => {
//   console.log(req.url); // Muestra la URL de la solicitud
//   console.log(req.method); // Muestra el método de la solicitud (GET, POST, etc.)
// });

// Obtención de datos con req.on

// En Node.js, puedes utilizar el método "req.on" para suscribirte a eventos y manejar datos recibidos en el cuerpo de la solicitud HTTP.
// Ejemplo:
// http.createServer((req, res) => {
//   let data = '';
//   req.on('data', (chunk) => {
//     data += chunk;
//   });
//   req.on('end', () => {
//     console.log(data); // Muestra los datos recibidos en el cuerpo de la solicitud
//   });
// });

// --------------------------------------
// EXPRESS

// Express es un framework web para Node.js que facilita la creación de aplicaciones y APIs web.
// Ejemplo:
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.send('¡Hola, mundo!');
// });
// app.listen(3000, () => {
//   console.log('Servidor Express en ejecución en el puerto 3000');
// });

// Características de Express
// - Enrutamiento sencillo y flexible: Express permite definir rutas y manejar solicitudes HTTP de forma clara y modular.
// - Manejo de middleware: Express utiliza middleware para extender las funcionalidades de tu aplicación.
// - Soporte para plantillas y motores de renderizado: Express facilita la generación de vistas HTML dinámicas utilizando plantillas y motores de renderizado.
// - Integración sencilla con bases de datos y otros módulos: Express se integra con diversos módulos y frameworks populares, lo que simplifica el desarrollo de aplicaciones más completas.

// Estructura básica de Express

// Una estructura básica de una aplicación Express consta de los siguientes pasos:
// 1. Importar el módulo Express: "const express = require('express')"
// 2. Crear una instancia de la aplicación Express: "const app = express()"
// 3. Definir las rutas y los manejadores de las solicitudes HTTP utilizando los métodos de Express, como "app.get()", "app.post()", etc.
// 4. Iniciar el servidor Express utilizando el método "app.listen(port, callback)".

// Montura de un servidor Express
// - Después de definir las rutas y los manejadores, debes montar el servidor Express para que escuche las solicitudes entrantes.
// - Puedes hacerlo utilizando el método "app.listen(port, callback)".
// Ejemplo:
// app.listen(3000, () => {
//   console.log('Servidor Express en ejecución en el puerto 3000');
// });

// Parámetros y encabezados (headers)

// En Express, puedes pasar parámetros en la URL o en la solicitud (request).
// - Los parámetros de URL se capturan utilizando dos puntos (:) en la definición de la ruta.
// Ejemplo:
// app.get('/users/:id', (req, res) => {
//   console.log(req.params.id); // Muestra el valor del parámetro "id" en la URL
// });

// Los encabezados (headers) son metadatos asociados a la solicitud o respuesta HTTP.
// - Puedes leer o establecer los encabezados utilizando el objeto "request" o "response" respectivamente.
// Ejemplo:
// app.get('/', (req, res) => {
//   console.log(req.headers['user-agent']); // Muestra el encabezado "User-Agent" de la solicitud
//   res.send('¡Hola, mundo!');
// });

// Middleware

// El middleware en Express es una función que se ejecuta en el flujo de la solicitud y respuesta.
// - Puedes utilizar middleware para realizar acciones adicionales antes o después de manejar la ruta principal.
// Ejemplos de middleware:
// app.use(express.json()); // Middleware para analizar el cuerpo de la solicitud en formato JSON
// app.use(express.static('public')); // Middleware para servir archivos estáticos desde el directorio "public"

// Router

// En Express, el router es un objeto que te permite definir rutas y agrupar controladores relacionados.
// - El router te permite modularizar las rutas y el manejo de las mismas en tu aplicación Express.
// Ejemplo:
// const router = express.Router();
// router.get('/', (req, res) => {
//   res.send('¡Hola, mundo desde el router!');
// });
// app.use('/api', router);
