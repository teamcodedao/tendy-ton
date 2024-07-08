import Image from 'next/image';

import xImg from './x.png';
import teleImg from './tele.png';
import clsx from 'clsx';

export default function Socials() {
  return (
    <div
      className={clsx(
        'flex shrink-0 gap-4',
        '*:multi-[flex;items-center;justify-center;bg-white;size-[50px];rounded-[20px];aspect-square;transition]',
        'xl:*:size-[70px]',
        '[&>a:hover]:bg-slate-300 [&>a:hover_img]:scale-110',
        '[&_img]:multi-[object-contain;transition;origin-top]'
      )}
    >
      <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_x'>
        <Image src={xImg} quality={100} priority alt='' className='w-16' />
      </a>
      <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_tele'>
        <Image src={teleImg} quality={100} priority alt='' className='w-28' />
      </a>
    </div>
  );
}
