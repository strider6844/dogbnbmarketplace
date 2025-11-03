import Link from 'next/link';
import { Dog, Home, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="geometric-shape top-10 left-10 w-32 h-32 bg-[var(--memphis-pink)] rounded-full opacity-60 floating" />
      <div className="geometric-shape top-40 right-20 w-24 h-24 bg-[var(--memphis-green)] opacity-50 spin-slow" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="geometric-shape bottom-20 left-1/4 w-40 h-40 bg-[var(--memphis-purple)] opacity-40 floating" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      <div className="geometric-shape bottom-40 right-1/3 w-28 h-28 bg-[var(--memphis-blue)] rounded-full opacity-50 spin-slow" />
      <div className="geometric-shape top-1/3 right-10 w-36 h-36 bg-[var(--memphis-yellow)] opacity-40" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-[var(--memphis-coral)] rounded-full flex items-center justify-center border-4 border-black shadow-lg">
              <Dog className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white text-shadow-memphis">PawMatch</h1>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button className="memphis-button bg-white text-black hover:bg-white">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="memphis-button bg-[var(--memphis-coral)] text-white hover:bg-[var(--memphis-coral)]">
                Sign Up
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="memphis-card bg-white p-8 rounded-3xl transform rotate-2">
              <h2 className="text-6xl font-bold mb-4 text-shadow-memphis" style={{ color: 'var(--memphis-purple)' }}>
                Find Your Perfect
                <br />
                <span style={{ color: 'var(--memphis-coral)' }}>Dog Care Match!</span>
              </h2>
            </div>
          </div>
          <p className="text-2xl text-white font-semibold mb-12 text-shadow-memphis max-w-2xl mx-auto">
            Connect with trusted dog hosts or find loving owners who need your care
          </p>

          {/* Main Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Owner Card */}
            <Link href="/browse?role=owner">
              <div className="memphis-card bg-[var(--memphis-pink)] p-8 rounded-3xl cursor-pointer group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                  <Home className="w-12 h-12" style={{ color: 'var(--memphis-coral)' }} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black">I Need Dog Care</h3>
                <p className="text-lg text-gray-800 mb-6">
                  Going on vacation? Find trusted hosts for your furry friend
                </p>
                <div className="memphis-button bg-[var(--memphis-coral)] text-white px-8 py-4 rounded-full text-xl inline-block">
                  Find a Host →
                </div>
              </div>
            </Link>

            {/* Host Card */}
            <Link href="/browse?role=host">
              <div className="memphis-card bg-[var(--memphis-green)] p-8 rounded-3xl cursor-pointer group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                  <Dog className="w-12 h-12" style={{ color: 'var(--memphis-purple)' }} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black">I'm a Dog Host</h3>
                <p className="text-lg text-gray-800 mb-6">
                  Love dogs? Earn money by providing care and companionship
                </p>
                <div className="memphis-button bg-[var(--memphis-purple)] text-white px-8 py-4 rounded-full text-xl inline-block">
                  Start Hosting →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="memphis-card bg-white p-12 rounded-3xl mb-12 memphis-pattern">
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--memphis-purple)' }}>
            Why Choose PawMatch?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--memphis-coral)] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-black">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Verified Hosts</h4>
              <p className="text-gray-700">All hosts are verified for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--memphis-green)] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-black">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Secure Payments</h4>
              <p className="text-gray-700">Payments held in escrow until service completion</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--memphis-blue)] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-black">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Quick Sniff Gigs</h4>
              <p className="text-gray-700">Short-term care starting at $15/hour</p>
            </div>
          </div>
        </div>

        {/* Subscription CTA */}
        <div className="memphis-card bg-[var(--memphis-yellow)] p-12 rounded-3xl text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8">Subscribe for $10/month or $100/year to unlock chat and booking features</p>
          <Link href="/signup">
            <Button className="memphis-button bg-black text-white hover:bg-black text-xl px-12 py-6 rounded-full">
              Join PawMatch Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
