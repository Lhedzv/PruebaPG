var pg = require('pg');

var stringCon = process.env.DATABASE_URL || 'postgres://localhost:5432/Asesorias';
var client = new pg.Client(stringCon);
client.connect();

var query = client.query("INSERT INTO items(text,complete) VALUES('Prueba', false)");
query.on('end', function(){ client.end(); });
