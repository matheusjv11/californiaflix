const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://californiaflix.vercel.app/')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});
