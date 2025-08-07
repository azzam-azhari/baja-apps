import React from 'react';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center w-full mt-4">
      <nav className="flex items-center justify-between w-full max-w-screen-lg px-6 py-3 mx-auto text-orange-800 rounded-full shadow-md bg-orange-50">
        <div className="text-lg font-bold">
          Baja
        </div>
        <ul className="flex gap-6">
          <li>
            <a href="#materi" className="hover:underline">Materi</a>
          </li>
          <li>
            <a href="#unggah" className="hover:underline">Unggah</a>
          </li>
          <li>
            <a href="#baja" className="hover:underline">Baja</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
