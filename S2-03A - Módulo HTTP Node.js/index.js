var http = require('http');
var dt = require('./cadastro');
var dt1 = require('./login');
var dt2 = require('./pagina_inicial');
var dt3 = require('./agendamentos');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("cadastro:" + dt.myDateTime() + "<br>" );
  res.write("login da isa:" + dt1.myDateTime() + "<br>" );
  res.write("home:" + dt2.myDateTime() + "<br>" );
  res.write("data e hora:" + dt3.myDateTime() + "<br>" );

  res.end();
}).listen(5003);
