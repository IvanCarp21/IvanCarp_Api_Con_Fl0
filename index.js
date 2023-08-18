const express = require('express');
const { Cliente, Comanda } = require('./models'); // Asegúrate de importar los modelos adecuados

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Encabezados permitidos
    next();
});

app.use(express.json());

// Métodos CRUD para el modelo de Cliente
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los clientes.' });
    }
});

app.get('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el cliente.' });
    }
});

app.post('/clientes', async (req, res) => {
    const nuevoCliente = req.body;
    try {
        const cliente = await Cliente.create(nuevoCliente);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el cliente.' });
    }
});

app.put('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    const clienteActualizado = req.body;
    try {
        const [updatedRowsCount, updatedRows] = await Cliente.update(clienteActualizado, {
            where: { id },
            returning: true,
        });

        if (updatedRowsCount === 0) {
            res.status(404).json({ error: 'Cliente no encontrado' });
        } else {
            res.json(updatedRows[0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el cliente.' });
    }
});

app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedCliente = await Cliente.destroy({ where: { id } });
        if (deletedCliente) {
            res.status(204).json({ message: 'Cliente eliminado.' });
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al borrar el cliente.' });
    }
});

// Métodos CRUD para el modelo de Comanda
app.get('/comandas', async (req, res) => {
    try {
        const comandas = await Comanda.findAll();
        res.json(comandas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las comandas.' });
    }
});

app.get('/comandas/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const comanda = await Comanda.findByPk(id);
        if (comanda) {
            res.json(comanda);
        } else {
            res.status(404).json({ error: 'Comanda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la comanda.' });
    }
});

app.post('/comandas', async (req, res) => {
    const nuevaComanda = req.body;
    try {
        const comanda = await Comanda.create(nuevaComanda);
        res.status(201).json(comanda);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la comanda.' });
    }
});

app.put('/comandas/:id', async (req, res) => {
    const id = req.params.id;
    const comandaActualizada = req.body;
    try {
        const [updatedRowsCount, updatedRows] = await Comanda.update(comandaActualizada, {
            where: { id },
            returning: true,
        });

        if (updatedRowsCount === 0) {
            res.status(404).json({ error: 'Comanda no encontrada' });
        } else {
            res.json(updatedRows[0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la comanda.' });
    }
});

app.delete('/comandas/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedComanda = await Comanda.destroy({ where: { id } });
        if (deletedComanda) {
            res.status(204).json({ message: 'Comanda eliminada.' });
        } else {
            res.status(404).json({ error: 'Comanda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al borrar la comanda.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

