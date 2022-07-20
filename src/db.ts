import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'


type Producto = {
  id: string,
  nombre: string,
  medida : string,
  stock: number,
  precio: number,
  categoria: Categoria
}

type Categoria = {
  id: string,
  nombre: string
}

type Schema = {
  categorias: Categoria[],
  productos: Producto[]
}

let db: lowdb.LowdbSync<Schema>;


export const createConnection = () => {
  const adapter = new FileSync<Schema>('db.json');
  db = lowdb(adapter)
  db.defaults({ productos: [],categorias:[]}).write();
}

export const getConnection = () => db;

