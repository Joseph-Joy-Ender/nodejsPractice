require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const dbUrl = process.env.MONGO_URI
const Connect = require('./features/db/connectDB');
const router = require('./features/router/Router')
const port = 8000;
const notFound = require('./features/middleware/NotFound');


app.use(express.json())
app.use(cors())
app.use('/api/user', router)
app.use(notFound);

// app.get('/', (req, res) =>{
//     res.send('Hello Precious Etim Ujong')
// })

Connect(dbUrl)
.then(() =>{
    app.listen(port, ()=>{
        console.log(`app listening at port ${port}`);

    })
})
.catch((error) =>{
    console.log(`Could not listen ${error}`);
})