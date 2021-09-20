const express = require('express')
const app = express()
const { User } = require('./models')
const port = 3000

app.use(express.json())

app.get('/users', (req, res) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users)
        })
})

app.post('/users', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(user => {
        res.status(201).json(user)
    }) .catch(err => {
        res.status(422).json("Can't create user")
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
