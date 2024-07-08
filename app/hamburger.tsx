'use client';

import {useEffect, useState} from 'react';
import {Portal} from 'react-portal';
import {Turn as SquashHamburger} from 'hamburger-react';

import Nav from './nav';
import {useHash} from '@/lib/use-hash';

export default function Hamburger() {
  const hash = useHash();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [hash]);

  return (
    <>
      <SquashHamburger
        size={50}
        toggled={isOpen}
        toggle={setOpen}
        color='white'
      />
      <Portal>
        {isOpen && (
          <>
            <div
              className='fixed inset-0 z-[9998] backdrop-blur-sm'
              onClick={() => setOpen(false)}
            ></div>
            <div className='fixed right-3 top-16 z-[9998] min-w-[280px] rounded-lg bg-black/35 px-5 pb-5 pt-16 shadow-xl'>
              <Nav isHamburger />
              <button
                className='absolute right-5 top-5 text-3xl text-white'
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <style jsx global>{`
              body {
                overflow: hidden;
              }
            `}</style>
          </>
        )}
      </Portal>
    </>
  );
}
