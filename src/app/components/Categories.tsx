'use client';

import Image from 'next/image';
import Link from 'next/link'; // Importação do Link para navegação

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: 'Frutas Frescas',
      description: 'A melhor seleção de frutas frescas diretamente do campo.',
      image: '/images/categories/category-1.jpg',
      link: '/categorias/frutas', // Caminho da página para Frutas
    },
    {
      id: 2,
      title: 'Vegetais',
      description: 'Vegetais orgânicos para uma alimentação saudável e equilibrada.',
      image: '/images/categories/category-2.jpg',
      link: '/categorias/vegetais', // Caminho da página para Vegetais
    },
    {
      id: 3,
      title: 'Sumos',
      description: 'Sumos naturais preparados com os melhores ingredientes.',
      image: '/images/categories/category-3.jpg',
      link: '/categorias/sumos', // Caminho da página para Sumos
    },
    {
      id: 4,
      title: 'Produtos Secos',
      description: 'Frutos secos ricos em nutrientes para o seu dia a dia.',
      image: '/images/categories/category-4.jpg',
      link: '/categorias/produtos-secos', // Caminho da página para Produtos Secos
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Título da seção */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Explore as Nossas Categorias
      </h2>

      {/* Grid de Categorias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link key={category.id} href={category.link}>
            <div
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Imagem */}
              <div className="w-full h-56 relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="fill"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>

              {/* Efeito no hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
