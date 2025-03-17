import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
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
    },
    {
      id: 3,
      name: 'হেয়ার কম্বো প্যাক',
      description: 'শ্যাম্পু এবং হেয়ার অয়েল কম্বো অফার',
      price: '১,৫০০.০০',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          lang="bn"
        >
          আমাদের পণ্যসমূহ
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2" lang="bn">{product.name}</h2>
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
      </div>
    </div>
  );
};

export default Products;