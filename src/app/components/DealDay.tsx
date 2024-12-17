'use client';

import Image from 'next/image'; // Importando o componente Image do Next.js
import { useState } from 'react';
import { useCart } from '../context/CartContext'; // Importando o contexto do carrinho

const DealOfTheDay = () => {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState<string | null>(null); // Estado da notificação

  const product = {
    id: 4,
    title: 'Repolho Roxo',
    image: '/images/products/product-4.jpg',
    price: 'MZN 1.000,00',
    discount: null,
  };

  // Função para adicionar ao carrinho e mostrar notificação
  const handleAddToCart = () => {
    addToCart(product);
    setNotification(`${product.title} foi adicionado ao carrinho!`);

    // Remove a notificação após 3 segundos
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <section className="deal-of-the-day bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-600">
          Oferta do Dia
        </h2>

        {/* Notificação */}
        {notification && (
          <div
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
          >
            {notification}
          </div>
        )}

        <div className="flex items-center justify-center space-x-8">
          <div className="deal-image w-1/2 relative">
            <Image
              src="/images/products/product-4.jpg"
              alt="Oferta do Dia"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="deal-details w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Legumes Orgânicos Frescos
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Obtenha os melhores legumes orgânicos entregues diretamente à sua porta. Frescos, saudáveis e cheios de nutrientes!
            </p>
            <p className="text-2xl font-bold text-green-600 mb-4">
              1.200 MZN <span className="line-through text-gray-500">1.800 MZN</span>
            </p>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
              onClick={handleAddToCart}
            >
              Compre Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
