
const CompanyAdvantages = () => {
  return (
    <section className="company-advantages py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-600">
          Vantagens de Comprar Conosco
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Vantagem 1 - Envio Grátis */}
          <div className="advantage-card bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:bg-green-100 transition-all duration-300">
            <div className="icon-container bg-green-600 p-4 rounded-full text-white mb-4 inline-block">
              <i className="fa-solid fa-cart-shopping text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Envio Grátis</h3>
            <p className="text-gray-600">
              Em pedidos acima de 1.200 MZN , você recebe o envio gratuitamente!
            </p>
          </div>

          {/* Vantagem 2 - Sempre Fresco */}
          <div className="advantage-card bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:bg-green-100 transition-all duration-300">
            <div className="icon-container bg-green-600 p-4 rounded-full text-white mb-4 inline-block">
                <i className="fa-solid fa-leaf text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Sempre Fresco</h3>
            <p className="text-gray-600">
              Garantimos a frescura dos nossos produtos para você aproveitar o melhor da natureza.
            </p>
          </div>

          {/* Vantagem 3 - Embalagem Segura */}
          <div className="advantage-card bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:bg-green-100 transition-all duration-300">
            <div className="icon-container bg-green-600 p-4 rounded-full text-white mb-4 inline-block">
                <i className="fa-solid fa-box-open text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Embalagem Segura</h3>
            <p className="text-gray-600">
              Todos os nossos produtos são embalados com cuidado para garantir que cheguem em perfeitas condições.
            </p>
          </div>

          {/* Vantagem 4 - Produtos de Qualidade */}
          <div className="advantage-card bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:bg-green-100 transition-all duration-300">
            <div className="icon-container bg-green-600 p-4 rounded-full text-white mb-4 inline-block">
                <i className="fa-solid fa-circle-check text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Produtos de Qualidade</h3>
            <p className="text-gray-600">
              Nossos produtos são cuidadosamente selecionados para garantir frescor e sabor excepcionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantages;
