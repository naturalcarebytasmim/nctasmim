import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'বিভিন্ন ধরনের চুলের জন্য নিয়মিতভাবে হেয়ার কেয়ার',
      answer: 'আমাদের প্রাকৃতিক পণ্য সকল ধরনের চুলের জন্য উপযোগী।'
    },
    {
      question: 'অর্গানিক হেয়ার কেয়ার এর প্রতি সপ্তাহে চুলের যত্ন কেন?',
      answer: 'নিয়মিত যত্ন আপনার চুলকে স্বাস্থ্যকর ও সুন্দর রাখে।'
    },
    {
      question: 'হেয়ার কেয়ার সার্ভিস বেছে নেওয়ার আগে কি কি বিষয় খেয়াল রাখা উচিত?',
      answer: 'প্রাকৃতিক উপাদান এবং আপনার চুলের ধরন অনুযায়ী পণ্য নির্বাচন করুন।'
    }
  ];

  return (
    <section className="py-16 bg-brand-light" id="faq">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          lang="bn"
        >
          সচরাচর জিজ্ঞাসা
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="bg-white rounded-xl shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <summary className="cursor-pointer p-6 font-medium flex items-center justify-between">
                <span lang="bn">{faq.question}</span>
                <ChevronDown className="w-5 h-5 transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-gray-600" lang="bn">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;