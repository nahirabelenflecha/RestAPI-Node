const express = require('express');
const morgan = require('morgan');
const app = express();

// ajustes
app.set('port', process.env.PORT || 8080);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// rutas
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// Inicializar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
