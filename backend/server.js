const express = require( 'express' );
const path =require( 'path' );
const cors = require( 'cors' ); 
const bodyParser = require( 'body-parser' ); 
 
const db = require( './db' ); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const testRoute = require('../backend/routes/test');

app.use(cors());

app.use('/', express.static(path.join(__dirname, 'dist/bankRouter')));
app.use('/test', testRoute);

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404))
// })
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})