/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer';

export const handleSendMail = (): any => {
  // Configurando conta para enviar e-mails
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'safestore.contact@gmail.com',
      pass: 'safestore123',
    },
  });

  // Definindo destino e conteudo
  transporter
    .sendMail({
      from: 'Safe Store <safestore.contact@gmail.com>',
      to: 'eduzuppo@gmail.com',
      subject: 'Produto Esgotado - Safe Store',
      text: 'Parece que um produto esgotou!',
      html: 'Não perca tempo, corra na <a href="https://google.com.br">Safe Store</a> e estoque seu produto em falta.',
    })
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.log(err);
    });
};
