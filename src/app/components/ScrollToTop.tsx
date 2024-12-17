'use client';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar a posição da rolagem
  const checkScrollPosition = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);  // Exibe o botão se o usuário rolar mais de 300px
    } else {
      setIsVisible(false); // Esconde o botão se o usuário estiver no topo
    }
  };

  // Hook para adicionar o evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  // Função para rolar suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg 
        hover:bg-green-700 transition duration-300"
        aria-label="Voltar ao topo" style={{ zIndex:9 }}
        >
       <i className="fa-solid fa-arrow-up text-2xl"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;
