var express = require('express'),
    api     = require('./api'),
    app     = express();

app
.use(express.static('./public'))
.use('/api', api)
.get('*', function(req, res){
    // if (!req.user) {
    //     res.redirect('/login');
    // }
    res.sendfile('./public/main.html');
})
.listen(3000);
