import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Your content is really useful. I have benefited from using the oil you make. You go further. I hope you will provide better service in the future❤Best of luck my dear❤",
      author: "Amina Rahman",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      rating: 5
    },
    {
      text: "আপনার এই চুলের প্রোডাক্ট আমার চুলের জন্য খুব উপকারী হয়েছে। ধন্যবাদ।",
      author: "Fatima Ahmed",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      rating: 5
    },
    {
      text: "অসাধারণ প্রোডাক্ট। আমার চুল এখন আগের থেকে অনেক ভালো।",
      author: "Nusrat Jahan",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          lang="bn"
        >
          আমাদের গ্রাহকদের অভিজ্ঞতা
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-green"
                />
                <div>
                  <h3 className="font-medium text-lg">{testimonial.author}</h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-green text-brand-green" />
                    ))}
                  </div>
                </div>
              </div>
              <p 
                className="text-gray-600 italic"
                lang={testimonial.text.match(/[a-zA-Z]/) ? 'en' : 'bn'}
              >
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;