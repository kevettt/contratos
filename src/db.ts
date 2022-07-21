import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

type Ingreso = {
  id: string,
  fecha: string,
  productos: Producto[],
  total:number,
}

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
  productos: Producto[],
  ingresos: Ingreso[]
}

let db: lowdb.LowdbSync<Schema>;


export const createConnection = () => {
  const adapter = new FileSync<Schema>('db.json');
  db = lowdb(adapter)
  db.defaults({ productos: [],categorias:[], ingresos:[]}).write();
}

export const getConnection = () => db;

