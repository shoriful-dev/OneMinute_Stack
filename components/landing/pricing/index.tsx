import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
        Fair, usage-based pricing.
      </h2>
      <p className="text-zinc-500 font-light mb-16">
        Start free, upgrade as you grow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/20 flex flex-col items-start text-left hover:bg-zinc-900/40 transition-colors">
          <div className="text-sm font-medium text-zinc-400 mb-2">Starter</div>
          <div className="text-4xl font-medium text-white tracking-tight mb-6">
            $0 <span className="text-lg text-zinc-600 font-light">/mo</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light w-full">
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> 100 conversations/mo
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> 1 Knowledge Source
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> Community Support
            </li>
          </ul>
          <button className="w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium mt-auto">
            Start Free
          </button>
        </div>

        <div className="p-8 relative overflow-hidden rounded-3xl border bg-white/3 border-white/10 flex flex-col items-start text-left hover:bg-zinc-900/40 transition-colors">
          <div className="absolute top-0 right-0 px-4 py-1 bg-white/10 rounded-bl-xl text-sm">POPULAR</div>
          <div className="text-sm font-medium text-indigo-400 mb-2">Pro</div>
          <div className="text-4xl font-medium text-white tracking-tight mb-6">
            $49 <span className="text-lg text-zinc-600 font-light">/mo</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light w-full">
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-indigo-400" /> unlimited conversations/mo
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-indigo-400" /> unlimited Knowledge Source
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-indigo-400" /> Community Support
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-indigo-400" /> Custom Branding
            </li>
          </ul>
          <button className="w-full py-3 cursor-pointer rounded-xl border border-white/10 text-black bg-white transition-colors text-sm font-medium mt-auto hover:bg-zinc-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
