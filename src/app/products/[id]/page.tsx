'use client';

import Image from 'next/image';
import { useCart } from '../../context/CartContext'; // Importando o contexto do carrinho
import { useState } from 'react';

// Componente da página de detalhes do produto
const ProductDetailPage = () => {
  const { addToCart } = useCart(); // Contexto do carrinho
  const [notification, setNotification] = useState<string | null>(null); // Notificação de ação

  // Dados fictícios do produto
  const product = {
    id: 1,
    title: 'Pimentão Orgânico',
    image: '/images/products/product-1.jpg',
    description:
      'Pimentão fresco e orgânico, colhido de fazendas locais. Ideal para saladas, refogados e muito mais.',
    price: 'MZN 1.200,00',
    originalPrice: 'MZN 1.500,00',
    discount: '20%',
  };

  // Função para adicionar ao carrinho com notificação
  const handleAddToCart = () => {
    addToCart(product);
    setNotification(`${product.title} foi adicionado ao carrinho!`);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Função para voltar para a página anterior
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container mx-auto px-6 py-12 mt-10">
      {/* Notificação */}
      {notification && (
        <div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 
          rounded-lg shadow-lg z-50"
        >
          {notification}
        </div>
      )}

      {/* Botão Voltar */}
      <button
        onClick={handleGoBack}
        className="mb-6 text-green-600 hover:text-green-800 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
          strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Voltar
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagem do Produto */}
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Detalhes do Produto */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            {product.price}{' '}
            {product.discount && (
              <span className="text-gray-500 text-xl line-through ml-2">
                {product.originalPrice}
              </span>
            )}
          </p>

          <div className="flex items-center space-x-4">
            {/* Botão de Adicionar ao Carrinho */}
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
              onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </button>

            {/* Botão de Comprar Agora */}
            <button
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
              onClick={() => alert('Funcionalidade Comprar Agora em construção!')}
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
