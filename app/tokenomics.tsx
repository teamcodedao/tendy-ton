'use client';

import clsx from 'clsx';
import {FlipTilt} from 'react-flip-tilt';

export default function Tokenomics() {
  return (
    <div id='tokenomics'>
      <h2 className='text-leading'>Tokenomics</h2>
      <div className='relative mt-10 flex justify-center gap-x-10 sm:mt-14 lg:mt-24 lg:gap-x-20'>
        <div
          className={clsx(
            'relative z-10 grow space-y-10 text-3xl *:multi-[`max-w-[676px];border-[5px];border-white;rounded-[20px];mx-auto;text-center;text-white;px-5;py-5;[&_h4]:mb-3;[&_span]:text-primary`] sm:text-4xl lg:text-5xl xl:text-[55px]'
          )}
        >
          <div>
            <h4>TICKER</h4>
            <span>$TENDY</span>
          </div>
          <div>
            <h4>OWNERSHIP</h4>
            <span>RENOUNCED</span>
          </div>
          <div>
            <h4>BUY/SELL TAXES</h4>
            <span>0/0</span>
          </div>
          <div>
            <h4>TOTAL SUPPLY</h4>
            <span>1.000.000.000</span>
          </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 self-center opacity-25 lg:multi-[`static;opacity-100;w-[300px];shrink-0;object-contain;lg:w-[400px];2xl:w-[505px];-translate-x-0;-translate-y-0`]'>
          <FlipTilt
            front={<img src='/coin.png' alt='' />}
            back={
              <div>
                <img src='/coin.png' alt='' />
              </div>
            }
            borderWidth='0px'
            shadowEnable={false}
            flipBackReverse
          ></FlipTilt>
        </div>
      </div>
    </div>
  );
}
