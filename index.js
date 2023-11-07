const express = require('express');
const mongoose = require('mongoose');
const peliculasRoutes = require('./routes/peliculas');
const Pelicula = require("./models/Pelicula");

const app = express();
const PORT = 3000;

app.use(express.json());


const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/cineDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error("Error conectando a la base de datos:", error);
        process.exit(1);  // Finaliza el proceso con un código de error.
    }
}

// llamo a la funcion de conexion
connectToDatabase();



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


app.get('/peliculas/:id', async (req, res) => {
    const peliculaId = req.params.id;

    try {
        const pelicula = await Pelicula.findById(peliculaId);

        if (!pelicula) {
            return res.status(404).json({ error: "Película no encontrada" });
        }

        res.json(pelicula);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar la película" });
    }
});


app.get('/peliculas/recaudado/:mes/:ano', async (req, res) => {
    const mes = parseInt(req.params.mes);
    const ano = parseInt(req.params.ano);

    try {
        const peliculas = await Pelicula.find({
            fecha: {
                $gte: new Date(ano, mes - 1, 1),
                $lt: new Date(ano, mes, 1)
            }
        });

        const totalRecaudado = peliculas.reduce((sum, pelicula) => sum + pelicula.recaudacion, 0);
        res.json({ mes, ano, totalRecaudado });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el total recaudado" });
    }
});

app.get('/peliculas/asistentes/:mes/:ano', async (req, res) => {
    const mes = parseInt(req.params.mes);
    const ano = parseInt(req.params.ano);

    try {
        const peliculas = await Pelicula.find({
            fecha: {
                $gte: new Date(ano, mes - 1, 1),
                $lt: new Date(ano, mes, 1)
            }
        });

        const totalAsistentes = peliculas.reduce((sum, pelicula) => sum + pelicula.asistentes, 0);
        res.json({ mes, ano, totalAsistentes });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el total de asistentes" });
    }
});



app.use('/peliculas', peliculasRoutes);



