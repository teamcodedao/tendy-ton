import Image from 'next/image';

import dexsImg from './dexs.png';
import dexImg from './dex.png';
import clsx from 'clsx';

export default function Chart() {
  return (
    <div>
      <h2 className='text-leading'>VIEW CHART ON</h2>
      <div
        className={clsx(
          'mt-10 flex justify-center gap-x-5 *:multi-[`rounded-2xl;border-2;border-[#FFFBFB];overflow-hidden`] sm:mt-14 sm:gap-x-10 md:gap-x-20 lg:mt-24 lg:gap-x-28',
          '[&_img]:multi-[w-full;max-w-[567px];object-cover;object-center]'
        )}
      >
        <a
          href={process.env.NEXT_PUBLIC_DEXS_URL}
          target='_dexs'
          className='self-stretch bg-black'
        >
          <Image src={dexsImg} quality={100} alt='' />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_DEX_URL}
          target='_dex'
          className='bg-[#43E5FB]'
        >
          <Image src={dexImg} quality={100} alt='' />
        </a>
      </div>
    </div>
  );
}
