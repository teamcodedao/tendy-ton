import clsx from 'clsx';

interface NavProps extends React.ComponentProps<'ul'> {
  isHamburger?: boolean;
}

export default function Nav({isHamburger, className, ...restProps}: NavProps) {
  return (
    <ul
      {...restProps}
      className={clsx(className, 'uppercase text-white [&_a]:block', {
        'text-2xl flex flex-col gap-2': isHamburger,
        'flex text-2xl lg:text-3xl xl:text-4xl gap-5 sm:gap-10 xl:gap-20 self-end items-end [&>li:hover_a]:underline':
          !isHamburger,
      })}
    >
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#chart'>Chart</a>
      </li>
      <li>
        <a href='#tokenomics'>Tokenomics</a>
      </li>
    </ul>
  );
}
