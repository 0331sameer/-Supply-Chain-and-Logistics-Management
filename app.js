// app.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Edi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Mongo"))
  .catch(err => console.log("Error connecting to Mongo", err));

// Routes
app.use('/purchaseOrder', require('./routes/purchaseOrder'));
app.use('/payment', require('./routes/payment'));
app.use('/inventory', require('./routes/inventory'));
app.use('/ediMessage', require('./routes/ediMessage'));

app.listen(3000, () => console.log('Server running on port 3000'));
