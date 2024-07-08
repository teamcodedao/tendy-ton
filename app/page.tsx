import Image from 'next/image';

import Background from './background';

export default function Home() {
  return (
    <main className='relative h-fit '>
      <Background />
      <div className='relative min-h-screen'>content</div>
    </main>
  );
}
