import http from 'node:http' //para import, mudar tag type no package
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

//Stateful - Stateles

// Depende da mémoria / Não grava nada em memória 

// Cabecalhos = Metadados, info adicional de como aquele dado por ser interpretado.

// Http status code ( MDN )



const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find( route => {
    return route.method === method && route.path === url 
  })

  // se encontrou uma rota, então executa a função padrão dela
  if (route) {
    return route.handler(req, res)
  }

  console.log(route)

  return res.writeHead(404).end()

})


server.listen('3000')