import http from 'node:http';

import {Transform} from 'node:stream'


class InverseNumberStream extends Transform { 
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

// Tudo no node são streams 
// req => Readable Stream
// Res -=> Writable Stream
const server = http.createServer((req, res)=> {
  console.log('runnn')
  return req
  .pipe(new InverseNumberStream())
  .pipe(res)


})


server.listen(3339)