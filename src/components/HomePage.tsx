import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Handle scroll for back to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100">
      {/* Header */}
      <header className={`bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/image.png"
                alt="Luna Rosa Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Luna Rosa
                </h1>
                <p className="text-sm text-gray-600">Profesionální tým</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Domů</a>
              <Link to="/team" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Náš tým</Link>
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Služby</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Kontakt</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/image.png"
              alt="Luna Rosa Team Logo"
              className="w-32 h-32 mx-auto mb-8 animate-pulse rounded-full object-cover border-4 border-pink-200 shadow-lg"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent">
              Luna Rosa
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light max-w-3xl mx-auto">
            Profesionální tým s elegantním přístupem a vášní pro dokonalost
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/team"
              className="bg-gradient-to-r from-pink-600 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-700 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Poznejte náš tým
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              Herní turnaje
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pořádáme prestižní herní turnaje s profesionální organizací a skvělými cenami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'League of Legends',
                description: 'Náš tým hraje v turnajích jako Targon Cup, AOL a dalších soutěžích.',
                icon: '⚔️'
              },
              {
                title: 'Age of Empires',
                description: 'Strategické turnaje v legendární RTS sérii pro milovníky historie.',
                icon: '🏰'
              },
              {
                title: 'Total War',
                description: 'Chceme ukázat, že aj v Čechách a na Slovensku existují Total War turnaje, které dokážou konkurovat aj zahraničiu.',
                icon: '🛡️'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100"
              >
                <div className="text-center">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-rose-500 text-white transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Kontaktujte nás</h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Jsme připraveni přeměnit vaše vize ve skutečnost. Ozvěte se nám ještě dnes!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Mail className="w-12 h-12 mx-auto mb-4 text-pink-200" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-pink-100">lunarosagaming@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Phone className="w-12 h-12 mx-auto mb-4 text-pink-200" />
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p className="text-pink-100">0944 821 978</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-pink-200" />
              <h3 className="text-xl font-bold mb-2">Adresa</h3>
              <p className="text-pink-100">Brno, Česká republika</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src="/image.png"
              alt="Luna Rosa"
              className="w-8 h-8 rounded-full object-cover"
            />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Luna Rosa
            </h3>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 Luna Rosa Team, Všechna práva vyhrazena.
          </p>
          <p className="text-gray-500 text-sm">
            Vytvořeno s láskou a elegancí ✨
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-600 to-rose-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default HomePage;
