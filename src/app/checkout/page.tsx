"use client";
import { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Verifique se o localStorage contém os itens do carrinho
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart)); // Parse os itens e define o estado
    }
  }, []);

  // Função para atualizar o localStorage
  const updateCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Função para calcular o total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('MZN', '').replace('.', '').replace(',', '.')); // Corrige o preço
      return total + price * item.quantity;
    }, 0);
  };

  // Função para incrementar a quantidade
  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  // Função para decrementar a quantidade
  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCart(updatedCart);
  };

  // Função para remover o produto do carrinho
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  return (
    <div className="checkout-page container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Página de Checkout</h1>
      
      {/* Exibindo os produtos no carrinho */}
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item flex items-center justify-between mb-4 p-4 border-b">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              <div className="item-details flex-1 pl-4">
                <h2 className="font-bold">{item.title}</h2>
                <p>{item.discount ? `Desconto: ${item.discount}` : 'Sem desconto'}</p>
                <p className="text-sm">Preço: {item.price}</p>
                <p className="text-sm">Quantidade: {item.quantity}</p>
              </div>

              {/* Controles de quantidade */}
              <div className="item-controls flex items-center space-x-4">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              {/* Botão de remover */}
              <button
                onClick={() => removeItem(item.id)}
                className="mx-2 bg-gray-300 text-red-500 px-2 py-1 rounded hover:bg-gray-600"
              >
                <span className="font-bold">X</span> {/* Ícone de "X" */}
              </button>

              {/* Total do item */}
              <div className="item-total font-semibold">
                {(
                  item.quantity *
                  parseFloat(item.price.replace('MZN', '').replace('.', '').replace(',', '.'))
                ).toFixed(2)} MZN
              </div>
            </div>
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>
      
      {/* Exibindo o total */}
      <div className="checkout-total mt-6 text-right">
        <h3 className="text-xl font-semibold">Total: MZN {calculateTotal().toFixed(2)}</h3>
      </div>

      {/* Botão de finalizar compra */}
      <div className="checkout-button mt-6">
        <button
          onClick={() => alert('Compra finalizada!')}
          className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-all duration-300"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
