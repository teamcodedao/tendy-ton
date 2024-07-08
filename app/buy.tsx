import clsx from 'clsx';

interface BuyProps {
  text?: string;
}

export default function Buy({text}: BuyProps) {
  return (
    <span
      className={clsx(
        'box-shadow self-center rounded-[25px] border-[5px] border-[#FAF1F1] bg-[#44A5FF]',
        '2xl:multi-[px-20;py-5;text-8xl]',
        'xl:multi-[px-20;py-5;text-7xl]',
        'lg:multi-[px-16;py-4;text-6xl]',
        'sm:multi-[px-14;py-3;text-5xl]',
        'px-10 py-3 text-4xl'
      )}
    >
      <a
        href={process.env.NEXT_PUBLIC_COIN_URL}
        target='_buy'
        className='text-shadow'
      >
        {text || '$TENDY'}
      </a>
    </span>
  );
}
