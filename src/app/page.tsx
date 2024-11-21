import Counter from '@/app/components/Counter';

import { Usuario } from '@/app/components/Usuario';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1 className="font-bold">React hooks </h1>
        <Counter />
        <br />
        <Usuario />
      </main>
    </div>
  );
}
