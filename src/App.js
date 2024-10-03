import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0A2463] text-white font-sans">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path-to-logo.png" alt="QuickCool Systems Logo" className="h-16 mr-2" />
        </div>
        <nav>
  <ul className="flex space-x-6">
    <li><a href="/" className="hover:text-[#3E92CC]">Home</a></li>
    <li><a href="/services" className="hover:text-[#3E92CC]">Services</a></li>
    <li><a href="/about" className="hover:text-[#3E92CC]">About</a></li>
    <li><a href="/contact" className="hover:text-[#3E92CC]">Contact</a></li>
  </ul>
</nav>

      </header>

      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">QuickCool Systems</h1>
          <p className="text-2xl text-[#3E92CC] font-semibold mb-8">Cool Down, Power Up!</p>
          <button className="bg-[#3E92CC] hover:bg-[#2A628F] text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Get a Free Quote
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1E1B18] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Heating</h3>
            <p>Experience comfort with our efficient heating solutions.</p>
          </div>
          <div className="bg-[#1E1B18] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Cooling</h3>
            <p>Stay cool with our state-of-the-art air conditioning systems.</p>
          </div>
          <div className="bg-[#1E1B18] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Ventilation</h3>
            <p>Breathe easy with our advanced ventilation technology.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/path-to-image2.jpg" alt="AC Units Installation" className="rounded-lg shadow-lg" />
            <img src="/path-to-image4.jpg" alt="Technician at Work" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p>Our team is highly trained and certified to handle all your HVAC needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
              <p>We use only the best, energy-efficient equipment for all installations and repairs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p>We're always available to ensure your comfort, day or night.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1E1B18] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> (123) 456-7890</p>
              <p className="flex items-center mb-2"><Mail size={18} className="mr-2" /> info@quickcoolsystems.com</p>
              <p className="flex items-center"><MapPin size={18} className="mr-2" /> 123 Cool Street, Chillville, FR 12345</p>
            </div>
            <div>
    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
    <ul>
      <li><a href="/services" className="hover:text-[#3E92CC]">Services</a></li>
      <li><a href="/about" className="hover:text-[#3E92CC]">About Us</a></li>
      <li><a href="/faqs" className="hover:text-[#3E92CC]">FAQs</a></li>
      <li><a href="/testimonials" className="hover:text-[#3E92CC]">Testimonials</a></li>
    </ul>
  </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 QuickCool Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;