import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdcPage: React.FC = () => {
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
                  <p className="text-sm text-gray-600">Ernie - ADC</p>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Player Profile Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Player info */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Ernie
                </h1>
                <p className="text-2xl text-gray-700 mb-2">ADC</p>
                <p className="text-xl text-pink-600 font-semibold">Draven Main</p>
              </div>

              <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl border border-pink-100 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O hráči</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ernie je zkušený ADC hráč s výjimečnými mechanickými dovednostmi a agresivním herním stylem.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jeho specializace na Dravena mu umožňuje dominovat v bot lane díky vysokému damage outputu a schopnosti 
                  snowballovat výhody. Ernie dokáže perfektně využít Dravenovy sekery k vytvoření obrovského tlaku na soupeře.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Díky své preciznosti a agresivnímu přístupu dokáže Ernie konzistentně carry teamfighty 
                  a být spolehlivým zdrojem damage pro Luna Rosa tým.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Peak Rank</h3>
                  <p className="text-2xl font-bold">Grandmaster</p>
                </div>
                <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Main Champion</h3>
                  <p className="text-2xl font-bold">Draven</p>
                </div>
              </div>
            </div>

            {/* Right side - Gladiator Draven skin */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-900 to-orange-900 rounded-2xl p-8 shadow-2xl border-4 border-orange-500/30">
                <h2 className="text-3xl font-bold text-white mb-6">Gladiator Draven</h2>
                <div className="relative mb-6">
                  <img 
                    src="https://raw.githubusercontent.com/targoncup/lunarosa/refs/heads/main/draven.jpg"
                    alt="Gladiator Draven"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <p className="text-orange-200 text-lg leading-relaxed">
                  Gladiator Draven je klasický skin, který dokonale vystihuje Dravenovu arogantní a dominantní povahu. 
                  Tento skin reprezentuje Ernieho agresivní a sebevědomý herní styl v bot lane, 
                  kde dokáže ukázat svou sílu a dominanci nad soupeři.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdcPage;