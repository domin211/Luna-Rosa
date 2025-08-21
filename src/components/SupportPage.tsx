import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage: React.FC = () => {
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
                  <p className="text-sm text-gray-600">Mari - Support</p>
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
                  Mari
                </h1>
                <p className="text-2xl text-gray-700 mb-2">Support</p>
                <p className="text-xl text-pink-600 font-semibold">Rakan Main</p>
              </div>

              <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl border border-pink-100 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O hráči</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mari je zkušený support hráč s výjimečnými schopnostmi v týmové koordinaci a ochraně svých spoluhráčů.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jeho specializace na Rakana mu umožňuje dominovat v bot lane díky jeho mobilitě a schopnosti iniciovat teamfighty. 
                  Mari dokáže perfektně využít Rakanovy engage schopnosti k vytvoření rozhodujících momentů pro svůj tým.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Díky své precizní hře a schopnosti číst situace dokáže Mari poskytovat klíčovou podporu 
                  a ochranu svému ADC hráči, zatímco současně vytváří příležitosti pro celý tým.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Peak Rank</h3>
                  <p className="text-2xl font-bold">Master</p>
                </div>
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Main Champion</h3>
                  <p className="text-2xl font-bold">Rakan</p>
                </div>
              </div>
            </div>

            {/* Right side - IG Rakan skin */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 shadow-2xl border-4 border-blue-500/30">
                <h2 className="text-3xl font-bold text-white mb-6">IG Rakan</h2>
                <div className="relative mb-6">
                  <img 
                    src="https://raw.githubusercontent.com/targoncup/lunarosa/refs/heads/main/rakan.jpg"
                    alt="IG Rakan"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <p className="text-blue-200 text-lg leading-relaxed">
                  IG Rakan je prestižní skin oslavující vítězství Invictus Gaming na Světovém šampionátu. 
                  Tento skin kombinuje elegantní design s profesionální estetikou a dokonale reprezentuje 
                  Mariho podporující styl hry a jeho schopnost být spolehlivým základem týmu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;