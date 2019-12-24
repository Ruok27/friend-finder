let express = require('express');
let app = express();
let path = require('path');
var PORT = process.env.PORT || 3000;
const htmlroute = require("./app/routing/htmlRoutes.js");

app.use(htmlroute);



app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});


