const express = require("express");

const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const pageRoute = require("./routes/pages");

const PORT = 8000;

const app = express();
app.use(express.json());

app.use('/api/auth',authRoute)

app.use('/api/product',productRoute)

app.use('/',pageRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });