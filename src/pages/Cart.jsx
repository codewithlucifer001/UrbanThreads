import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Minus, X, ShoppingCart, PartyPopper } from 'lucide-react';

const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };
  
  if (orderPlaced) {
    return (
      <div className="bg-dark text-white text-center py-20 min-h-screen flex flex-col justify-center items-center">
        <PartyPopper className="h-16 w-16 text-gold mb-4" />
        <h2 className="text-3xl font-bold mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-400 mb-8">Thank you for shopping with UrbanThreads!</p>
        <Link 
          to="/store"
          className="bg-gold text-dark font-bold py-3 px-6 rounded-lg hover:bg-gold-light transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-dark text-white text-center py-20 min-h-screen flex flex-col justify-center items-center">
        <ShoppingCart className="h-16 w-16 text-gold mb-4" />
        <h2 className="text-3xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/store"
          className="bg-gold text-dark font-bold py-3 px-6 rounded-lg hover:bg-gold-light transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Cart Items */}
          <div className="lg:col-span-2 bg-dark-card p-6 rounded-lg space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-700 pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.category}</p>
                    <p className="text-gold font-semibold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-700 rounded-lg">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-700 rounded-l-lg transition-colors">
                      <Minus size={16} />
                    </button>
                    <span className="px-3 font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-700 rounded-r-lg transition-colors">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400 transition-colors">
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Order Summary */}
          <div className="bg-dark-card p-6 rounded-lg h-fit">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-semibold">${cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-xl border-t border-gray-700 pt-2">
              <span>Total</span>
              <span className="text-gold">${cartTotal}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-gold text-dark font-bold py-3 mt-6 rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
