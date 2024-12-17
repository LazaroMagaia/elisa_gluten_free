import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Ícones de redes sociais

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Links úteis */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links úteis</h3>
            <ul>
              <li><a href="/about" className="text-gray-400 hover:text-green-600">Sobre nós</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-green-600">Produtos</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-green-600">Contato</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-green-600">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Coluna 2 - Informações de Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
            <p className="text-gray-400">Rua 1318, 10 - Maputo</p>
            <p className="text-gray-400">Telefone: (82) 1115-123</p>
            <p className="text-gray-400">Email: contato@Elisaglúten.com</p>
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600">
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600">
                <i className="fa-brands fa-x-twitter text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600">
                <i className="fa-brands fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Receba nossas novidades</h3>
            <p className="text-gray-400 mb-4">Inscreva-se para receber ofertas e atualizações.</p>
            <form>
              <input 
                type="email" 
                placeholder="Digite seu e-mail" 
                className="p-2 w-full rounded-md border border-gray-300 mb-4"
              />
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        {/* Direitos Autorais */}
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; 2024 Elisa's glúten free. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
