'use client';

import { useCart } from '../context/CartContext'; // Importando o contexto do carrinho
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dados de produtos
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

const ProductPage: React.FC = () => {
  const { addToCart } = useCart();
  const [filterDiscount, setFilterDiscount] = useState<boolean | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [notification, setNotification] = useState<string | null>(null);

  // Função para aplicar o filtro de desconto
  const handleFilterChange = (discount: boolean | null) => {
    setFilterDiscount(discount);

    let filtered = products;

    if (discount !== null) {
      filtered = filtered.filter((product) =>
        discount ? product.discount !== null : product.discount === null
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  // Função para filtrar por pesquisa
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    let filtered = products;

    if (event.target.value) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
    }

    if (filterDiscount !== null) {
      filtered = filtered.filter((product) =>
        filterDiscount ? product.discount !== null : product.discount === null
      );
    }

    setFilteredProducts(filtered);
  };

  // Adicionar ao carrinho com notificação
  const handleAddToCart = (product: any) => {
    addToCart(product);
    setNotification(`${product.title} foi adicionado ao carrinho!`);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Produtos Orgânicos</h1>

      {/* Notificação */}
      {notification && (
        <div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
        >
          {notification}
        </div>
      )}

      {/* Filtros */}
      <div className="mb-6 flex items-center">
        <label htmlFor="discount-filter" className="mr-4">
          Filtrar por desconto:
        </label>
        <select
          id="discount-filter"
          className="p-2 border rounded-md mr-6"
          onChange={(e) =>
            handleFilterChange(
              e.target.value === 'all'
                ? null
                : e.target.value === 'with'
                ? true
                : false
            )
          }
        >
          <option value="all">Todos</option>
          <option value="with">Com desconto</option>
          <option value="without">Sem desconto</option>
        </select>

        <input
          type="text"
          placeholder="Pesquisar por nome"
          className="p-2 border rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <div className="text-lg font-medium text-gray-700 mb-2">
              {product.price}
            </div>
            {product.discount ? (
              <div className="text-red-500 font-semibold">{`Desconto: ${product.discount}`}</div>
            ) : (
              <div className="text-green-500 font-semibold">Sem desconto</div>
            )}

            {/* Ações */}
            <div className="flex justify-between items-center mt-4">
              {/* Botão Adicionar ao Carrinho */}
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all"
                title="Adicionar ao Carrinho"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                  stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

              </button>

              {/* Botão Ver Detalhes */}
              <Link
                href={`/products/${product.id}`}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
                title="Ver Detalhes"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>

              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
