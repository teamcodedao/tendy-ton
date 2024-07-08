'use client';

import {useEffect, useRef} from 'react';

export default function Background() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.addEventListener(
      'click',
      () => {
        if (videoRef.current) {
          if (videoRef.current.played.length === 0) {
            videoRef.current.play();
          }

          if (videoRef.current.muted) {
            videoRef.current.muted = false;
          }
        }
      },
      {
        once: true,
      }
    );
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      autoPlay
      playsInline
      preload='none'
      className='absolute inset-0 size-full min-h-screen object-cover'
    >
      <source src='/video-1.mp4' type='video/mp4' />
    </video>
  );
}
