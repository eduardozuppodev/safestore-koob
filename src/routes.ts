// Importações
import { Router } from 'express';
import ProductController from './controllers/ProductController';

const routes = Router();

// Rotas para criação e listagem de produtos
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

export default routes;
