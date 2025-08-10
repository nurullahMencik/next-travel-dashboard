import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Sağ üstteki profil butonu */}
      <div className="absolute top-4 right-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>

      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Seyahatleriniz İçin En İyi Rehber
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          Hayalinizdeki tatili planlayın, en iyi otelleri bulun ve unutulmaz anılar biriktirin.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Hemen Keşfet
          </button>
          <button className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full border border-blue-600 hover:bg-gray-50 transition duration-300">
            Daha Fazla Bilgi
          </button>
        </div>
      </div>
    </div>
  );
}