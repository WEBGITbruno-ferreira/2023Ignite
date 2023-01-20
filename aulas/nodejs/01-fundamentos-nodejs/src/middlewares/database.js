import fs from 'node:fs/promises' // tratar arquivos
// Dentro do database posso salvar muitas coisas

//console.log(import.meta.url) // retorna o caminho do arquivo que está chamando



export class Database {
  // # torna a PROPRIEDADE privada
  #database = {}


  #persist() {
    console.log("persist")
    fs.writeFile('db.json', JSON.stringify(this.#database))

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