import { Metadata } from "next";
import ProfileCard from "../components/home/profilecard";
import { InterfaceProfile } from "../interfaces/profile";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME || "PrasaDev"} | Services`,
  description: "My Services",
};

// Menggunakan data profil yang sama dengan halaman Home
const profiles: InterfaceProfile = {
  name: "Prasetyo Ari Wibowo",
  title: "Full Stack Developer",
  description: "A Passionate Full Stack Developer & Product Designer having 12 years of Experiences over 24+ Country Worldwide.",
  email: "pras.ari69@gmail.com",
  image: "/assets/images/me.png",
};

export default function Services() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* ProfileCard di bagian kiri */}
      <ProfileCard profiles={profiles} />
      
      {/* Konten Services di bagian kanan (span 2 kolom) */}
      <div className="col-span-1 lg:col-span-2 rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <h1 className="text-3xl font-semibold mb-6 dark:text-white">List Jasa</h1>
        
        <div className="space-y-6">
          <p className="dark:text-gray-300">
            Berikut list jasa yang saya tawarkan
          </p>
          
          {/* Service cards */}
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:mt-14">
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333" />
                  <path d="M56 24H24v32" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Aplikasi Web
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M26.666 18.667A5.333 5.333 0 0 1 32 13.333h16a5.333 5.333 0 0 1 5.333 5.334v26.666A5.333 5.333 0 0 1 48 50.667H32a5.333 5.333 0 0 1-5.334-5.334V18.667Zm-8 0v26.666m-8-24v21.334" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Aplikasi Mobile
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M10.666 13.333a2.667 2.667 0 0 1 2.667-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v5.334a2.667 2.667 0 0 1-2.666 2.666H13.332a2.666 2.666 0 0 1-2.667-2.666v-5.334Zm0 21.334A2.667 2.667 0 0 1 13.333 32H24a2.667 2.667 0 0 1 2.666 2.667v16A2.667 2.667 0 0 1 24 53.333H13.333a2.666 2.666 0 0 1-2.667-2.666v-16ZM37.334 32h16m-16 10.667h16m-16 10.666h16" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Laporan Tugas Akhir
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M36.214 36.773a15.982 15.982 0 0 1 1.12 5.894A15.86 15.86 0 0 1 32 54.56a15.814 15.814 0 0 1-10.666 4.107c-8.827 0-16-7.174-16-16 0-7.36 5.013-13.6 11.786-15.44" />
                  <path
                    d="M46.88 27.227c6.773 1.84 11.787 8.08 11.787 15.44 0 8.826-7.174 16-16 16A15.814 15.814 0 0 1 32 54.56" />
                  <path d="M16 21.333a16 16 0 1 0 32 0 16 16 0 0 0-32 0Z" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Mentoring
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                  className="feather feather-file-text text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Laporan Proposal
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                  className="feather feather-alert-circle text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Fix Bug & Maintenance
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M33.333 42.667H10.667A2.667 2.667 0 0 1 8 40V13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333v21.334M18.667 53.333h10.666M24 42.667v10.666M53.333 56l5.334-5.333-5.334-5.334m-8 0L40 50.667 45.333 56" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Pengembangan Aplikasi
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                  strokeLinejoin="round" className="feather feather-book-open text-primary">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Penentuan Judul Skripsi
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold dark:text-white mt-10">Keahlian Saya</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-light p-4 rounded-lg dark:bg-dark-2">
              <span className="font-medium dark:text-white">Frontend Development</span>
            </div>
            <div className="bg-light p-4 rounded-lg dark:bg-dark-2">
              <span className="font-medium dark:text-white">Backend Development</span>
            </div>
            <div className="bg-light p-4 rounded-lg dark:bg-dark-2">
              <span className="font-medium dark:text-white">Reverse Engineering</span>
            </div>
            <div className="bg-light p-4 rounded-lg dark:bg-dark-2">
              <span className="font-medium dark:text-white">Mobile Development</span>
            </div>
            <div className="bg-light p-4 rounded-lg dark:bg-dark-2">
              <span className="font-medium dark:text-white">Database Design</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}