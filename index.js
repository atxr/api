const express = require('express')
const app = express()

// Setup middleware to parse JSON
app.use(express.json());
const PORT = 8080;

app.get('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(418).send({
            message: 'Error: username or password missing'
        })
    }

    // Add credential check here with a database
    else if (username == 'admin' && password == 'pass') {
        res.status(200).send({
            "status": 1,
            "username": username,
            "cookie": "miam"
        })
    }

    else {
        res.status(418).send({
            "status": 0
        })
    }
});

app.listen(
    PORT,
    () => console.log(`it's available on http://localhost:${PORT}`)
)
