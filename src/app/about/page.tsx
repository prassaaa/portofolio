import { Metadata } from "next";
import ProfileCard from "../components/home/profilecard";
import { InterfaceProfile } from "../interfaces/profile";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME || "PrasaDev"} | About`,
  description: "My Portfolio",
};

// Menggunakan data profil yang sama dengan halaman Home
const profiles: InterfaceProfile = {
  name: "Prasetyo Ari Wibowo",
  title: "Full Stack Developer",
  description: "A Passionate Full Stack Developer & Product Designer having 12 years of Experiences over 24+ Country Worldwide.",
  email: "pras.ari69@gmail.com",
  image: "/assets/images/me.png",
};

export default function About() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* ProfileCard di bagian kiri */}
      <ProfileCard profiles={profiles} />
      
      {/* Konten About di bagian kanan (span 2 kolom) */}
      <div className="col-span-1 lg:col-span-2 rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <h1 className="text-3xl font-semibold mb-6 dark:text-white">Tentang Saya</h1>
        
        <div className="space-y-6">
          <p className="dark:text-gray-300">
          Hai, perkenalkan saya Prasetyo Ari Wibowo. Saya adalah mahasiswa jurusan Sistem Informasi dengan ketertarikan yang sudah muncul sejak SMP, khususnya dalam membuat cheat game online. Ketertarikan tersebut kemudian menumbuhkan minat saya pada dunia software development secara keseluruhan. Selama menempuh pendidikan, saya memperdalam ilmu di bidang Sistem Informasi, mempelajari konsep dasar software development, database, dan arsitektur sistem. Pada satu titik, saya menemukan passion baru di dunia application development, khususnya sebagai Fullstack Developer dan Mobile Developer.
          </p>
          
          <h2 className="text-2xl font-semibold dark:text-white">Prestasi & Penghargaan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-light p-4 rounded-lg dark:bg-dark-2">
              <span className="font-medium dark:text-white">HAKI (Hak Atas Kekayaan Intelektual) Aplikasi Mobile Menggunakan Flutter</span>
            </div>
            <div className="bg-light p-4 rounded-lg dark:bg-dark-2">
              <span className="font-medium dark:text-white">Pemateri Workshop "Pengembangan Website Profesional dengan WordPress</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold dark:text-white">Pendidikan & Organisasi</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-medium dark:text-white">Prodi Sistem Informasi</h3>
              <p className="text-gray-600 dark:text-gray-400">Mahasiswa S1</p>
              <p className="text-gray-600 dark:text-gray-400">Universitas Nusantara PGRI Kediri, 2021-2025</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-medium dark:text-white">Asisten Dosen</h3>
              <p className="text-gray-600 dark:text-gray-400">Asdos</p>
              <p className="text-gray-600 dark:text-gray-400">Pemrograman Web, 2023-2024</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-medium dark:text-white">Hima Prodi Sistem Informasi</h3>
              <p className="text-gray-600 dark:text-gray-400">Kepala Divisi Hubungan Eksternal</p>
              <p className="text-gray-600 dark:text-gray-400">HIROSI, 2021-2024</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-medium dark:text-white">Ikatan Mahasiswa Sistem Informasi Indonesia</h3>
              <p className="text-gray-600 dark:text-gray-400">Wakil Ketua Hubungan Eksternal</p>
              <p className="text-gray-600 dark:text-gray-400">IMSII Korwil 7, 2021-2025</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-medium dark:text-white">Badan Eksekutif Mahasiswa Universitas</h3>
              <p className="text-gray-600 dark:text-gray-400">Direktur Jenderal Hubungan Organisasi</p>
              <p className="text-gray-600 dark:text-gray-400">Kementrian Luar Negeri, 2023-2024</p>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-14">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                Sertifikat
              </h3>

              <div className="flex items-center gap-2">
                <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
                  <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                    <img src="assets/images/sertif1.jpg" alt=""
                      className="h-50 w-50 rounded-t-lg object-cover object-top transition" />

                    <a href="/assets/images/sertif1.jpg" data-gall="project-gallry-1"
                      className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="1.5" className="h-6 w-6">
                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                      </svg>
                    </a>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                    <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                      Progate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}   