const express = require('express');
const cors =  require('cors');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

let productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 80 },
    { id: 4, nombre: "Monitor", precio: 7000 }
];

app.get('/api/productos', (req, res) => {
    res.json(productos);
});

app.post('/api/productos', (req, res) => {
    const { nombre, precio } = req.body;
    const nuevoProducto = {
        id: productos.length + 1,
        nombre,
        precio
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', port: PORT });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});