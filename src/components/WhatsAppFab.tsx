import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react'; // Ensure you have lucide-react installed

const WhatsAppButton = () => {
  const phoneNumber = "918097335152";
  const message = encodeURIComponent("Hi Kasim! I visited your portfolio and would like to connect.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} fill="currentColor" />
          
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </motion.a>
  );
};

export default WhatsAppButton;