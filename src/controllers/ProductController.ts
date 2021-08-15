/* eslint-disable @typescript-eslint/no-explicit-any */
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
  // Update
  async put(req: Request, res: Response): Promise<Response> {
    const product: any = await Product.findOne(req.body);
    const newProduct = await Product.updateOne({ _id: product._id }, { quantity: product.quantity - 1 });

    return res.json(newProduct);
  },
};
