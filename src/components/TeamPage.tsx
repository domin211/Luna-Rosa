import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Player {
  name: string;
  role: string;
  champion: string;
  skin: string;
  opgg: string;
  championImage: string;
}

const TeamPage: React.FC = () => {
  const navigate = useNavigate();

  const players: Player[] = [
    {
      name: 'Max',
      role: 'Top Lane',
      champion: 'Talon',
      skin: 'The Blade\'s Shadow',
      opgg: 'https://op.gg/lol/summoners/eune/delightful%20agony-EDUNG',
      championImage: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Talon.png'
    },
    {
      name: 'Viky',
      role: 'Jungle',
      champion: 'Kindred',
      skin: 'The Eternal Hunters',
      opgg: 'https://op.gg/lol/summoners/eune/C%20VIKYJAPAN%20Z-EUNE',
      championImage: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kindred.png'
    },
    {
      name: 'Chris',
      role: 'Mid Lane',
      champion: 'Qiyana',
      skin: 'Empress of the Elements',
      opgg: 'https://op.gg/lol/summoners/eune/Wakatsuki-Meow',
      championImage: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Qiyana.png'
    },
    {
      name: 'Ernie',
      role: 'ADC',
      champion: 'Draven',
      skin: 'the Glorious Executioner',
      opgg: 'https://op.gg/lol/summoners/eune/ErnieDeath-0003',
      championImage: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Draven.png'
    },
    {
      name: 'Mari',
      role: 'Support',
      champion: 'Rakan',
      skin: 'The Charmer',
      opgg: 'https://op.gg/lol/summoners/eune/DE5PAIR-EUNE',
      championImage: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Rakan.png'
    },
    {
      name: 'Asvu',
      role: 'Manager',
      champion: 'Syndra',
      skin: 'The Dark Sovereign',
      opgg: 'https://op.gg/lol/summoners/eune/DE5PAIR-EUNE',
      championImage: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Syndra.png'
    }
  ];

  const handlePlayerClick = (playerName: string) => {
    if (playerName === 'Max') {
      navigate('/toplane');
    } else if (playerName === 'Viky') {
      navigate('/jungle');
    } else if (playerName === 'Chris') {
      navigate('/midlane');
    } else if (playerName === 'Ernie') {
      navigate('/adc');
    } else if (playerName === 'Mari') {
      navigate('/support');
    } else if (playerName === 'Asvu') {
      navigate('/manager');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
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
                  <p className="text-sm text-gray-600">League of Legends Team</p>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              League of Legends Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Náš profesionální tým hráčů League of Legends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100 group ${(player.name === 'Max' || player.name === 'Viky' || player.name === 'Chris' || player.name === 'Ernie' || player.name === 'Mari') ? 'cursor-pointer' : ''}`}
                className={`bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100 group ${(player.name === 'Max' || player.name === 'Viky' || player.name === 'Chris' || player.name === 'Ernie' || player.name === 'Mari' || player.name === 'Asvu') ? 'cursor-pointer' : ''}`}
                onClick={() => handlePlayerClick(player.name)}
              >
                <div className="text-center">
                  {/* Champion Image */}
                  <div className="relative mb-6">
                    <img 
                      src={player.championImage}
                      alt={player.champion}
                      className="w-24 h-24 mx-auto rounded-full border-4 border-pink-200 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-600 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {player.role}
                    </div>
                  </div>

                  {/* Player Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{player.name}</h3>
                  <p className="text-lg font-semibold text-pink-600 mb-2">{player.champion}</p>
                  <p className="text-sm text-gray-600 mb-6">{player.skin}</p>

                  {/* OP.GG Link */}
                  <a 
                    href={player.opgg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>OP.GG Profil</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-20 bg-gradient-to-r from-pink-600 to-rose-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Týmové úspechy</h2>
            <p className="text-xl text-pink-100 mb-6">
             Náš tým se účastní prestižních turnajů, jako je Targon Cup, AOL a dalších soutěží.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Targon Cup</h3>
                <p className="text-pink-100">Aktívni účastníci</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">AOL</h3>
                <p className="text-pink-100">Pravidelní súťažiaci</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Ďalšie turnaje</h3>
                <p className="text-pink-100">Stále rastieme</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;