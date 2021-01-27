
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const connectDB = require('./db');

require('dotenv').config({ path: './.env' });
const app = express();
app.use(bodyParser.json())
app.use(cors())
// Define routes
app.use('/api/routes', require('./routes/hello'));
app.get('/recover/:id', (req, res) => {
    let name = req.params.id
    console.log(name)
    let sql = `SELECT * FROM content_db.users WHERE name LIKE "%${name}%";`

    connectDB.query(sql,function(err, results){
     if (err) throw err;
   
     res.send(results);
     console.log(results)
   });
  
});
app.get('/', (req, res) => {
   
    let sql = `SELECT * FROM content_db.users;`
    connectDB.query(sql,function(err, results){
     if (err) throw err;
   
     res.send(results);
     console.log(results)
   });
  
});
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
