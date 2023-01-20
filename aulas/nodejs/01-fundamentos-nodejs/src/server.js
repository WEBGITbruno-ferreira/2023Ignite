import http from 'node:http' //para import, mudar tag type no package
import { json } from './middlewares/json.js'
import { Database } from './middlewares/database.js'

//Stateful - Stateles

// Depende da mémoria / Não grava nada em memória 

// Cabecalhos = Metadados, info adicional de como aquele dado por ser interpretado.

// Http status code ( MDN )

const database = new Database

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' && url === '/users') {
    const users = database.select('users')
    return res.end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {

    const { name, email } = req.body

    const user = {
      id: 1,
      name: name,
      email: email
    }

    database.insert('users', user)

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()

})


server.listen('3000')