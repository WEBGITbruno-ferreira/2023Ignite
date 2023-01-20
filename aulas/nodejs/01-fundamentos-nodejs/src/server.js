import http from 'node:http' //para import, mudar tag type no package

//Stateful - Stateles

// Depende da mémoria / Não grava nada em memória 

// Cabecalhos = Metadados, info adicional de como aquele dado por ser interpretado.

// Http status code ( MDN )

const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null

  }

  console.log(req.body)

  if (method === 'GET' && url === '/users') {

    return res.
      setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {

    const { name, email } = req.body

    users.push({
      id: 1,
      name: name,
      email: email
    })
    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()

})


server.listen('3000')