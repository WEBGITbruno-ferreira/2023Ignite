import http from 'node:http' //para import, mudar tag type no package
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

//Stateful - Stateles

// Depende da mémoria / Não grava nada em memória 

// Cabecalhos = Metadados, info adicional de como aquele dado por ser interpretado.

// Http status code ( MDN )


// 3 formas de enviar params
//QueryParams //URL Stateful, parâmetros não sensiveis , filtros, paginação, não obrigatório
// routeParams // parametros não nomeados, identificação de recurso
// RequestBody // Informações de um form.


const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find( route => {
        return route.method === method && route.path.test(url) 
  })

  // se encontrou uma rota, então executa a função padrão dela
  if (route) {
    const routeParams = req.url.match(route.path)
  

    const {query, ...params} = routeParams.groups
    req.params = params
    req.query = query ? extractQueryParams(query) : {}

 

    return route.handler(req, res)
  }

 // console.log(route)

  return res.writeHead(404).end()

})


server.listen('3000')