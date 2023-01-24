// /users/:id

export function buildRouthPath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g

  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<id>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${pathWithParams}`)
  //console.log(Array.from(path.matchAll(routeParametersRegex)))

  return pathRegex
}