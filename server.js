//dependencies
const express = require('express')
const app = express()
const port = 3000
const Item = require('./models/todos.js')
const methodOverride  = require('method-override');
const mongoose = require('mongoose')

//port
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// mongoose connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/unit-2-assessment';

mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})



//index route
app.get('/', (req, res) => {
//     res.render('Index')
// })
    Item.find({}, (error, allToDos) => {
        res.render('Index', {
            todoList: allToDos
        })
    })
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
app.listen(PORT, () => 
console.log( 'Listening on port:', PORT));
