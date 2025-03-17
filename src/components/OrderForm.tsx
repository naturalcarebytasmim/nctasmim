import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Package } from 'lucide-react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    package: 'combo'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-16 bg-brand-light" id="order">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-brand-green text-white p-8 text-center">
            <Package className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2" lang="bn">অর্ডার করুন</h2>
            <p className="opacity-90" lang="bn">আপনার প্রয়োজনীয় তথ্য দিয়ে অর্ডার সম্পন্ন করুন</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-6" lang="bn">বিলিং তথ্য</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium" lang="bn">আপনার নাম</label>
                    <input 
                      type="text"
                      className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-green focus:outline-none transition-shadow"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" lang="bn">আপনার ঠিকানা</label>
                    <textarea 
                      className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-green focus:outline-none transition-shadow"
                      rows={4}
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" lang="bn">মোবাইল নাম্বার</label>
                    <input 
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-green focus:outline-none transition-shadow"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </form>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-6" lang="bn">আপনার অর্ডার</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="font-medium" lang="bn">হেয়ার কম্বো অফার</h4>
                      <p className="text-sm text-gray-600" lang="bn">শ্যাম্পু + হেয়ার অয়েল</p>
                    </div>
                    <span className="text-xl font-bold">৳ ১,৫০০.০০</span>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between font-bold text-lg">
                      <span lang="bn">মোট</span>
                      <span>৳ ১,৫০০.০০</span>
                    </div>
                  </div>
                  <motion.button 
                    className="w-full bg-brand-green text-white py-4 rounded-lg mt-6 flex items-center justify-center gap-2 font-medium hover:bg-opacity-90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    lang="bn"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    অর্ডার কনফার্ম করুন
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderForm;