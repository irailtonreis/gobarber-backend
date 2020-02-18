import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res)=>{
  return res.json({message: 'hello Rocket'});
})

export default routes;