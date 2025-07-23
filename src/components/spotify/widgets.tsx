"use client"
import React, { useEffect, useState } from 'react';
import PlayWidget from 'react-spotify-widgets';
import Head from 'next/head';

export default function SpotifyWidgets(): JSX.Element {
  const [dimensions, setDimensions] = useState({ width: 450, height: 500 });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setDimensions({ width: 350, height: 450 });
      } else if (window.innerWidth < 768) {
        setDimensions({ width: 400, height: 450 });
      } else {
        setDimensions({ width: 450, height: 500 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <>
      <Head>
        <meta http-equiv="Permissions-Policy" content="encrypted-media=*" />
      </Head>
      <div className="relative min-h-screen w-full mt-[-30px] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="items-center">
             
            </div>
            <div className="flex justify-center md:justify-start items-center px-2 md:px-8">
              <div className="transform  transition-transform duration-300 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px]">
                <PlayWidget
                  width={dimensions.width}
                  height={dimensions.height}
                  uri={'spotify:playlist:0Dlo9f0ZLP1YkQ5JMwAwJa'}
                  lightTheme={true}
                  title="My Spotify Playlist"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}