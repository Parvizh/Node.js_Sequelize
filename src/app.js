const path = require('path');
require('dotenv').config({ path: path.join(__dirname, "..", ".env") });
const express = require('express');
const cors = require('cors');
const router = require('./api/index');
const app = express();
require('./models/index')


app.use(cors({ origin: '*' }));
app.use(express.json({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use("/api",router);
app.use('/', express.static(path.join(__dirname, "..", "public")));
app.use('*', (req, res) => {
    res.status(404).json({ error: 'not found' });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})