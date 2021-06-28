# Ejercicio Concredito

Para el funcionamiento del proyecto será necesario realizar lo siguiente:

- Modificar backend\src\database\database.js con la información del equipo para generar la conexion a base de datos. Yo utilicé postgres, nombre de la base de datos = "firstapi", usuario = "postgres", password = "vash123".

- También será necesario crear las tablas necesarias para almacenar y consultar la información requerida por el proyecto, las estructuras así como algunos ejemplos de insert se encuentran en backend\sql\db.sql

- Ya que se agregó .gitignore para hacer más ligero el proyecto, será necesario posicionarse por terminal o cmd en la ruta del backend del proyecto y ejecutar el comando "npm install" para instalar los modulos o dependencias requeridas para su funcionamiento.

- Una vez instaladas las dependencias, será necesario echar a andar el backend, esto se puede realizar con el comando "npm run build" y posteriormente alguno de los siguientes 2 comandos para mantener levantado el servicio: "npm run dev" o "npm run start".

- Al mostrarse "Server on port 4000" en la terminal o consola ya se puede acceder a todo el funcionamiento del frontend.

- Para ejecutar el front, en la carpeta frontend se ejecutará index.html lo que levantará la página para probar el funcionamiento.

- La ruta donde se alojan las imagenes en el servidor es \backend\src\public\uploads\
