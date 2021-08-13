import { Document, Schema, Model, model } from 'mongoose';
import { ProductInterface } from '../interfaces/Product';

// Criando interface
export interface ProductModel extends ProductInterface, Document {}

// Criação do Schema
const ProductSchema = new Schema(
  {
    name: String,
    brand: String,
    category: String,
    price: String,
    quantity: Number,
  },
  {
    timestamps: true,
  },
);

export const Product: Model<ProductModel> = model<ProductModel>('Product', ProductSchema);
