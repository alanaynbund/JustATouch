const express = require("express");
const cors = require("cors");
const port = 8000;

// requiring / importing runs the file!
// This file doesn't need to export anything though.
require("./config/mongoose.config");

// app is a function but it also has key value pairs on it like an object.
const app = express();

/* 
app.use is adding 'middleware':
stuff that happens in the middle of the the request and response.
*/

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/product.routes")(app)


app.listen(port, ()=> {
    console.log(`Listening on port ${port} for requests to respond to.`)
})