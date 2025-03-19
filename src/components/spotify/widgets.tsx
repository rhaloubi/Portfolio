import React from 'react';
import PlayWidget from 'react-spotify-widgets';

export default function SpotifyWidgets() {
  return (
    <div className="relative min-h-screen  w-full mt-[-30px]">
      <div className="max-w-7xl  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Spotify Widgets Grid */}
            <div className="items-center">
           
             </div>
          <div className="px-8 items-center">
            {/* Chill Vibes Playlist */}
            <div className="transform transition-transform duration-300">
              <PlayWidget
                width={450}
                height={500}
                uri={'spotify:playlist:0Dlo9f0ZLP1YkQ5JMwAwJa'}
                lightTheme={true}
              />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}