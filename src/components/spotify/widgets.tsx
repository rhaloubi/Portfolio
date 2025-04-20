import React from 'react';
import PlayWidget from 'react-spotify-widgets';

export default function SpotifyWidgets(): JSX.Element {
  return (
    <div className="relative min-h-screen w-full mt-[-30px] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Spotify Widgets Grid */}
          <div className="items-center">
           
          </div>
          <div className="flex justify-center md:justify-start items-center px-2 md:px-8">
            {/* Chill Vibes Playlist */}
            <div className="transform transition-transform duration-300 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px]">
              <PlayWidget
                width="100%"
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