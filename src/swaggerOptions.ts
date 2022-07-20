export const options = {
  definition:{
    openapi: "3.0.0",
    info:{
      title: 'Promart API',
      version: '1.0.0',
      description: "Documentacion API"
    },
    servers:[
      {
        url:"http://localhost:3000"
      }
    ]
  },
  apis:["./src/routes/*.ts"]
}