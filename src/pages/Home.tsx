import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: "প্রাকৃতিক উপাদান",
      description: "১০০% প্রাকৃতিক উপাদান দিয়ে তৈরি",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "দ্রুত ফলাফল",
      description: "মাত্র ৩০ দিনে ফলাফল দেখুন",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "নিরাপদ ব্যবহার",
      description: "সকল বয়সের জন্য নিরাপদ",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const previewProducts = [
    {
      id: 1,
      name: 'হেয়ার অয়েল',
      description: 'প্রাকৃতিক উপাদানে সমৃদ্ধ হেয়ার অয়েল',
      price: '৮০০.০০',
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'হেয়ার শ্যাম্পু',
      description: 'প্রাকৃতিক উপাদানে তৈরি শ্যাম্পু',
      price: '৭০০.০০',
      image: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Hair Care Products"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                <div className="text-white text-center">
                  <h2 className="text-3xl font-bold font-inter mb-4">HAIR CARE FOR ALL</h2>
                  <p className="text-lg mb-6" lang="bn">৩০ দিনে বেশি প্রাকৃতিক উপাদানে সমৃদ্ধ চেঞ্জ আপনার অসাধারণ চেহারা আনুন</p>
                  <Link to="/order">
                    <motion.button 
                      className="bg-brand-green text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-lg shadow-lg flex items-center gap-2 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      lang="bn"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      অর্ডার করতে এখানে ক্লিক করুন
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-brand-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-brand-green mb-3" lang="bn">{feature.title}</h3>
                  <p className="text-gray-600" lang="bn">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-center mb-12" lang="bn">আমাদের পণ্যসমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                {previewProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" lang="bn">{product.name}</h3>
                      <p className="text-gray-600 mb-4" lang="bn">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">৳ {product.price}</span>
                        <Link
                          to="/order"
                          className="bg-brand-green text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-colors"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span lang="bn">অর্ডার করুন</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <Link 
                  to="/products"
                  className="inline-block bg-brand-green text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors text-lg"
                  lang="bn"
                >
                  সকল পণ্য দেখুন
                </Link>
              </div>
            </div>

            {/* Testimonials Preview */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12" lang="bn">গ্রাহকদের মতামত</h2>
              <Testimonials />
              <div className="text-center mt-12">
                <Link 
                  to="/testimonials"
                  className="inline-block bg-brand-green text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors text-lg"
                  lang="bn"
                >
                  সকল মতামত দেখুন
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;