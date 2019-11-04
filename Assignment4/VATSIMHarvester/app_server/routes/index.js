var express = require('express');
var router = express.Router();

// //in class example
// const client = {
//   id: 100,
//   pilot: "dude",
//   role: "pilot"
// };

// //in class example array
// const client = [
//   {
//     id: 100,
//    pilot: "dude",
//    role: "pilot"
//   },
//   {
//     id: 100,
//    pilot: "dude",
//    role: "pilot"
//   }
// ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// //in class example
// /*get a single client object */
// render.get('/api/one', function(req, res, next) {
//   //what do we do here?
//   res.send(`${client.name} is a ${client.role}`);
// });
// //in class example
// /*get a single client object */
// render.get('/api/json/one', function(req, res, next) {
//   //what do we do here?
//   res.json(client);
// });

module.exports = router;
//rout called API/ /