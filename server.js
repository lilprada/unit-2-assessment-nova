//dependencies
const express = require('express')
const app = express()
const port = 3000
const Item = require('./models/todos.js')

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//index route
app.get('/', (req, res) => {
    Item.find({}, (error, allToDos) => {
        res.render('Index', {
            todoList: allToDos
        })
    })
    res.render('Index')
})

//create route
app.post('/', (req, res) => {

    if(req.body.completed === 'on') {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }

    Item.create(req.body, (error, createdItem) => {
        res.redirect('/')
    })
})


//delete route
app.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/')
    })
  })


//listener route
app.listen(port, (req, res) => {
    console.log('hello')
})