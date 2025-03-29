import { Metadata } from "next";
import ProfileCard from "./components/home/profilecard";
import WorkExperience from "./components/home/workexperience";
import { InterfaceProfile } from "./interfaces/profile";
import { InterfaceWorkExperience } from "./interfaces/work";
import Service from "./components/home/service";
import Marquee from "./components/Marquee";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME || "PrasaDev"} | Home`,
  description: "My Portfolio",
};

const profiles: InterfaceProfile = {
  name: "Prasetyo Ari Wibowo",
  title: "Full Stack Developer",
  description: "A Passionate Full Stack Developer & Product Designer having 12 years of Experiences over 24+ Country Worldwide.",
  email: "pras.ari69@gmail.com",
  image: "/assets/images/me.png",
};

const works: InterfaceWorkExperience[] = [
  {
    company: "NusantaraHAX",
    position: "App Developer & Reverse Engineer",
    startDate: "2022",
    endDate: "2025",
    imageCompany: "/assets/images/logo/nusanhax.svg",
  },
  {
    company: "Bumdes Wonorejo",
    position: "Web Developer",
    startDate: "2024",
    endDate: "2024",
    imageCompany: "/assets/images/logo/bumdes.svg",
  },
  {
    company: "Dinas Parawisata & Kebudayaan",
    position: "Web Developer",
    startDate: "2025",
    endDate: "2025",
    imageCompany: "/assets/images/logo/disparbud.svg",
  }
];

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <ProfileCard profiles={profiles} />

      <WorkExperience works={works} />

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">Project Terbaru</h3>
          <a href="/project" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
            <span>All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </a>
        </div>

        <div className="mt-6 space-y-6">
          <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
            <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
              <img 
                src="/assets/images/project1.png" 
                alt="Project 1 preview" 
                className="h-full w-full rounded-t-lg object-cover object-top transition" 
              />

              <a 
                href="/assets/images/project1.png" 
                data-gall="project-gallry-1" 
                className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                  <path d="M10 4.167v11.666M4.167 10h11.666" />
                </svg>
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
              <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                Sistem Informasi Cagar Budaya
              </span>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
            <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
              <img 
                src="/assets/images/project2.png" 
                alt="Project 2 preview" 
                className="h-full w-full rounded-t-lg object-cover object-top transition" 
              />

              <a 
                href="/assets/images/project2.png" 
                data-gall="project-gallry-2" 
                className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                  <path d="M10 4.167v11.666M4.167 10h11.666" />
                </svg>
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
              <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                Sistem Informasi Prestasi Siswa
              </span>
            </div>
          </div>
        </div>
      </div>

      <Service />
      
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <Marquee />
        <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
          Mari&apos;👋 <br />
          Kita Bekerja Sama!
        </h2>
      </div>
    </main>
  );
}