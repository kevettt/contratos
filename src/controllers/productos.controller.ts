import {Handler} from 'express'
import {getConnection} from '../db'
import {nanoid} from 'nanoid'

export const getProductos:Handler = (req,res) => {
  const data = getConnection().get('productos').value()
  return res.json(data);
};

export const createProducto: Handler = (req,res) => {
  const {nombre,medida,stock,precio,categoria} = req.body

  const newProducto = {
    id: nanoid(),
    nombre,
    medida,
    stock,
    precio,
    categoria

  }

  try {

    getConnection().get('productos').push(newProducto).write()
    
    res.json(newProducto) 

  } catch (error) {
    res.status(500).send(error)
  }
}

export const getProducto:Handler = (req, res) => {
  const producto = getConnection()
    .get('productos')
    .find({id: req.params.id})
    .value()

  if(!producto) return res.status(404).json({sms:"no existe un producto con ese id"})

  res.json(producto)
}

export const deleteProducto:Handler = (req, res) => {
  const findproducto = getConnection()
    .get('productos')
    .find({id: req.params.id})
    .value()

  if(!findproducto) return res.status(404).json({sms:"no existe un producto con ese id"})

  const deleteproducto = getConnection().get('productos').remove({id: req.params.id}).write()

  res.json({
    sms:"Se elimino correctamente el producto",
    data: deleteproducto[0]
  })
}

export const updateProducto:Handler = (req, res) => {
  const producto = getConnection()
    .get('productos')
    .find({id: req.params.id})
    .value()

  if(!producto) return res.status(404).json({sms:"no existe un producto con ese id"})

  const updatedProducto = getConnection().get('productos').find({id: req.params.id}).assign(req.body).write()

  res.json({
    sms: "producto actualizado",
    data: updatedProducto
  })
}