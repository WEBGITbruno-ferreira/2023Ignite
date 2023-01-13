import  http from 'node:http' //para import, mudar tag type no package


const server = http.createServer((req, res)=> {

  return res.end('hellos')

})


server.listen('3000')