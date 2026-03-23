import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ArrowLeft } from 'lucide-react';
import allProducts from '../data/products.json';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, updateQuantity } = useCart();
  const product = allProducts.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="bg-dark text-white text-center py-20">
        <h2 className="text-3xl font-bold">Product not found</h2>
        <Link to="/store" className="mt-4 inline-block text-gold hover:text-gold-light">
          Back to Store
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };
  
  const handleUpdateQuantity = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-6 w-6 ${i < product.rating ? 'text-gold fill-gold' : 'text-gray-600'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-dark text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/store" className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-8">
          <ArrowLeft size={20} />
          <span>Continue Shopping</span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side: Image */}
          <div className="bg-dark-card p-4 rounded-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto max-h-[500px] object-contain rounded-lg"
            />
          </div>

          {/* Right Side: Details */}
          <div className="flex flex-col justify-center">
            <span className="bg-gold text-dark px-3 py-1 rounded-full text-sm font-semibold self-start">
              {product.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold my-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {renderStars()}
              <span className="text-gray-400">({product.rating.toFixed(1)} rating)</span>
            </div>
            <p className="text-gold text-4xl font-bold mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>
            <p className="text-green-500 font-semibold mb-6">
              {product.stock > 0 ? `${product.stock} items in stock` : 'Out of Stock'}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border border-gray-700 rounded-lg">
                <button onClick={() => handleUpdateQuantity(-1)} className="p-3 hover:bg-gray-700 rounded-l-lg transition-colors">
                  <Minus size={16} />
                </button>
                <span className="px-4 font-bold">{quantity}</span>
                <button onClick={() => handleUpdateQuantity(1)} className="p-3 hover:bg-gray-700 rounded-r-lg transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-gold text-dark font-bold py-3 px-6 rounded-lg hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
