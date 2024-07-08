import Image from 'next/image';
import clsx from 'clsx';

import Buy from './buy';

import logoImg from './logo.png';

export default function Hero() {
  return (
    <div className='mt-10 flex items-center gap-x-10 2xl:gap-x-0'>
      <div className='flex grow flex-col justify-center max-[850px]:hidden'>
        <Image
          src={logoImg}
          priority
          quality={100}
          alt=''
          className='w-full max-w-[min(100%,700px)] object-contain'
        />
        <Buy />
      </div>
      <div
        className={clsx(
          'min-[850px]:multi-[`relative;w-fit;shrink-0;2xl:pr-20`]'
        )}
      >
        <hgroup className='min-[850px]:[-mt-40;text-left;mt-0] mt-10 -rotate-6 text-center uppercase sm:mt-20'>
          <h1 className='text-6xl sm:text-7xl lg:text-8xl xl:text-[110px]'>
            SAY HI TO
          </h1>
          <p
            className={clsx(
              'text-shadow',
              '2xl:multi-[px-20;py-5;text-8xl]',
              'xl:multi-[px-20;py-5;text-7xl]',
              'lg:multi-[px-16;py-4;text-6xl]',
              'sm:multi-[px-14;py-3;text-5xl]',
              'px-10 py-3 text-4xl'
            )}
          >
            $TENDY
          </p>
        </hgroup>
        <article className='px-5 pt-10 font-medium text-white sm:px-0 min-[850px]:multi-[`absolute;left-0;pt-20`]'>
          <h4 className='text-4xl lg:text-[45px]'>DOG BY MATT FURIE</h4>
          <p className='text-pretty break-words text-2xl lg:text-3xl [&_span]:text-primary'>
            <span>TENDY</span> - inspired by a based <span>Matt Furie</span>{' '}
            character came to conquer Dog Meta on <span>TON</span>. The next
            banger to the &apos;Matt Furie Club&apos;
          </p>
        </article>
        <div className='mt-10 flex justify-center min-[850px]:hidden'>
          <Buy text='BUY NOW' />
        </div>
      </div>
    </div>
  );
}
