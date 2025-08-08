import React from 'react';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full mt-4">
      <div className="container max-w-screen-lg px-4 mx-auto">
        <nav className="flex items-center justify-between w-full px-6 py-3 text-orange-800 rounded-full shadow-md bg-orange-50">
          <div className="text-lg font-bold">
            Baja
          </div>
          <ul className="flex gap-2">
            <li>
              <a
                href="#materi"
                className="px-4 py-2 no-underline transition-colors duration-200 rounded-full hover:bg-orange-200"
              >
                Materi
              </a>
            </li>
            <li>
              <a
                href="#unggah"
                className="px-4 py-2 no-underline transition-colors duration-200 rounded-full hover:bg-orange-200"
              >
                Unggah
              </a>
            </li>
            <li>
              <a
                href="#baja"
                className="px-4 py-2 no-underline transition-colors duration-200 rounded-full hover:bg-orange-200"
              >
                Baja
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
