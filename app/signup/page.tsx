'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signupError) {
        console.error('Signup error:', signupError);
        setError(signupError.message);
      } else if (data) {
        console.log('Signup successful:', data);
        alert('Account created successfully! You can now log in.');
        window.location.href = '/login';
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#88B04B] via-[#F7CAC9] to-[#FDD835] p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border-8 border-[#FF6F61]">
        <h1 className="text-4xl font-bold text-center mb-2 text-[#6B5B95]" style={{ fontFamily: 'Baloo 2' }}>
          Join PawMatch! 🐶
        </h1>
        <p className="text-center text-gray-600 mb-6" style={{ fontFamily: 'Fredoka' }}>
          Create your account
        </p>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border-4 border-[#FF6F61] rounded-xl">
            <p className="text-[#FF6F61] font-semibold text-sm" style={{ fontFamily: 'Fredoka' }}>
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-[#6B5B95] font-semibold">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-4 border-[#42A5F5] rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-[#6B5B95] font-semibold">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="border-4 border-[#42A5F5] rounded-xl"
            />
            <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Fredoka' }}>
              Minimum 6 characters
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#88B04B] hover:bg-[#FF6F61] text-white font-bold py-3 rounded-xl border-4 border-[#6B5B95] shadow-lg transform transition hover:scale-105"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>

        <p className="text-center mt-6 text-gray-600" style={{ fontFamily: 'Fredoka' }}>
          Already have an account?{' '}
          <Link href="/login" className="text-[#88B04B] font-bold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
