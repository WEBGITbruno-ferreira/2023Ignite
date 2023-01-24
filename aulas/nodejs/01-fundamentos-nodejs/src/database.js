import fs from 'node:fs/promises' // tratar arquivos
// Dentro do database posso salvar muitas coisas

//console.log(import.meta.url) // retorna o caminho do arquivo que está chamando

const databasePath = new  URL('../db.json', import.meta.url) /// cria um caminho para um arquivo especificado no primeiro param

//console.log(databasePath)

export class Database {
  // # torna a PROPRIEDADE privada
  #database = {}

  constructor () {
    fs.readFile(databasePath, 'utf-8').then(data => {
      this.#database = JSON.parse(data)
    }).catch( ()=> {
      this.#persist()
    })
  }

  #persist() {
  //  console.log("persist")
    fs.writeFile(databasePath, JSON.stringify(this.#database))

  }

  select (table) {
    const data = this.#database[table] ?? []
    return data
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist();
    return data;
  }


}