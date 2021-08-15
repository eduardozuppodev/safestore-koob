// Importações
import { Router } from 'express';
import ProductController from './controllers/ProductController';

const routes = Router();

// Endpoints
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.put('/products', ProductController.put);

export default routes;
