import { Link } from 'react-router-dom';
import { Truck, Award, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const categoryData = [
    { name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', link: '/store?category=T-Shirts' },
    { name: 'Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500', link: '/store?category=Jeans' },
    { name: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', link: '/store?category=Shoes' },
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://www.pexels.com/video/7710253/download/"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
        <div className="relative z-20 text-center space-y-4">
          <p className="text-gold text-lg font-semibold tracking-widest">NEW COLLECTION 2026</p>
          <h1 className="text-5xl md:text-7xl font-extrabold">Elevate Your Style</h1>
          <p className="text-gray-300 max-w-md mx-auto">
            Premium fashion for those who demand the best
          </p>
          <Link
            to="/store"
            className="inline-block bg-gold text-dark font-bold py-3 px-8 rounded-md hover:bg-gold-light transition-colors duration-300 text-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-secondary-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryData.map(category => (
                <Link to={category.link} key={category.name} className="relative rounded-lg overflow-hidden group">
                    <img src={category.image} alt={category.name} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                        <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                        <span className="bg-gold text-dark font-semibold py-2 px-4 rounded-md group-hover:bg-gold-light transition-colors duration-300">
                        Shop Now
                        </span>
                    </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-8 bg-dark-card rounded-lg">
                    <Truck className="h-12 w-12 text-gold mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                    <p className="text-gray-400">Enjoy free shipping on all orders over $100.</p>
                </div>
                <div className="p-8 bg-dark-card rounded-lg">
                    <Award className="h-12 w-12 text-gold mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                    <p className="text-gray-400">Our products are crafted from the finest materials.</p>
                </div>
                <div className="p-8 bg-dark-card rounded-lg">
                    <ShieldCheck className="h-12 w-12 text-gold mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
                    <p className="text-gray-400">Hassle-free returns within 30 days of purchase.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
