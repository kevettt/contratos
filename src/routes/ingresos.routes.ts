import { Router } from 'express'
import { createCategoria, deleteCategoria, getCategoria, getCategorias, updateCategoria } from '../controllers/categorias.controller'
import { createIngreso, deleteIngreso, getIngreso, getIngresos, updateIngreso } from '../controllers/ingresos.controller'
import { createProducto, deleteProducto, getProducto, getProductos, updateProducto } from '../controllers/productos.controller'


const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Producto:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: es un id autogenerado
 *        nombre:
 *          type: string
 *          description: nombre del producto
 *        medida:
 *          type: string
 *          description: descripcion del producto
 *        stock:
 *          type: number
 *          description: stock del producto
 *        precio:
 *          type: number
 *          description: precio del producto
 *        categoria:
 *          type: object
 *          description: categoria del producto
 *      required:
 *        - nombre
 *        - medida
 *        - stock
 *        - precio
 *        - categoria
 *      example:
 *        id: iFN08Ubz-oI-Aj8TCcPmV
 *        nombre: Sofa
 *        medida: unidad
 *        stock: 12
 *        precio: 12.6
 *        categoria:
 *          id: jgdsgu823
 *          nombre: muebles
 *    ProductNotFound:
 *     type: object
 *     properties:
 *      sms:
 *        type: string
 *        description: un mensaje por si no existe el producto
 *     example:
 *        sms: no existe un producto con ese id
 *    Productmsm:
 *     type: object
 *     properties:
 *      sms:
 *        type: string
 *        description: un mensaje por si no existe el producto
 *      data:
 *        type: object
 *        description: producto eliminado
 *     example:
 *      sms: no existe un producto con ese id
 *      data: 
 *        id: ai7gs9s0fnasf
 *        name: silla
 *        description: silla de comedor
 *  parameters:
 *    productoId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: id del producto
 */

/**
 * @swagger
 * tags:
 *  name: Productos
 *  description: Productos endpoint
 */


/**
 * @swagger
 * /productos:
 *  get:
 *    summary: La funcion retorna una lista de productos
 *    tags: [Productos]
 *    responses:
 *      200:
 *        description: Optenemos una lista de productos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Producto'
 *              
 */

router.get('/productos',getProductos)

/**
 * @swagger
 * /productos:
 *  post:
 *    summary: La funcion registra un producto
 *    tags: [Productos]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Producto'
 *    responses:
 *      200:
 *        description: creamos un producto
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 *      500:
 *        description: ocurrio algun error en el servidor
 *              
 */

router.post('/productos',createProducto)


/**
 * @swagger
 * /productos/{id}:
 *  get:
 *    summary: La funcion retorna un producto
 *    tags: [Productos]
 *    parameters:
 *      - $ref: '#/components/parameters/productoId'
 *    responses:
 *      200:
 *        description: Optenemos un producto
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 *      404:
 *        description: No se encontro un producto con ese id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *                
 *              
 */
router.get('/productos/:id',getProducto)


/**
 * @swagger
 * /productos/{id}:
 *  delete:
 *    summary: La funcion elimina un producto
 *    tags: [Productos]
 *    parameters:
 *      - $ref: '#/components/parameters/productoId'
 *    responses:
 *      200:
 *        description: eliminamos un producto
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Productmsm'
 *      404:
 *        description: No se encontro un producto con ese id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *                
 *              
 */
router.delete('/productos/:id',deleteProducto)


/**
 * @swagger
 * /productos/{id}:
 *  put:
 *    summary: La funcion actualiza un producto
 *    tags: [Productos]
 *    parameters:
 *      - $ref: '#/components/parameters/productoId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Producto'
 *    responses:
 *      200:
 *        description: se actualizo el producto
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Productmsm'
 *      404:
 *        description: No se encontro un producto con ese id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *                
 *              
 */

router.put('/productos/:id',updateProducto)

/**********************/
/* PROMART HOMECENTER - CATEGORIAS */
/**********************/


/**
 * @swagger
 * components:
 *  schemas:
 *    Categoria:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: es un id autogenerado
 *        nombre:
 *          type: string
 *          description: nombre del producto
 *      required:
 *        - name
 *      example:
 *        id: iFN08Ubz-oI-Aj8TCcPmV
 *        name: muebles
 *    CategoriaNotFound:
 *     type: object
 *     properties:
 *      sms:
 *        type: string
 *        description: un mensaje por si no existe la categoria
 *     example:
 *        sms: no existe una categoria con ese id
 *    Catgoriamsm:
 *     type: object
 *     properties:
 *      sms:
 *        type: string
 *        description: un mensaje por si no existe la categoria
 *      data:
 *        type: object
 *        description: categoria eliminada
 *     example:
 *      sms: no existe una categoria con ese id
 *      data: 
 *        id: ai7gs9s0fnasf
 *        name: muebles
 *  parameters:
 *    categoriaId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: id de la categoria
 */

/**
 * @swagger
 * tags:
 *  name: Categorias
 *  description: Categorias endpoint
 */


/**
 * @swagger
 * /categorias:
 *  get:
 *    summary: La funcion retorna una lista de categorias
 *    tags: [Categorias]
 *    responses:
 *      200:
 *        description: Optenemos una lista de categorias
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Categoria'
 *              
 */

 router.get('/categorias',getCategorias)

 /**
  * @swagger
  * /categorias:
  *  post:
  *    summary: La funcion registra una categoria
  *    tags: [Categorias]
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Categoria'
  *    responses:
  *      200:
  *        description: creamos una categoria
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Categoria'
  *      500:
  *        description: ocurrio algun error en el servidor
  *              
  */
 
 router.post('/categorias',createCategoria)
 
 
 /**
  * @swagger
  * /categorias/{id}:
  *  get:
  *    summary: La funcion retorna una categoria
  *    tags: [Categorias]
  *    parameters:
  *      - $ref: '#/components/parameters/categoriaId'
  *    responses:
  *      200:
  *        description: Optenemos una categoria
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Categoria'
  *      404:
  *        description: No se encontro una categoria con ese id
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/CategoriaNotFound'
  *                
  *              
  */
 router.get('/categorias/:id',getCategoria)
 
 
 /**
  * @swagger
  * /categorias/{id}:
  *  delete:
  *    summary: La funcion elimina una categoria
  *    tags: [Categorias]
  *    parameters:
  *      - $ref: '#/components/parameters/categoriaId'
  *    responses:
  *      200:
  *        description: eliminamos una categoria
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Categoriamsm'
  *      404:
  *        description: No se encontro una categoria con ese id
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/CategoriaNotFound'
  *                
  *              
  */
 router.delete('/categorias/:id',deleteCategoria)
 
 
 /**
  * @swagger
  * /categorias/{id}:
  *  put:
  *    summary: La funcion actualiza una categoria
  *    tags: [Categorias]
  *    parameters:
  *      - $ref: '#/components/parameters/categoriaId'
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Categoria'
  *    responses:
  *      200:
  *        description: se actualizo la categoria
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Categoriamsm'
  *      404:
  *        description: No se encontro una categoria con ese id
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/CategoriaNotFound'
  *                
  *              
  */
 
 router.put('/categorias/:id',updateCategoria)


 /**********************/
/* PROMART HOMECENTER - INGRESOS*/
/**********************/


/**
 * @swagger
 * components:
 *  schemas:
 *    Ingreso:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: es un id autogenerado
 *        fecha:
 *          type: string
 *          description: fecha de ingreso
 *        productos:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Producto'
 *        total:
 *          type: number
 *          description: precio total de los productos ingresados
 *      required:
 *        - fecha
 *        - productos
 *        - total
 *      example:
 *        id: 08Ubz-oI-Aj8TCcPmV
 *        fecha: 20/07/2022
 *        productos: [
 *          {
 *            "id": "iFN08safz-oI-Aj8TCcfdg",
 *            "nombre": "mesa blanca",
 *            "medida": "unidades",
 *            "stock": 14,
 *            "precio": 149.00,
 *            "categoria": {
 *              "id": "iFN08Ubz-oI-asfsb8B9f",
 *              "nombre": "muebles",
 *            }
 *          },
 *          {
 *            "id": "iFN08safz-oI-AjddCcfdg",
 *            "nombre": "silla blanca",
 *            "medida": "unidades",
 *            "stock": 17,
 *            "precio": 49.00,
 *            "categoria": {
 *              "id": "iFN08Ubz-oI-asfsb8B9f",
 *              "nombre": "muebles",
 *            }
 *          },
 *        ]
 *        total: 198
 *    IngresoNotFound:
 *     type: object
 *     properties:
 *      sms:
 *        type: string
 *        description: un mensaje por si no existe el ingreso
 *     example:
 *        sms: no existe un ingreso con ese id
 *    Ingresomsm:
 *     type: object
 *     properties:
 *      sms:
 *        type: string
 *        description: un mensaje por si no existe el ingreso
 *      data:
 *        type: object
 *        description: ingreso eliminado
 *     example:
 *      sms: no existe un ingreso con ese id
 *      data: 
 *  parameters:
 *    ingresoId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: id del ingreso
 */

/**
 * @swagger
 * tags:
 *  name: Ingresos
 *  description: Ingresos endpoint
 */


/**
 * @swagger
 * /Ingresos:
 *  get:
 *    summary: La funcion retorna una lista de Ingresos
 *    tags: [Ingresos]
 *    responses:
 *      200:
 *        description: Optenemos una lista de Ingresos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Ingreso'
 *              
 */

 router.get('/ingresos',getIngresos)

 /**
  * @swagger
  * /ingresos:
  *  post:
  *    summary: La funcion registra un Ingreso
  *    tags: [Ingresos]
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Ingreso'
  *    responses:
  *      200:
  *        description: creamos un Ingreso
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Ingreso'
  *      500:
  *        description: ocurrio algun error en el servidor
  *              
  */
 
 router.post('/ingresos',createIngreso)
 
 
 /**
  * @swagger
  * /ingresos/{id}:
  *  get:
  *    summary: La funcion retorna un ingreso
  *    tags: [Ingresos]
  *    parameters:
  *      - $ref: '#/components/parameters/ingresoId'
  *    responses:
  *      200:
  *        description: Optenemos un ingreso
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Ingreso'
  *      404:
  *        description: No se encontro un ingreso con ese id
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/IngresoNotFound'
  *                
  *              
  */
 router.get('/ingresos/:id',getIngreso)
 
 
 /**
  * @swagger
  * /ingresos/{id}:
  *  delete:
  *    summary: La funcion elimina un Ingreso
  *    tags: [Ingresos]
  *    parameters:
  *      - $ref: '#/components/parameters/ingresoId'
  *    responses:
  *      200:
  *        description: eliminamos un Ingreso
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Ingresomsm'
  *      404:
  *        description: No se encontro un Ingreso con ese id
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/IngresoNotFound'
  *                
  *              
  */
 router.delete('/ingresos/:id',deleteIngreso)
 
 
 /**
  * @swagger
  * /ingresos/{id}:
  *  put:
  *    summary: La funcion actualiza un ingreso
  *    tags: [Ingresos]
  *    parameters:
  *      - $ref: '#/components/parameters/ingresoId'
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Ingreso'
  *    responses:
  *      200:
  *        description: se actualizo el Ingreso
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Ingresomsm'
  *      404:
  *        description: No se encontro un ingreso con ese id
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/IngresoNotFound'
  *                
  *              
  */
 
 router.put('/ingresos/:id',updateIngreso)


export default router;