/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
 const http = require('http');
 const { PORT = 8000 } = process.env; // Ambil port dari environment variable
 const fs = require('fs');
 const path = require('path');
 const PUBLIC_DIRECTORY = path.join(__dirname, '../public'); 



 function getHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'utf-8')
  }
 
 function onRequest(req, res) {
    // console.log(req.url[0]);
     switch(req.url) {
         case "/":
            req.url = "/index.html";
        break;
        case "/cars":
            req.url = "/cari-mobil.html";
            break;
        default:
            break;
        }
        console.log(req.url);
        let path = "public" + req.url;
        fs.readFile(path, (err, data) => {
            if (err) {
                res.writeHead(404)
                res.end(getHTML("404.html"))
            }
            else{
                res.writeHead(200);
                res.end(data);
            }
        });
 }
 
 const server = http.createServer(onRequest);
 
 // Jalankan server
 server.listen(PORT, '0.0.0.0', () => {
   console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
 })