import React from 'react';
import { Link } from 'react-router-dom';

const squares = [
  {
    id: 'durbar',
    name: 'Durbar Square',
    image: 'https://images.unsplash.com/photo-1609939002762-3494f1c8e816',
    description: 'The heart of ancient Bhaktapur, featuring the Palace of 55 Windows.'
  },
  {
    id: 'taumadhi',
    name: 'Taumadhi Square',
    image: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1',
    description: 'Home to the magnificent Nyatapola Temple.'
  },
  {
    id: 'dattatreya',
    name: 'Dattatreya Square',
    image: 'https://www.bhaktapur.com/wp-content/uploads/2021/02/Dattatraya-temple-1-819x1024.jpg',
    description: 'Dattatraya Square is the oldest square among the four charming squares of Bhaktapur.'
  },
  {
    id: 'pottery',
    name: 'Pottery Square',
    image: 'https://images.unsplash.com/photo-1590755943118-edb8b1a4b59d',
    description: "The center of Bhaktapur's traditional pottery making. Bhaktapur Pottery Square is a vibrant hub of activity, where every step in the pottery-making process unfolds before your eyes. From clay preparation to shaping on the wheel and the mesmerizing firing process, you'll witness artisans at work, creating pottery pieces that embody Nepal's rich cultural heritage."
  }
];

export default function ExploreSquares() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon/10 to-forestGreen/10 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-maroon mb-4">Explore Ancient Squares</h1>
          <p className="text-jade text-lg">Discover the cultural heritage of Bhaktapur</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {squares.map((square) => (
            <Link
              key={square.id}
              to={`/square/${square.id}`}
              className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-video relative">
                <img
                  src={square.image}
                  alt={square.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">{square.name}</h2>
                    <p className="text-white/90">{square.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/download-app"
            className="inline-flex items-center px-6 py-3 text-white rounded-lg transition-colors duration-200"
            style={{ 
              backgroundColor: '#800000',
              boxShadow: '0 0 0 2px #FFD700',
            }}
          >
            Download Puzzle Game
          </a>
        </div>
      </div>
    </div>
  );
}