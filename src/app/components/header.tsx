"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDarkMode } from "../context/darkmodecontext";

export const Header = () => {
    const pathname = usePathname();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50">
            <div className="">
                <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-black dark:shadow-dark dark:border-b-primary dark:border-b-[0.5px] dark:border-opacity-50">
                    <a href="index.html" className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                            <path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z" />
                        </svg>

                        <span> Prasa<span className="text-primary text-opacity-[1]">Dev</span> </span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden flex-1 flex-wrap items-center justify-center lg:flex">
                        <li className="group">
                            <Link
                                className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium transition hover:bg-secondary hover:text-dark group-active:bg-active dark:hover:bg-dark-2 dark:group-active:bg-dark-2 dark:group-hover:text-primary dark:hover:text-white ${pathname === '/' ? 'text-black bg-secondary hover:bg-secondary dark:text-primary hover:text-dark dark:hover:text-white dark:bg-dark-2' : 'text-muted hover:text-dark dark:hover:text-white dark:hover:bg-dark-2 '
                                    }`}
                                href="/"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.2"
                                    className={`h-6 w-6 transition group-hover:text-black dark:group-hover:text-primary ${pathname === '/' ? 'group-active:hover:text-white text-black dark:text-primary dark:hover:text-white' : 'text-[#8991A7] dark:text-[#8991A7] dark:hover:text-white'}`}
                                >
                                    <path d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z" />
                                    <path d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0" />
                                </svg>
                                <span>Beranda</span>
                            </Link>
                        </li>

                        <li className="group">
                            <Link
                                className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium transition hover:bg-secondary hover:text-dark group-active:bg-active dark:hover:bg-dark-2 dark:group-active:bg-dark-2 dark:group-hover:text-primary dark:hover:text-white ${pathname === '/about' ? 'text-black bg-secondary hover:bg-secondary dark:text-primary hover:text-dark dark:hover:text-white dark:bg-dark-2' : 'text-muted hover:text-dark dark:hover:text-white dark:hover:bg-dark-2 '
                                    }`}
                                href="/about"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.2"
                                    className={`h-6 w-6 transition group-hover:text-black dark:group-hover:text-primary ${pathname === '/about' ? 'group-active:hover:text-white text-black dark:text-primary dark:hover:text-white' : 'text-[#8991A7] dark:text-[#8991A7] dark:hover:text-white'}`}
                                >
                                    <path d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                    <path d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z" />
                                    <path d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041" />
                                </svg>
                                <span>Tentang Saya</span>
                            </Link>
                        </li>

                        <li className="group">
                        <Link
                            className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium transition hover:bg-secondary hover:text-dark group-active:bg-active dark:hover:bg-dark-2 dark:group-active:bg-dark-2 dark:group-hover:text-primary dark:hover:text-white ${pathname === '/service' ? 'text-black bg-secondary hover:bg-secondary dark:text-primary hover:text-dark dark:hover:text-white dark:bg-dark-2' : 'text-muted hover:text-dark dark:hover:text-white dark:hover:bg-dark-2'}`}
                            href="/service"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" className={`h-6 w-6 transition group-hover:text-black dark:group-hover:text-primary ${pathname === '/jasa' ? 'group-active:hover:text-white text-black dark:text-primary dark:hover:text-white' : 'text-[#8991A7] dark:text-[#8991A7] dark:hover:text-white'}`}>
                                <path d="M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334" />
                            </svg>
                            <span>Jasa</span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link
                            className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium transition hover:bg-secondary hover:text-dark group-active:bg-active dark:hover:bg-dark-2 dark:group-active:bg-dark-2 dark:group-hover:text-primary dark:hover:text-white ${pathname === '/project' ? 'text-black bg-secondary hover:bg-secondary dark:text-primary hover:text-dark dark:hover:text-white dark:bg-dark-2' : 'text-muted hover:text-dark dark:hover:text-white dark:hover:bg-dark-2'}`}
                            href="/project"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" className={`h-6 w-6 transition group-hover:text-black dark:group-hover:text-primary ${pathname === '/jasa' ? 'group-active:hover:text-white text-black dark:text-primary dark:hover:text-white' : 'text-[#8991A7] dark:text-[#8991A7] dark:hover:text-white'}`}>
                                <path d="M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334" />
                            </svg>
                            <span>Project</span>
                        </Link>
                    </li>
                    </ul>

                    <div className="hidden items-center gap-4 lg:flex">
                        {darkMode ? (
                            <button
                                type="button"
                                onClick={toggleDarkMode}
                                className="group flex h-10 w-10 items-center justify-center rounded-lg text-dark transition hover:bg-light hover:text-dark dark:text-[#FD7E41] dark:hover:bg-dark dark:hover:text-[#FD7E41]"
                                aria-label="Switch to Light Mode"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="h-6 w-6"
                                >
                                    <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z" />
                                </svg>
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={toggleDarkMode}
                                className="hs-dark-mode group flex h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-secondary dark:text-gray-400 dark:hover:text-gray-500"
                                aria-label="Switch to Dark Mode"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-6 w-6"
                                >
                                    <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z" />
                                </svg>
                            </button>
                        )}

                        <a href="contact.html" className="inline-flex items-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white">
                            <span>Let's Talk</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                                <path d="M17.5 11.667v-5h-5" />
                                <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        type="button" 
                        className="text-dark transition dark:text-white/70 lg:hidden"
                        onClick={toggleMobileMenu}
                        aria-controls="mobile-menu" 
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle Navigation</span>
                        <svg className="h-9 w-9 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-black bg-opacity-80 lg:hidden" onClick={toggleMobileMenu}>
                    <div 
                        className="fixed right-0 top-0 h-full w-[75%] max-w-sm overflow-y-auto bg-white p-8 dark:bg-black dark:border-l dark:border-primary dark:border-opacity-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <a href="index.html" className="inline-flex items-center gap-3 text-2xl font-semibold text-dark dark:text-white">
                                <span> Prasa<span className="text-primary">Dev</span> </span>
                            </a>
                            <button
                                type="button"
                                className="text-dark dark:text-white"
                                onClick={toggleMobileMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <nav>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/"
                                        className={`block py-2 text-base font-medium ${pathname === '/' ? 'text-primary' : 'text-dark dark:text-white'}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className={`block py-2 text-base font-medium ${pathname === '/about' ? 'text-primary' : 'text-dark dark:text-white'}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Tentang Saya
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/service"
                                        className={`block py-2 text-base font-medium ${pathname === '/service' ? 'text-primary' : 'text-dark dark:text-white'}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Jasa
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="/project"
                                        className={`block py-2 text-base font-medium ${pathname === '/project' ? 'text-primary' : 'text-dark dark:text-white'}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Project
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        
                        <div className="mt-8">
                            <button
                                type="button"
                                onClick={() => {
                                    toggleDarkMode();
                                }}
                                className="flex items-center gap-2 text-dark dark:text-white"
                            >
                                {darkMode ? (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            className="h-5 w-5 text-primary"
                                        >
                                            <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Z" />
                                            {/* Rest of the sun icon path */}
                                        </svg>
                                        <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-5 w-5"
                                        >
                                            <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24a8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z" />
                                        </svg>
                                        <span>Dark Mode</span>
                                    </>
                                )}
                            </button>
                        </div>
                        
                        <div className="mt-8">
                            <a 
                                href="contact.html" 
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-primary dark:bg-primary dark:hover:bg-opacity-90"
                                onClick={toggleMobileMenu}
                            >
                                <span>Let's Talk</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                                    <path d="M17.5 11.667v-5h-5" />
                                    <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};