'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container mx-auto px-4 py-16" id="about">
      {/* Título da seção */}
      {/*
            <h2 className="text-4xl font-bold text-center mb-12">Cuidamos do Crescimento de Produtos Orgânicos
         e Alimentares</h2>
      */}


      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Lado esquerdo (Texto) */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            {/*Sobre os Nossos Produtos Orgânicos*/}
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Cuidamos do Crescimento de Produtos Orgânicos
          e Alimentares </h3>
          <p className="text-lg text-gray-600">
            Estamos dedicados a garantir o crescimento dos produtos alimentares orgânicos, com foco na qualidade, sustentabilidade e entrega de produtos frescos diretamente à sua porta. A nossa missão é fornecer opções alimentares saudáveis, nutritivas e ecológicas para si e para a sua família.
          </p>
        </div>

        {/* Lado direito (Imagem com ícone de play) */}
        <div className="col-span-12 md:col-span-6 relative">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/about.jpg" // Substitua com a imagem que deseja
              alt="Sobre o Nosso Vídeo"
              layout="fill"
              className="object-cover rounded-lg"
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white
               text-4xl cursor-pointer"
              onClick={handleOpenModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 4v16l12-8-12-8z"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal do Vídeo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-full md:w-2/3 lg:w-1/2">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="360px"
                src="https://www.youtube.com/embed/WNMUH0doU6U?si=GW5JlrNfQ1L3Zi0V" // Substitua com o link do seu vídeo
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Vídeo Sobre Nós"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUsSection;
