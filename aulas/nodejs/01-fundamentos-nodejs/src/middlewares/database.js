// Dentro do database posso salvar muitas coisas

export class Database {
  // # torna a PROPRIEDADE privada
  #database = {}

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
  }


}