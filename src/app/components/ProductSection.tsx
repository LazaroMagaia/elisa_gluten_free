'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../context/CartContext'; // Importando o contexto do carrinho
import Link from 'next/link';

const ProductsSection = () => {
  const { addToCart } = useCart(); // Usando o contexto para acessar o carrinho
  const [notification, setNotification] = useState<string | null>(null); // Estado para gerenciar notificações

  const products = [
    {
      id: 1,
      title: 'Pimentão',
      image: '/images/products/product-1.jpg',
      price: 'MZN 1.200,00',
      discount: '10%',
    },
    {
      id: 2,
      title: 'Morango',
      image: '/images/products/product-2.jpg',
      price: 'MZN 900,00',
      discount: null,
    },
    {
      id: 3,
      title: 'Feijão Verde',
      image: '/images/products/product-3.jpg',
      price: 'MZN 1.500,00',
      discount: '15%',
    },
    {
      id: 4,
      title: 'Repolho Roxo',
      image: '/images/products/product-4.jpg',
      price: 'MZN 1.000,00',
      discount: null,
    },
  ];

  // Função para adicionar ao carrinho com notificação
  const handleAddToCart = (product: any) => {
    addToCart(product);
    setNotification(`${product.title} foi adicionado ao carrinho!`);

    // Remove a notificação após 3 segundos
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-white" id="products">
      {/* Notificação */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}

      <motion.h2
        className="text-5xl font-bold text-center text-green-800 mb-12 leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Descubra Nossos Produtos Frescos e Orgânicos
      </motion.h2>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge de Desconto */}
            {product.discount && (
              <div className="absolute top-4 left-4 bg-green-600 text-white text-sm px-4 py-2 rounded-lg">
                {product.discount}
              </div>
            )}

            {/* Imagem do Produto */}
            <div className="w-full h-56 relative">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="overlay-gradient-product-home absolute inset-0 to-transparent opacity-70"></div>
            </div>

            {/* Conteúdo do Produto */}
            <div className="p-6 bg-white rounded-b-2xl transition-all duration-300 ease-in-out group-hover:border-green-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-lg font-bold text-green-800">{product.price}</p>
            </div>

            {/* Botões de ação */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {/* Botão Adicionar ao Carrinho */}
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-600 text-white p-3 rounded-full cursor-pointer hover:bg-green-800 transition-all duration-300"
                title="Adicionar ao Carrinho"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

              </button>

              {/* Botão Detalhes */}
              <Link
                href={`/products/${product.id}`} // Link para a página de detalhes do produto
                className="bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-blue-800 transition-all duration-300"
                title="Ver Detalhes"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>

              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botão de Ver Mais */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Link
          href="/products"
          className="bg-green-600 text-white text-lg py-2 px-8 rounded-full shadow-md hover:bg-green-800 transition-all duration-300"
        >
          Ver Todos os Produtos
        </Link>
      </motion.div>
    </section>
  );
};

export default ProductsSection;
