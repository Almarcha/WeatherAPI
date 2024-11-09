-----------------------------------------------------------------------------------------------------
Español
-----------------------------------------------------------------------------------------------------
Descripción de la API
Esta API permite obtener información meteorológica detallada para una fecha específica en una 
ciudad o pueblo determinado. Los datos incluyen:

Temperatura máxima, mínima y media del día.
Descripción del estado del tiempo.
Fecha y hora de búsqueda.
Horas de salida y puesta del sol.
Estructura del Proyecto
El proyecto incluye varios archivos importantes que configuran y operan la API:

data.js: Archivo JavaScript que realiza la llamada a la API usando el token del usuario. 
Este token debe ser configurado por el usuario (instrucciones en el apartado de private.env).

private.env: Archivo de configuración donde el usuario debe añadir su token de acceso, 
obtenido desde https://www.visualcrossing.com/weather-api.

app.js: Configura y ejecuta la API en el puerto 4001 por defecto. El usuario puede cambiar este 
valor si desea utilizar otro puerto. Para iniciar la aplicación, usa el comando:
npm run dev
Al ver el mensaje "Servidor funcionando en el puerto XXXX", la aplicación estará en ejecución.

Carpeta front: Contiene los archivos para la interfaz de la aplicación, destacando:

index.js: Gestiona la llamada a la API para obtener los datos meteorológicos y los muestra en la 
interfaz. Este archivo también carga un mapa de Leaflet que muestra el centroide de la ciudad o 
pueblo buscado, junto con sus datos meteorológicos. Además, incluye una función que recoge la fecha 
de búsqueda para incorporarla en la solicitud a la API.

-----------------------------------------------------------------------------------------------------
English
-----------------------------------------------------------------------------------------------------
Project Structure
The project includes several important files that configure and operate the API:

data.js: JavaScript file that makes the call to the API using the user's token. This token must be 
configured by the user (instructions in the private.env section).

private.env: Configuration file where the user must add their access token, obtained from 
https://www.visualcrossing.com/weather-api.

app.js: Configures and runs the API on port 4001 by default. The user can change this value if they 
wish to use another port. To start the application, use the command:
npm run dev
When the message "Server running on port XXXX" appears, the application will be running.

front folder: Contains files for the application interface, notably:

index.js: Manages the API call to retrieve weather data and displays it in the interface. This file 
also loads a Leaflet map displaying the centroid of the searched city or town, along with its 
weather data. Additionally, it includes a function to capture the search date and include it in 
the API request.