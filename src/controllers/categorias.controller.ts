import {Handler} from 'express'
import {getConnection} from '../db'
import {nanoid} from 'nanoid'

export const getCategorias:Handler = (req,res) => {
  const data = getConnection().get('categorias').value()
  return res.json(data);
};

export const createCategoria: Handler = (req,res) => {
  const {nombre} = req.body

  const newCategoria = {
    id: nanoid(),
    nombre
  }

  try {

    getConnection().get('categorias').push(newCategoria).write()
    
    res.json(newCategoria) 

  } catch (error) {
    res.status(500).send(error)
  }
}

export const getCategoria:Handler = (req, res) => {
  const categoria = getConnection()
    .get('categorias')
    .find({id: req.params.id})
    .value()

  if(!categoria) return res.status(404).json({sms:"no existe una categoria con ese id"})

  res.json(categoria)
}

export const deleteCategoria:Handler = (req, res) => {
  const findcategoria = getConnection()
    .get('categorias')
    .find({id: req.params.id})
    .value()

  if(!findcategoria) return res.status(404).json({sms:"no existe una categoria con ese id"})

  const deletecategoria = getConnection().get('categorias').remove({id: req.params.id}).write()

  res.json({
    sms:"Se elimino correctamente la categoria",
    data: deletecategoria[0]
  })
}

export const updateCategoria:Handler = (req, res) => {
  const categoria = getConnection()
    .get('categorias')
    .find({id: req.params.id})
    .value()

  if(!categoria) return res.status(404).json({sms:"no existe una categoria con ese id"})

  const updatedCategoria = getConnection().get('categorias').find({id: req.params.id}).assign(req.body).write()

  res.json({
    sms: "categoria actualizada",
    data: updatedCategoria
  })
}