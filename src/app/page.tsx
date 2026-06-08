'use client';

import Button from '@/components/Button';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0l-4.725 2.885a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-white/10 backdrop-blur rounded-2xl mb-4">
            <span className="text-5xl">🎨</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ProSensia Button Component
          </h1>
          <p className="text-xl text-purple-200">
            Modular React Button with TypeScript Interfaces & Tailwind CSS
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-purple-200">TypeScript</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-purple-200">Tailwind CSS</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-purple-200">No 'any' type</span>
          </div>
        </div>

        {/* Button Variants */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🎯</span> Button Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">📏</span> Button Sizes
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">Small Button</Button>
            <Button variant="primary" size="md">Medium Button</Button>
            <Button variant="primary" size="lg">Large Button</Button>
          </div>
        </div>

        {/* Buttons with Icons */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">✨</span> Buttons with Icons
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" icon={<ArrowRightIcon />}>Continue</Button>
            <Button variant="danger" icon={<TrashIcon />}>Delete</Button>
            <Button variant="secondary" icon={<StarIcon />}>Favorite</Button>
          </div>
        </div>

        {/* Button States */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">⚡</span> Button States
          </h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" disabled>Disabled Button</Button>
              <Button variant="primary" fullWidth>Full Width Button</Button>
            </div>
          </div>
        </div>

        {/* TypeScript Interface Card */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📘</span>
            <h3 className="text-white font-mono text-lg">ButtonProps Interface</h3>
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-mono">No 'any' type</span>
          </div>
          <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}`}
          </pre>
        </div>

      </div>
    </main>
  );
}