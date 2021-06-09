const path = require('path');
require('dotenv').config({ path: path.join(__dirname, "..", ".env") });
require('./loaders/relations')
const express = require('express');
const cors = require('cors');
const router = require('./api/index');
const app = express();
const {sequelize,
    // sequelizeLocal
} = require('./config/sequelize');

app.use(cors({ origin: '*' }));
app.use(express.json({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use("/api",router);
app.use('/', express.static(path.join(__dirname, "..", "public")));
app.use('*', (req, res) => {
    res.status(404).json({ error: 'not found' });
});

// sequelizeLocal.sync()
sequelize.sync().then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch(err=>console.log(err));