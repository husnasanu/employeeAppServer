// import json server
const jsonServer = require('json-server')
// create server for MP
const EMPServer = jsonServer.create()
//create middleware
const middleware = jsonServer.defaults()
//set route for json file
const route = jsonServer.router('db.json')
//to available app in port
const PORT = 3000 || process.env.PORT

EMPServer.use(middleware)
EMPServer.use(route)
EMPServer.listen(PORT,()=>{
    console.log(`employee App server started at port ${PORT} and waiting for client request `);

})