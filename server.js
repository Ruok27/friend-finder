let express = require('express');
let app = express();
let path = require('path');




var PORT = process.env.PORT || 3000;


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.json(path.join(__dirname + '/app/public/home.html'));
});

app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});


