var router = require('express').Router();

router.get('/', function (req, res, next) {
	res.render('users', {title:'Lista de usuarios'});	
})

module.exports = router;