# tp_arquitectura_web
TP Aquitectura Web UP 2°C 2023

Crear Web API de una página de Cine, sus requests pueden ser las básicas CRUD y sumar un total recaudado por mes y cantidad de personas que asistieron al cine por mes


ejemplo de solicitudes

1) Get http://localhost:3000/peliculas/

Respuesta 

[
    {
        "_id": "653feeeabc09bcb47b7210c7",
        "titulo": "Flash",
        "fecha": "2023-11-03T00:00:00.000Z",
        "recaudacion": 35000,
        "asistentes": 40,
        "__v": 0
    },
    {
        "_id": "6549607bee5032a688a5a6b2",
        "titulo": "Hipnosis",
        "fecha": "2023-11-03T00:00:00.000Z",
        "recaudacion": 35000,
        "asistentes": 35,
        "__v": 0
    }
]

2) POST http://localhost:3000/peliculas/

Body JSON
{
    "titulo": "Batman",
    "fecha": "2023-11-03", //aaaa-mm-dd
    "recaudacion": 23000,
    "asistentes": 23
    

}
Response: 201 Created
{
    "titulo": "Batman",
    "fecha": "2023-11-03T00:00:00.000Z",
    "recaudacion": 23000,
    "asistentes": 23,
    "_id": "654982cc00e9e1db1802d6b2",
    "__v": 0
}

3) DELETE http://localhost:3000/peliculas/654982cc00e9e1db1802d6b2
Response: 200 OK

{
    "_id": "654982cc00e9e1db1802d6b2",
    "titulo": "Batman",
    "fecha": "2023-11-03T00:00:00.000Z",
    "recaudacion": 23000,
    "asistentes": 23,
    "__v": 0
}

4) PUT http://localhost:3000/peliculas/653feeeabc09bcb47b7210c7 actualizo pelicula Flash
{
    "titulo": "Flash",
    "fecha": "2023-11-03", //aaaa-mm-dd
    "recaudacion": 10000,
    "asistentes": 10
    

}

Response: 200 OK
{
    "_id": "653feeeabc09bcb47b7210c7",
    "titulo": "Flash",
    "fecha": "2023-11-03T00:00:00.000Z",
    "recaudacion": 10000,
    "asistentes": 10,
    "__v": 0
}

5) GET http://localhost:3000/peliculas/recaudado/11/2023 //total recaudado por mes y año

Response: 200 OK

{
    "mes": 11,
    "ano": 2023,
    "totalRecaudado": 45000
}

6) GET http://localhost:3000/peliculas/asistentes/11/2023 // total de personas que asistieron por mes y año

Response: 200 OK
{
    "mes": 11,
    "ano": 2023,
    "totalAsistentes": 45
}



