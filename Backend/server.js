const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ========================
// In-memory storage
// ========================
let todo = null; // For Todo list
let lastCalculation = null; // For Calculator results
let contact = null; // For Contact list

// ========================
// Todo Endpoints
// ========================
app.get('/api/todo', (req, res) => {
    if (!todo) {
        return res.status(404).json({ message: 'No todo found' });
    }
    res.json({ todo });
});

app.post('/api/todo', (req, res) => {
    const { text } = req.body;
    if (!text || !text.trim()) {
        return res.status(400).json({ message: 'Todo text is required' });
    }
    todo = text.trim();
    res.json({ message: 'Todo saved', todo });
});

app.delete('/api/todo', (req, res) => {
    if (!todo) {
        return res.status(404).json({ message: 'No todo to delete' });
    }
    todo = null;
    res.json({ message: 'Todo deleted' });
});

// ========================
// Calculator Endpoints
// ========================
app.post('/api/calculate', (req, res) => {
    const { n1, n2, operation } = req.body;

    if (typeof n1 !== 'number' || typeof n2 !== 'number' || isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ message: 'Please enter valid numbers' });
    }

    let result;
    switch (operation) {
        case 'add':
            result = n1 + n2;
            break;
        case 'sub':
            result = n1 - n2;
            break;
        case 'multi':
            result = n1 * n2;
            break;
        case 'div':
            if (n2 === 0) {
                return res.status(400).json({ message: 'Cannot divide by zero' });
            }
            result = n1 / n2;
            break;
        default:
            return res.status(400).json({ message: 'Invalid operation' });
    }

    lastCalculation = { n1, n2, operation, result };
    res.json({ message: 'Calculation successful', result });
});

app.get('/api/calculate', (req, res) => {
    if (!lastCalculation) {
        return res.status(404).json({ message: 'No calculation found' });
    }
    res.json(lastCalculation);
});

// ========================
// Contact Endpoints
// ========================
app.get('/api/contact', (req, res) => {
    if (!contact) {
        return res.status(404).json({ message: 'No contact found' });
    }
    res.json(contact);
});

app.post('/api/contact', (req, res) => {
    const { name, phoneNo } = req.body;
    if (!name || !phoneNo) {
        return res.status(400).json({ message: 'Name and phone number are required' });
    }
    contact = { name, phoneNo };
    res.json({ message: 'Contact saved', contact });
});

app.delete('/api/contact', (req, res) => {
    if (!contact) {
        return res.status(404).json({ message: 'No contact to delete' });
    }
    contact = null;
    res.json({ message: 'Contact deleted' });
});

// ========================
// Start Server
// ========================
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
