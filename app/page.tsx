import Features from '@/components/landing/features';
import Hero from '@/components/landing/hero';
import Integration from '@/components/landing/integration';
import Navber from '@/components/landing/nav';
import Pricing from '@/components/landing/pricing';
import SocialProof from '@/components/landing/social';

const Page = () => {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navber />
      <Hero />
      <SocialProof />
      <Features />
      <Integration />
      <Pricing />
    </main>
  );
};

export default Page;
