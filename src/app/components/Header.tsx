'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext'; // Importe o hook useCart
import Link from 'next/link';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // Estado para controlar o modal do carrinho
  const [showMore, setShowMore] = useState(false); // Estado para controlar a exibição de mais itens

  const { cart, addToCart, removeFromCart, decreaseQuantity } = useCart(); // Usando o contexto para acessar e manipular o carrinho

  const menuItems = [
    { label: 'Início', href: '/#home' },
    { label: 'Sobre nós', href: '/#about' },
    { label: 'Produtos', href: '/products' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen); // Alterna o estado do modal do carrinho
  };

  const handleSearch = () => {
    console.log('Buscando por:', searchQuery);
    setIsSearchModalOpen(false); // Fecha o modal após a pesquisa
  };

  const handleClickOutside = (e) => {
    if (e.target.id === 'cart-modal-overlay') {
      setIsCartModalOpen(false); // Fecha o modal do carrinho ao clicar fora
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="main-nav flex items-center justify-between p-4">
          {/* Menu Items (Left side) */}
          <div className="flex space-x-6 hidden lg:block">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:underline hover:text-yellow-300 transition-all duration-300">
              {item.label}
              </Link>
            ))}
          </div>

          {/* Logo (Center) */}
          <div className="logo text-xl lg:text-2xl font-bold text-center flex-1">
            🌱 Elisa's glúten free
          </div>

          {/* Icons (Right side): Search and Cart */}
          <div className="flex space-x-6">
            {/* Search Icon */}
            <div
              className="search-icon text-2xl cursor-pointer"
              onClick={toggleSearchModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            
            {/* Cart Icon */}
            <div className="cart-icon text-2xl cursor-pointer relative" onClick={toggleCartModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round"
                   d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              {/* Mostra a quantidade de itens no carrinho */}
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                  {cart.length}
                </span>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="menu-toggle block lg:hidden text-2xl focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span>{!isMobileMenuOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
              :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg> }
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Modal for Cart (Dropdown) */}
      {isCartModalOpen && (
        <div
          id="cart-modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white p-6 rounded-l-lg w-80 h-[80vh] overflow-y-auto transform transition-all ease-in-out duration-300 shadow-lg" style={{ transform: isCartModalOpen ? 'translateX(0)' : 'translateX(100%)' }}>
            {/* Close Button */}
            <button 
              onClick={() => setIsCartModalOpen(false)} 
              className="absolute top-4 right-4 text-2xl text-black hover:text-red-600 focus:outline-none"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-black">Seu Carrinho</h2>
            {cart.length > 0 ? (
              <ul className="space-y-4">
                {cart.slice(0, 3).map((item) => (
                  <li key={item.id} className="flex justify-between items-center text-black border-b pb-2">
                    <span className="flex-1">{item.title}</span>
                    <div className="flex items-center space-x-2">
                      {/* Botão de diminuir a quantidade */}
                      {item.quantity > 1 && (
                        <button
                          className="border p-2 rounded hover:bg-yellow-100"
                          onClick={() => decreaseQuantity(item.id)} // Diminuir a quantidade do item
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" />
                          </svg>
                        </button>
                      )}
                      {/* Quantidade do item */}
                      <span>{item.quantity}</span>
                      {/* Botão de adicionar a quantidade */}
                      <button
                        className="border p-2 rounded hover:bg-green-100"
                        onClick={() => addToCart(item)} // Usando addToCart para adicionar outra unidade do item
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                        </svg>
                      </button>
                      {/* Botão de remover o item */}
                      <button
                        className="border border-red-600 p-2 rounded hover:bg-red-100"
                        onClick={() => removeFromCart(item.id)} // Remover o item
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
                {cart.length > 3 && !showMore && (
                  <li className="text-center">
                    <button
                      className="text-blue-600 hover:text-blue-700"
                      onClick={() => setShowMore(true)}
                    >
                      Mostrar mais
                    </button>
                  </li>
                )}
                {showMore && cart.slice(3).map((item) => (
                  <li key={item.id} className="flex justify-between items-center text-black border-b pb-2">
                    <span className="flex-1">{item.title}</span>
                    <div className="flex items-center space-x-2">
                      {/* Botão de diminuir a quantidade */}
                      {item.quantity > 1 && (
                        <button
                          className="border border-yellow-600 p-2 rounded hover:bg-yellow-100"
                          onClick={() => decreaseQuantity(item.id)} // Diminuir a quantidade do item
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" />
                          </svg>
                        </button>
                      )}
                      {/* Quantidade do item */}
                      <span>{item.quantity}</span>
                      {/* Botão de adicionar a quantidade */}
                      <button
                        className="border border-yellow-600 p-2 rounded hover:bg-yellow-100"
                        onClick={() => addToCart(item)} // Usando addToCart para adicionar outra unidade do item
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                        </svg>
                      </button>
                      {/* Botão de remover o item */}
                      <button
                        className="border border-red-600 p-2 rounded hover:bg-red-100"
                        onClick={() => removeFromCart(item.id)} // Remover o item
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center text-black">Seu carrinho está vazio.</div>
            )}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => window.location.href = '/checkout'} // Redireciona para a página de checkout
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all 
                duration-300">
                Finalizar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
