import Image from 'next/image'; // Importando o componente Image do Next.js

const opinions = [
  {
    name: "Maria Silva",
    title: "Cliente Satisfeita",
    description: "Os legumes são super frescos e saborosos! A entrega foi rápida e o atendimento excelente. Com certeza vou comprar novamente!",
    image: "/images/custumerReview/01.jpg",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    title: "Cliente Satisfeito",
    description: "A qualidade dos produtos é excepcional! Adorei o atendimento e a praticidade de comprar online. Recomendo a todos.",
    image: "/images/custumerReview/02.jpg",
    rating: 5
  },
  {
    name: "Ana Costa",
    title: "Cliente Feliz",
    description: "Adorei a experiência de compra! Produtos frescos e entrega no prazo. Com certeza voltarei a comprar!",
    image: "/images/custumerReview/04.jpg",
    rating: 5
  }
];

const CustomerReviews = () => {
  return (
    <section className="customer-reviews py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-600">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {opinions.map((opinion, index) => (
            <div key={index} className="review-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Image
                  src={opinion.image}
                  alt={opinion.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{opinion.name}</h3>
                  <p className="text-gray-500">{opinion.title}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{opinion.description}</p>
              <div className="flex text-yellow-500">
                {[...Array(opinion.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 9.91 8.63 3 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
