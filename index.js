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
