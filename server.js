let express = require('express');
let app = express();
let path = require('path');





const PORT = 8080;


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/public/home.html'));
});

app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});


