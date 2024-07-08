import Image from 'next/image';
import clsx from 'clsx';

import Background from './background';
import Nav from './nav';
import Socials from './socials';
import Hamburger from './hamburger';
import Hero from './hero';
import Chart from './chart';
import Tokenomics from './tokenomics';

import logoImg from './logo.png';

export default function Home() {
  return (
    <div className='relative h-fit'>
      <Background />
      <div className='relative min-h-screen px-0 sm:px-5 xl:px-10'>
        <main className='mx-auto max-w-screen-2xl pb-5'>
          <header
            id='home'
            className='flex items-end justify-between gap-x-5 sm:gap-x-10'
          >
            <div
              className={clsx(
                'flex shrink-0 items-end text-2xl text-white lg:text-3xl xl:text-[40px]',
                'max-[840px]:multi-[`text-4xl;[&_img]:w-[70px]`]'
              )}
            >
              <Image
                src={logoImg}
                priority
                quality={100}
                alt=''
                className='w-[80px] xl:w-[103px]'
              />
              <span className='max-[430px]:hidden'>TENDY</span>
            </div>
            <Nav className='max-[840px]:hidden' />
            <div className='order-4 mr-5 hidden max-[850px]:multi-[`block;[&+div]:ml-auto`]'>
              <Hamburger />
            </div>
            <Socials />
          </header>

          <Hero />

          <div className='mt-40 px-5 max-[840px]:mt-16 sm:px-0 2xl:mt-36'>
            <Chart />
          </div>

          <div className='mt-20 px-5 sm:px-0 xl:mt-40'>
            <Tokenomics />
          </div>
        </main>
      </div>
    </div>
  );
}
