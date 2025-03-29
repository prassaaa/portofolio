"use client";

import { useState } from "react";
import ProfileCard from "../components/home/profilecard";
import { InterfaceProfile } from "../interfaces/profile";
import ImageGallery from "../components/ImageGallery";

// Define profile data
const profiles: InterfaceProfile = {
  name: "Prasetyo Ari Wibowo",
  title: "Full Stack Developer",
  description: "A Passionate Full Stack Developer & Product Designer having 12 years of Experiences over 24+ Country Worldwide.",
  email: "pras.ari69@gmail.com",
  image: "/assets/images/me.png",
};

// Define TypeScript interfaces
interface GalleryImage {
  src: string;
  alt?: string;
}

interface ProjectGalleries {
  [key: string]: GalleryImage[];
}

// Project gallery data
const projectGalleries: ProjectGalleries = {
  "project-gallery-1": [
    { src: "/assets/images/project1.png", alt: "Sistem Informasi Cagar Budaya - Homepage" },
    { src: "/assets/images/project1-login.png", alt: "Sistem Informasi Cagar Budaya - Login Page" },
    { src: "/assets/images/project1-dashboard.png", alt: "Sistem Informasi Cagar Budaya - Admin Dashboard" },
    { src: "/assets/images/project1-peta.png", alt: "Sistem Informasi Cagar Budaya - Peta" },
  ],
  "project-gallery-2": [
    { src: "/assets/images/project2.png", alt: "Sistem Informasi Prestasi Siswa - Homepage" },
    { src: "/assets/images/project2-login.png", alt: "Sistem Informasi Prestasi Siswa - Login Page" },
    { src: "/assets/images/project2-dashboard.png", alt: "Sistem Informasi Prestasi Siswa - Admin Dashboard" },
    { src: "/assets/images/project2-notifikasi.png", alt: "Sistem Informasi Prestasi Siswa - Notifikasi" },
  ],
};

export default function Projects() {
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [currentGallery, setCurrentGallery] = useState<GalleryImage[] | null>(null);
  const [initialIndex, setInitialIndex] = useState<number>(0);

  const openGallery = (galleryId: string, index: number = 0) => {
    setCurrentGallery(projectGalleries[galleryId]);
    setInitialIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* ProfileCard di bagian kiri */}
      <ProfileCard profiles={profiles} />
      
      {/* Konten Projects di bagian kanan (span 2 kolom) */}
      <div className="col-span-1 lg:col-span-2 rounded-2xl bg-white p-4 sm:p-6 shadow dark:bg-black dark:shadow-dark">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 dark:text-white">Portfolio Projects</h1>
        
        <div className="space-y-4 sm:space-y-6">
          <p className="dark:text-gray-300">
            Berikut adalah kumpulan project yang telah saya kerjakan
          </p>
          
          {/* Featured Projects Section */}
          <div className="rounded-2xl bg-white p-3 sm:p-6 shadow dark:bg-black dark:shadow-dark">
            <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
              <div className="group relative overflow-hidden rounded-lg bg-light dark:bg-dark-2">
                <div className="relative aspect-6/4 overflow-hidden">
                  <img 
                    src="/assets/images/project1.png" 
                    alt="Project 1 preview" 
                    className="h-full w-full object-cover object-top transition group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Tombol '+' yang akan membuka gallery */}
                  <button 
                    onClick={() => openGallery("project-gallery-1")}
                    aria-label="Lihat galeri foto"
                    className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition hover:bg-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6">
                      <path d="M10 4.167v11.666M4.167 10h11.666" />
                    </svg>
                  </button>
                </div>
                
                <div className="absolute bottom-0 w-full p-3 sm:p-4">
                  <h4 className="text-base sm:text-lg font-medium text-white">Sistem Informasi Cagar Budaya</h4>
                  <div className="mt-1 sm:mt-2 flex flex-wrap gap-2">
                    <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary">Web App</span>
                    <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary">Laravel 10</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg bg-light dark:bg-dark-2">
                <div className="relative aspect-6/4 overflow-hidden">
                  <img 
                    src="/assets/images/project2.png" 
                    alt="Project 2 preview" 
                    className="h-full w-full object-cover object-top transition group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Tombol '+' yang akan membuka gallery */}
                  <button 
                    onClick={() => openGallery("project-gallery-2")} 
                    aria-label="Lihat galeri foto"
                    className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition hover:bg-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6">
                      <path d="M10 4.167v11.666M4.167 10h11.666" />
                    </svg>
                  </button>
                </div>
                
                <div className="absolute bottom-0 w-full p-3 sm:p-4">
                  <h4 className="text-base sm:text-lg font-medium text-white">Sistem Informasi Prestasi Siswa</h4>
                  <div className="mt-1 sm:mt-2 flex flex-wrap gap-2">
                    <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary">Web App</span>
                    <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary">Laravel 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Gallery Modal */}
      {galleryOpen && currentGallery && (
        <ImageGallery 
          isOpen={galleryOpen} 
          onClose={closeGallery} 
          images={currentGallery}
          initialIndex={initialIndex}
        />
      )}
    </main>
  );
}