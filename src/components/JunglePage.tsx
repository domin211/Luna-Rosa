import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const JunglePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/team" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6 text-blue-600" />
              <div className="flex items-center space-x-4">
                <img 
                  src="/image.png"
                  alt="Luna Rosa Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                    Luna Rosa
                  </h1>
                  <p className="text-sm text-gray-600">Viky - Jungle</p>
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
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                  Viky
                </h1>
                <p className="text-2xl text-gray-700 mb-2">Jungle</p>
                <p className="text-xl text-blue-600 font-semibold">Kindred Main</p>
              </div>

              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-xl border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O hráčovi</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Viky je zkušený jungle main, který se vyznačuje precizní map kontrolou a výjimečným citem pro tempo hry.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Díky svému agresivnímu hernímu stylu a perfektnímu využívání šampiona Kindred dokáže neustále vyvíjet tlak na soupeře a získávat klíčové výhody pro svůj tým. Jeho schopnost číst hru a rozhodovat se ve vypjatých situacích z něj dělá jednoho z nejdůležitějších hráčů sestavy.
                </p>
                <p className="text-gray-700 leading-relaxed">
Viky je známý svou konzistencí a flexibilitou – dokáže se přizpůsobit různým herním podmínkám, ať už jde o early game invady nebo late game teamfighty. To z něj dělá spolehlivého junglera, na kterého se jeho tým může vždy spolehnout.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-slate-600 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Peak Rank</h3>
                  <p className="text-2xl font-bold">Diamond</p>
                </div>
                <div className="bg-gradient-to-r from-slate-600 to-gray-700 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Main Champion</h3>
                  <p className="text-2xl font-bold">Kindred</p>
                </div>
              </div>
            </div>

            {/* Right side - DRX Kindred skin */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 shadow-2xl border-4 border-blue-500/30">
                <h2 className="text-3xl font-bold text-white mb-6">DRX Kindred</h2>
                <div className="relative mb-6">
                  <img 
            src="https://raw.githubusercontent.com/targoncup/lunarosa/refs/heads/main/kindred_splash_centered_23.jpg"
                    alt="DRX Kindred"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <p className="text-blue-200 text-lg leading-relaxed">
                  DRX Kindred je jeden z nejoblíbenějších skinů pro tohoto šampiona. Spojuje elegantní a čistý design s nádechem mystické síly, což perfektně ladí s charakterem Kindred. Tento skin dokonale vystihuje Vikyho herní styl – jeho precizní jungle pathing, cit pro správné načasování a schopnost rozhodovat fighty v ten nejdůležitější okamžik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JunglePage;