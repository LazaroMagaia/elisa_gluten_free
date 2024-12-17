'use client';

import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    { id: 1, logo: '/images/partners/partner-1.png', alt: 'Parceiro 1' },
    { id: 2, logo: '/images/partners/partner-2.png', alt: 'Parceiro 2' },
    { id: 3, logo: '/images/partners/partner-3.png', alt: 'Parceiro 3' },
    { id: 4, logo: '/images/partners/partner-4.png', alt: 'Parceiro 4' },
    { id: 5, logo: '/images/partners/partner-5.png', alt: 'Parceiro 5' },
  ];

  return (
    <section className="bg-gray-100">
        <div className='container mx-auto px-4 py-4'>
        {/* 
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
                Nossos Parceiros
            </h2>
        */}
 

            {/* Grid de Parceiros */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 
                items-center justify-center">
                {partners.map((partner) => (
                <div
                    key={partner.id}
                    className="flex justify-center items-center"
                >
                    <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={150}
                    height={150}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                    />
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default PartnersSection;
