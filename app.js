const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();



port = process.env.PORT || 4010;

app.use(cors());                                    
app.use(express.static(__dirname + '/public'));  



app.use(express.urlencoded({ extended: false }))    
app.use(express.json())                            


// app.use('/api/users', require('./routers/routerUsers'));        
app.use('/api/entries', require('./router/backrouter'));   



//404
app.use((req, res, next) => {

    res.status(404).render('404', {
        error: '404',
        msg: 'Página no encontrada'
    });

});



app.listen(port, () => console.log(`Server listenning on port ${port}...`));