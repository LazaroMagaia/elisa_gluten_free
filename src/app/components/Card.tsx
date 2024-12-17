'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CardSection = () => {
  const cards = [
    {
      title: "100% Vital",
      text: "Repleto de nutrientes essenciais.",
      image: '/images/no_bg/feature-thumb.png',
      background: 'bg-green-600',
      buttonText: 'Saber Mais'
    },
    {
      title: "Diariamente Fresco",
      text: "Comida fresca e higiénica todos os dias.",
      image: '/images/no_bg/feature-thumb-2.png',
      background: 'bg-yellow-400',
      buttonText: 'Comprar Agora'
    },
    {
      title: "Da Quinta para a Mesa",
      text: "Produtos frescos entregues diretamente a si.",
      image: '/images/no_bg/feature-thumb-3.png',
      background: 'bg-blue-500',
      buttonText: 'Encomendar Agora'
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Título da seção */}
      {/*
            <h2 className="text-4xl font-bold text-center mb-12">Descubra os Nossos Produtos Frescos e Orgânicos</h2>
      */}

      <div className="flex flex-wrap md:flex-nowrap gap-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-lg ${card.background} w-full md:w-1/3 group`}
          >
            <div className="flex flex-row items-center p-6">
              {/* Lado esquerdo (Texto) */}
              <div className="flex-1 mb-4 md:mb-0">
                <h3 className="text-md font-semibold text-white mb-4">{card.title}</h3>
                <p className="text-white mb-4 text-xl font-bold">{card.text}</p>

                {/* Botão com animação de preenchimento */}
                <motion.button
                  className="bg-white text-black px-6 py-2 rounded-lg"
                  whileHover={{
                    backgroundColor: '#000', // Cor de fundo preta no hover
                    color: '#fff', // Cor do texto branca no hover
                    scale: 1.1, // Aumenta o botão levemente
                    transition: { duration: 0.3 }, // Define duração suave
                  }}
                >
                  {card.buttonText}
                </motion.button>
              </div>

              {/* Lado direito (Imagem) */}
              <div className="flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="object-contain md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-container"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
