import { Star, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { name, price, category, image, rating, id } = product;
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  };
  
  const handleCardClick = () => {
    navigate(`/store/${id}`);
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full_${i}`} className="text-gold fill-gold h-5 w-5" />);
    }
    if (halfStar) {
      stars.push(<Star key="half" className="text-gold fill-gold h-5 w-5" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty_${i}`} className="text-gray-400 fill-gray-400 h-5 w-5" />);
    }
    return stars;
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-dark-card rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group border border-transparent hover:border-gold cursor-pointer"
    >
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt={name} />
        <div className="absolute top-0 right-0 bg-gold text-dark px-2 py-1 m-2 rounded-md text-sm font-semibold">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">{name}</h3>
        <div className="flex items-center my-2">
          {renderStars()}
          <span className="ml-2 text-sm text-gray-400">{rating.toFixed(1)}</span>
        </div>
        <p className="text-gold text-xl font-bold mb-4">${price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-gold text-dark font-bold py-2 px-4 rounded-md hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
