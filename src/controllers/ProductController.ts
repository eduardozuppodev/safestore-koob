// Importações
import { Request, Response } from 'express';
import { Product } from '../schemas/Product';
import { handleSendMail } from '../services/sendMail';

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

    if (req.body.quantity == 0) {
      handleSendMail();
    }

    return res.json(product);
  },
};
