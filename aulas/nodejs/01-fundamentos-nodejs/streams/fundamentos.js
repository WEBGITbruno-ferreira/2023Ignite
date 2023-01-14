// streams  Netflix / spotify ( analogia )
// obter pequenas partes de alguma coisa e já trabalhar com aqueles dados, antes de ter o retorno completo do objeto.

// conceito de receber o arquivo parcialmente e já processar / utilizar o mesmo.
// dentro de streams não trabalho com números ou strings, ou seja , formatos primitivos

import { Readable } from 'node:stream'

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

new OneToHundredStream().pipe(process.stdout)