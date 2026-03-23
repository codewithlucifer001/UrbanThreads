import { Target, Eye, Gem, Users, ShoppingBag, Star, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">About UrbanThreads</h1>
          <div className="w-32 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Brand Story */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed">
            Founded with a vision to redefine luxury fashion for the modern world. UrbanThreads brings together premium quality, timeless design, and urban culture.
          </p>
        </section>

        {/* Values Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-dark-card p-8 rounded-lg">
            <Target className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-400">To provide accessible luxury fashion that empowers individuals to express their unique style.</p>
          </div>
          <div className="bg-dark-card p-8 rounded-lg">
            <Eye className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-400">To be a global leader in urban luxury fashion, known for quality, innovation, and style.</p>
          </div>
          <div className="bg-dark-card p-8 rounded-lg">
            <Gem className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-400">Quality, integrity, and a passion for craftsmanship are at the heart of everything we do.</p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-dark-card rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="border-r border-gray-700 last:border-r-0">
                    <Users className="h-10 w-10 text-gold mx-auto mb-2" />
                    <p className="text-4xl font-bold text-gold">10K+</p>
                    <p className="text-gray-400">Happy Customers</p>
                </div>
                <div className="border-r border-gray-700 last:border-r-0">
                    <ShoppingBag className="h-10 w-10 text-gold mx-auto mb-2" />
                    <p className="text-4xl font-bold text-gold">500+</p>
                    <p className="text-gray-400">Premium Products</p>
                </div>
                <div className="border-r border-gray-700 last:border-r-0">
                    <Globe className="h-10 w-10 text-gold mx-auto mb-2" />
                    <p className="text-4xl font-bold text-gold">50+</p>
                    <p className="text-gray-400">Countries Served</p>
                </div>
                <div>
                    <Star className="h-10 w-10 text-gold mx-auto mb-2" />
                    <p className="text-4xl font-bold text-gold">5.0</p>
                    <p className="text-gray-400">Star Rating</p>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default About;
