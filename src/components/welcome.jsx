import React from 'react';

function Welcome() {
  return (
    <div>
      <div className="h-screen w-full bg-orange-300 flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4 drop-shadow-md">Selamat datang di Aplikasi BAJA!</h1>
          <p className="text-lg md:text-xl text-slate-100 drop-shadow-sm">Senang sekali Anda ada di sini. Jelajahi fitur-fitur kami dan nikmati pengalaman Anda.</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
