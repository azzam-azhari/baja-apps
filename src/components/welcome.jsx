import React from 'react';

function Welcome() {
  return (
    <div className="h-screen w-full bg-orange-300 flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4 drop-shadow-md">
          Welcome to Our Application!
        </h1>
        <p className="text-lg md:text-xl text-slate-100 drop-shadow-sm">
          We are glad to have you here. Explore our features and enjoy your experience.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
