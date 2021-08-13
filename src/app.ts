// Importações
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

// Iniciando app
const app = express();

// Configurando JSON
app.use(express.json());

// Configurando CORS
app.use(cors());

// Conectando ao Atlas
try {
  mongoose.connect(
    'mongodb+srv://ezuppo:dudu17022002@cluster0.5pw6a.mongodb.net/safestore?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  );
  console.log('Conectado com Sucesso!');
} catch (error) {
  console.log('Erro ao se conectar:', error);
}

// Chamando as rotas
app.use(routes);

export default app;
