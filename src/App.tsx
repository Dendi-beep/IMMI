import React, { useEffect, useState } from 'react';
import { Menu, X, Users, Award, BookOpen, ChevronRight, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-red-700 font-bold text-2xl animate-float">ORGANIX</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">Beranda</a>
              <a href="#about" className="nav-link">Tentang</a>
              <a href="#activities" className="nav-link">Kegiatan</a>
              <a href="#contact" className="nav-link">Kontak</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-red-700 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-all duration-300">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-all duration-300">Tentang</a>
              <a href="#activities" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-all duration-300">Kegiatan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-all duration-300">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up animate-pulse-slow">Organisasi Mahasiswa Terbaik</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Membentuk Generasi Muda yang Berkualitas dan Berdaya Saing
            </p>
            <button className="button-hover bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 inline-flex items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Bergabung Sekarang
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Tentang Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">Organisasi yang berfokus pada pengembangan potensi mahasiswa dalam bidang akademik dan non-akademik.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-red-700" size={32} />,
                title: "Komunitas",
                description: "Bergabung dengan ribuan mahasiswa aktif dari berbagai jurusan."
              },
              {
                icon: <BookOpen className="text-red-700" size={32} />,
                title: "Pembelajaran",
                description: "Program pembelajaran yang terstruktur dan berkualitas."
              },
              {
                icon: <Award className="text-red-700" size={32} />,
                title: "Prestasi",
                description: "Raih berbagai penghargaan dan pengakuan di tingkat nasional."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Kegiatan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">Berbagai kegiatan menarik yang dapat mengembangkan potensi diri Anda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
                title: "Seminar Nasional",
                description: "Seminar dengan pembicara nasional dan internasional."
              },
              {
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
                title: "Workshop Keterampilan",
                description: "Pelatihan praktis untuk meningkatkan soft skill dan hard skill."
              },
              {
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000",
                title: "Kompetisi Mahasiswa",
                description: "Berbagai lomba untuk mengasah kemampuan mahasiswa."
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Hubungi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan.</p>
          </div>

          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div className="transform transition-all duration-300 hover:translate-y-[-2px] animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md shadow-sm" />
              </div>
              <div className="transform transition-all duration-300 hover:translate-y-[-2px] animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md shadow-sm" />
              </div>
              <div className="transform transition-all duration-300 hover:translate-y-[-2px] animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md shadow-sm"></textarea>
              </div>
              <button type="submit" className="button-hover w-full bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-slide-in-left">
              <h3 className="text-xl font-bold mb-4 animate-float">ORGANIX</h3>
              <p className="text-gray-400">Membentuk generasi muda yang berkualitas dan berdaya saing tinggi.</p>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <p className="text-gray-400">Gedung Fakultas, Lantai 2</p>
              <p className="text-gray-400">Kampus Universitas</p>
              <p className="text-gray-400">Email: info@organix.ac.id</p>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4">Sosial Media</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook size={24} />, href: "#" },
                  { icon: <Instagram size={24} />, href: "#" },
                  { icon: <Twitter size={24} />, href: "#" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ORGANIX. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-700 text-white p-3 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 animate-fade-in button-hover"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;