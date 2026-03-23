import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import allProducts from '../data/products.json';
import { Search } from 'lucide-react';

const Store = () => {
  const location = useLocation();
  const getCategoryFromURL = () => {
    const params = new URLSearchParams(location.search);
    return params.get('category') || 'All';
  };

  const [activeFilter, setActiveFilter] = useState(getCategoryFromURL());
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'T-Shirts', 'Jeans', 'Shoes'];

  const filteredProducts = useMemo(() => {
    return allProducts
      .filter(product => activeFilter === 'All' || product.category === activeFilter)
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [activeFilter, searchTerm]);

  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gold">Our Collection</h1>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap justify-center gap-2 bg-dark-card p-2 rounded-lg">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 ${
                  activeFilter === category
                    ? 'bg-gold text-dark'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="bg-dark-card border border-gray-700 focus:border-gold rounded-lg py-2 pl-10 pr-4 w-full md:w-64 transition-colors duration-300 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
