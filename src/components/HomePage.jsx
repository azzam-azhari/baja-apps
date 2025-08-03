import { FaLock } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-orange-100 p-4">
      {/* Header */}
      <div className="bg-orange-300 rounded-xl p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg text-orange-800 font-semibold">Sugeng Rawuh</h2>
          <p className="text-xl text-orange-800 font-javanese">ꦱꦸꦒꦼꦁꦫꦮꦸꦃ</p>
        </div>
        <img src="ilustrasi.jpg" alt="Ilustrasi" className="w-20 h-20 object-contain" />
      </div>

      {/* Menu List */}
      <div className="mt-6 space-y-4">
        {/* Item aktif */}
        <div className="bg-orange-800 text-white rounded-xl p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-orange-800 font-javanese text-xl w-12 h-12 flex items-center justify-center rounded-full">ꦲ</div>
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
        ].map((item, index) => (
          <div key={index} className="bg-orange-200 text-orange-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="bg-white text-orange-800 font-javanese text-xl w-12 h-12 flex items-center justify-center rounded-full">{item.aksara}</div>
              <span className="text-lg font-medium">{item.label}</span>
            </div>
            <FaLock className="text-orange-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
