import { FaLock } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="w-full min-h-screen p-4 bg-orange-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-orange-300 rounded-xl">
        <div>
          <h2 className="text-lg font-semibold text-orange-800">Sugeng Rawuh</h2>
          <p className="text-xl text-orange-800 font-javanese">ꦱꦸꦒꦼꦁꦫꦮꦸꦃ</p>
        </div>
        <img src="ilustrasi.jpg" alt="Ilustrasi" className="object-contain w-20 h-20" />
      </div>

      {/* Menu List */}
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Item aktif */}
        <div className="flex items-center justify-between p-4 text-white bg-orange-800 shadow-md rounded-xl">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 text-xl text-orange-800 bg-white rounded-full font-javanese">ꦲ</div>
            <span className="text-lg font-semibold">Aksara Dasar</span>
          </div>
          <FaChevronRight />
        </div>

        {/* Item terkunci */}
        {[
          { label: 'Pepet (ê)', aksara: 'ꦼ' },
          { label: 'Wulu (i)', aksara: 'ꦶ' },
          { label: 'Taling (e)', aksara: 'ꦺ' },
          { label: 'Suku (u)', aksara: 'ꦸ' },
          { label: 'Taling (e)', aksara: 'ꦺ' },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 text-orange-800 bg-orange-200 shadow-sm rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 text-xl text-orange-800 bg-white rounded-full font-javanese">{item.aksara}</div>
              <span className="text-lg font-medium">{item.label}</span>
            </div>
            <FaLock className="text-orange-500" />
          </div>
        ))}
      </div>
      {/* Additional Content */}
      <div className="mt-6 bg-white shadow-md p-70 rounded-xl"></div>
      {/* Footer */}
      <div className="p-4 mt-6 text-sm text-center text-orange-800 bg-orange-300 rounded-xl">
        <p>© 2024 Aplikasi BAJA. All rights reserved.</p>
      </div>
    </div>
  );
}

export default HomePage;

