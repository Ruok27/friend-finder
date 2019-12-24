let express = require('express');
const router = express.Router();
let path = require('path');



// viewed at http://localhost:8080
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});



router.get('/survey.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});


module.exports = router;
