import Hero from '@/components/landing/hero';
import Navber from '@/components/landing/nav';

const Page = () => {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navber />
      <Hero />
    </main>
  );
};

export default Page;
