// streams  Netflix / spotify ( analogia )
// obter pequenas partes de alguma coisa e já trabalhar com aqueles dados, antes de ter o retorno completo do objeto.

// conceito de receber o arquivo parcialmente e já processar / utilizar o mesmo.
// dentro de streams não trabalho com números ou strings, ou seja , formatos primitivos

// string de escrita não transforma nada

// string de transformação, transforma um dado 

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {

  index = 1
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000)


  }
}

class MultiplyByTenStream extends Writable { 
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)

    callback()
  }
}

class InverseNumberStream extends Transform { 
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}


// Lendo dados de uma stream, e escrevendo na Stream  que multiplica ( writable stream)
//new OneToHundredStream().pipe(new MultiplyByTenStream())



// Lendo dados de uma stream, transformado algo e escrevendo
new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())