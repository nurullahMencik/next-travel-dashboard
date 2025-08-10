import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8">
      {/* Navbar Alanı */}
      <nav className="flex justify-between items-center py-4 px-6 bg-white rounded-lg shadow-md mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Travel Dashboard</h1>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-700 transition">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>

      {/* Ana Dashboard İçeriği */}
      <div className="container mx-auto">
        {/* Hoş Geldiniz Mesajı */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Hoş Geldiniz
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Seyahatlerinizi yönetmeye ve yeni yerler keşfetmeye hazır mısınız?
          </p>
        </div>

        {/* Bilgi Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-4">Rezervasyonlar</h2>
            </div>
            <p className="text-gray-500 mb-4">Otel ekleyin veya güncelleyin</p>
            <Link href="/hotels" legacyBehavior >
              <a className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Otelleri Görüntüle &rarr;
              </a>
            </Link>
          </div>

          {/* Kart 2: Kayıtlı Oteller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-5 4v-4a2 2 0 012-2h2a2 2 0 012 2v4m-5 0h8a2 2 0 002-2v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4m-5 0h8m-9 0H3" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-4">Kayıtlı Oteller</h2>
            </div>
            <p className="text-gray-500 mb-4">Favori otellerinizi listeleyin, kaydedin ve yönetin.</p>
            <Link href="/hotels" legacyBehavior>
              <a className="font-medium text-purple-600 hover:text-purple-500 transition-colors">
                Otelleri Keşfet &rarr;
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 