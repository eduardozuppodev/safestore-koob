// Importações
import { Request, Response } from 'express';
import { Product } from '../schemas/Product';

// Criando Controller
export default {
  // Find
  async index(req: Request, res: Response): Promise<Response> {
    const products = await Product.find();

    return res.json(products);
  },
  // Create
  async store(req: Request, res: Response): Promise<Response> {
    const product = await Product.create(req.body);

    return res.json(product);
  },
};
