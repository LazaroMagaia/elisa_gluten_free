'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const GreenStoreSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-green-100">
      {/* Título da seção com animação */}
      <motion.h2
        className="text-4xl font-bold text-center text-green-800 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        O que é a Green Store?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lado esquerdo (Título e Benefícios) */}
        <div className="flex flex-col justify-center">
          <p className="text-xl text-gray-700 mb-8">
            A Green Store oferece produtos ecológicos e sustentáveis, com a missão de fornecer alimentos orgânicos de qualidade para um futuro mais saudável e verde.
          </p>

          {/* Benefícios */}
          <div className="space-y-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg text-gray-800">Envio Grátis: Com compras acima de $90, aproveite o envio gratuito.</p>
            </div>

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 0v4m0-4H8m4 0h4" />
              </svg>
              <p className="text-lg text-gray-800">100% Alimentos Orgânicos: Alimentos frescos e certificados com o melhor sabor.</p>
            </div>

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2 2l4-4m4 4l2-2l4 4" />
              </svg>
              <p className="text-lg text-gray-800">Pagamento Seguro: Realize suas compras com total segurança.</p>
            </div>

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-6m0 0l4-4m-4 4l-4-4" />
              </svg>
              <p className="text-lg text-gray-800">Suporte Amigável: Nossa equipe está sempre pronta para ajudar você.</p>
            </div>
          </div>
        </div>

        {/* Lado direito (Imagem) */}
        <div className="relative">
          <Image
            src="/images/green-store.jpg" // Substitua com a imagem desejada
            alt="Green Store"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GreenStoreSection;
