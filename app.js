const http = require('http');

const server = http.createServer((req, res)=>{
const url = req.url;
if (url==='/home'){
res.setHeader('Content-Type', 'text/html');
res.write('<html');
res.write('<head><title>Anusha S</title></head>')
res.write('<body>Welcome Home</body>')
res.write('<html>')
res.end();}

else if (url==='/about'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html');
    res.write('<head><title>Anusha S</title></head>')
    res.write('<body>Welcome to About Us Page</body>')
    res.write('<html>')
    res.end();}

else if (url==='/node'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html');
        res.write('<head><title>Anusha S</title></head>')
        res.write('<body>Welcome to my Node.js Project</body>')
        res.write('<html>')
        res.end();}


});

server.listen(3000);
