import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManagerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/team" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6 text-pink-600" />
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
                  <p className="text-sm text-gray-600">Asvu - Manager</p>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Manager Profile Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Manager info */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Asvu
                </h1>
                <p className="text-2xl text-gray-700 mb-2">Manager</p>
                <p className="text-xl text-pink-600 font-semibold">Týmový líder</p>
              </div>

              <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl border border-pink-100 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O manažerovi</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Asvu je zkušený manažer s výjimečnými organizačními schopnostmi a strategickým myšlením.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Díky svému přístupu k vedení týmu dokáže koordinovat všechny aspekty týmové práce - od plánování tréninků 
                  až po přípravu na turnaje. Jeho schopnost motivovat hráče a vytvářet pozitivní týmovou atmosféru 
                  je klíčová pro úspěch Luna Rosa týmu.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Asvu se specializuje na analýzu soupeřů, strategické plánování a komunikaci s organizátory turnajů. 
                  Jeho manažerské dovednosti zajišťují, že se tým může plně soustředit na hru, zatímco on řeší veškeré 
                  administrativní a organizační záležitosti.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Zkušenosti</h3>
                  <p className="text-2xl font-bold">3+ roky</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Oblíbený champion</h3>
                  <p className="text-2xl font-bold">Syndra</p>
                </div>
              </div>
            </div>

            {/* Right side - Pool Party Syndra skin */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl p-8 shadow-2xl border-4 border-cyan-500/30">
                <h2 className="text-3xl font-bold text-white mb-6">Pool Party Syndra</h2>
                <div className="relative mb-6">
                  <img 
                    src="https://raw.githubusercontent.com/targoncup/lunarosa/refs/heads/main/syndra.jpg"
                    alt="Pool Party Syndra"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <p className="text-cyan-200 text-lg leading-relaxed">
                  Pool Party Syndra reprezentuje Asvuův relaxovaný, ale efektivní přístup k managementu. 
                  Stejně jako tento letní skin přináší svěžest do hry, Asvu přináší pozitivní energii a inovativní 
                  přístupy do týmového vedení, čímž vytváří příjemné prostředí pro všechny členy týmu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagerPage;