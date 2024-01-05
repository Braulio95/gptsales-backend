## Bienvenido!!!!

Gracias por descargar este repositorio. Acontinuación leeras las instrucciones para echar a andar este proyecto.

NOTA: Arranca esta aplicación antes de arrancar la interfaz de usuario.

## Stack
Este servidor se conecta a una base de datos PostgreSQL

## Instalación y configuración inicial

clona este proyecto utilizando
```bash
 git clone
```
Instala las dependencias
```bash
$ npm install
```
Necesitarás crear un archivo .env y configurar las siguientes propiedades. Puedes copiar el env.example.

DB_HOST=localhost

DB_PORT=puerto donde se despliega tu base de datos postgres default: 5432 

DB_USER= Usuario de tu gestor de base de datos

DB_PASS= Contraseña de tu base de datos 

DB_DIALECT=Tu servicio de base de datos (postgres, mysql)

DB_NAME_TEST=test_database_name 

(Como estamos en un ambiente de desarrollo vamos solo a modificar el nombre en development)
DB_NAME_DEVELOPMENT=nombre de tu base de datos

DB_NAME_PRODUCTION=production_database_name 

NODE_ENV=development

JWTKEY=random_secret_key 

TOKEN_EXPIRATION=48h BEARER=Bearer

**Crea tu base de datos**
En tu pgAdmin o el gestor de tu preferencia crea una base de datos con el nombre que desees y asegúrate de que sea exactamente igual al valor de la variable de entorno DB_NAME_DEVELOPMENT

**CORS**
En el archivo main.ts del directorio src verifica que en el middelware CORS en la propiedad origin, la dirección de tu interfaz sea la correcta, de otra manera no de dejara hacer peticiones

**Ya puedes arrancar el server!!!**
```bash
$ npm run start:dev
```

## Registrando un usuario
Con el servidor funcionando podemos registrar a nuestro primer usuario. Para esto puedes usar postman o cualquier servicio de cliente Http que desees. 

El endpoint para la creación de un usuario es el siguiente **(sustituye el puerto por el que estés utilizando. La app por default usa el 3000)**: http://localhost:3000/api/v1/auth/signup

En el body de la petición debe lucir de la siguiente forma (de preferencia usa las credenciales proporcionadas):

{
		"name": "admin",
		"email": "admin@admin.com",
		"password": "admin"
}

## Listo!!!!
Con el servidor funcionando y un usuario creado podemos descargar la interfaz de usuario y empezar a crear registros de los libros.

