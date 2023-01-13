import  http from 'node:http' //para import, mudar tag type no package


const server = http.createServer((req, res)=> {
  const { method, url} = req

  if ( method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if ( method === 'POST' && url === '/users') {
    return res.end('Criar usuários')
  }

  return res.end('hellos')

})


server.listen('3000')