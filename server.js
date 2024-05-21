//Imports
require('dotenv').config();
const express = require('express');
const connectDB = require('./Configuration/config.js')


const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Routes
app.use("/auth", require('./Routes/AuthRoute'));
app.use("/users", require('./Routes/UserRoute'));
app.use("/materials", require('./Routes/MaterialRoute'));
app.use("/orders",require('./Routes/OrdersRoute'));
// app.use("/quantity",require('./Routes/QuantityRoute'));

app.get("/", (req, res) => {
  res.send('This is the BackEnd Server')
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  })
})

