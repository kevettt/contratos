import {Handler} from 'express'
import {getConnection} from '../db'
import {nanoid} from 'nanoid'

export const getIngresos:Handler = (req,res) => {
  const data = getConnection().get('ingresos').value()
  return res.json(data);
};

export const createIngreso: Handler = (req,res) => {
  const {fecha,productos,total} = req.body

  

  const newIngreso = {
    id: nanoid(),
    fecha,
    productos,
    total
  }

  try {

    getConnection().get('ingresos').push(newIngreso).write()
    
    res.json(newIngreso) 

  } catch (error) {
    res.status(500).send(error)
  }
}

export const getIngreso:Handler = (req, res) => {
  const ingreso = getConnection()
    .get('ingresos')
    .find({id: req.params.id})
    .value()

  if(!ingreso) return res.status(404).json({sms:"no existe un ingreso con ese id"})

  res.json(ingreso)
}

export const deleteIngreso:Handler = (req, res) => {
  const findingreso = getConnection()
    .get('ingresos')
    .find({id: req.params.id})
    .value()

  if(!findingreso) return res.status(404).json({sms:"no existe un ingreso con ese id"})

  const deleteingreso = getConnection().get('ingresos').remove({id: req.params.id}).write()

  res.json({
    sms:"Se elimino correctamente el ingreso",
    data: deleteingreso[0]
  })
}

export const updateIngreso:Handler = (req, res) => {
  const ingreso = getConnection()
    .get('ingresos')
    .find({id: req.params.id})
    .value()

  if(!ingreso) return res.status(404).json({sms:"no existe un ingreso con ese id"})

  const updatedIngreso = getConnection().get('ingresos').find({id: req.params.id}).assign(req.body).write()

  res.json({
    sms: "ingreso actualizado",
    data: updatedIngreso
  })
}