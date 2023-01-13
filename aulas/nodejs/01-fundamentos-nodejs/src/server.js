import  http from 'node:http' //para import, mudar tag type no package

//Stateful - Stateles

// Depende da mémoria / Não grava nada em memória 

// Cabecalhos = Metadados, info adicional de como aquele dado por ser interpretado.

const users = []

const server = http.createServer((req, res)=> {
  const { method, url} = req

  if ( method === 'GET' && url === '/users') {
    users.push({
      id : 1,
      name: 'John',
      email: 'john@example.com'
    })

    return res.
    setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
  }

  if ( method === 'POST' && url === '/users') {
    users.push({
      id : 1,
      name: 'John',
      email: 'john@example.com'
    })
    return res.end('Criar usuários')
  }

  return res.end('hellos')

})


server.listen('3000')