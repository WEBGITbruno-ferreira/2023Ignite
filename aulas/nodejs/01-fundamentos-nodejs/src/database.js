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

  select (table, search) {
    let data = this.#database[table] ?? []

    if (search) {
      data = data.filter(row => {

        
          // transforma objeto em array , 
          // {name:"diego", email:"diego@..."}
          // [ ['name', 'diego'] , ['email' , 'diego@...']
          //
          // some retorna true, se uma busca for verdadeira
        return Object.entries(search).some(([ key, value]) => {

          return row[key].includes(value)

        })
      })
    }

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

  delete (table, id) {
    const rowIndex = this.#database[table].findIndex( row => row.id === id)
    console.log('rowIndex', rowIndex)

    if (rowIndex > -1 ) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    }
  }


  update (table, id, data) {
    const rowIndex = this.#database[table].findIndex( row => row.id === id)
    
    console.log(data)

    if (rowIndex > -1 ) {
      this.#database[table][rowIndex] = {id, ...data}
      this.#persist()
    }
  }


}