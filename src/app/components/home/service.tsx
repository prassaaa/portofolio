export default function Service() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-semibold dark:text-light">Layanan yang Saya Tawarkan</h3>
                <a href="/service" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                    <span>See All Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                        <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
                    </svg>
                </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                {/* Service 1 */}
                <div className="group h-full">
                    <div className="h-full group-hover:animate-rotate-x group-hover:animate-duration-[2000ms] group-hover:animate-once group-hover:animate-ease-linear rounded-2xl bg-light p-4 text-center dark:bg-dark-2 dark:group-hover:border-primary dark:group-hover:border-[1px]">
                        <div className="grid h-32 place-content-center rounded-lg bg-white p-4 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path
                                    d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333" />
                                <path d="M56 24H24v32" />
                            </svg>
                        </div>
                        <p className="mt-4 text-base font-medium text-dark dark:text-light/70">
                            Aplikasi Web
                        </p>
                    </div>
                </div>

                {/* Service 2 */}
                <div className="group h-full">
                    <div className="h-full group-hover:animate-rotate-x group-hover:animate-duration-[2000ms] group-hover:animate-once group-hover:animate-ease-linear rounded-2xl bg-light p-4 text-center dark:bg-dark-2 dark:group-hover:border-primary dark:group-hover:border-[1px]">
                        <div className="grid h-32 place-content-center rounded-lg bg-white p-4 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="M26.666 18.667A5.333 5.333 0 0 1 32 13.333h16a5.333 5.333 0 0 1 5.333 5.334v26.666A5.333 5.333 0 0 1 48 50.667H32a5.333 5.333 0 0 1-5.334-5.334V18.667Zm-8 0v26.666m-8-24v21.334" />
                            </svg>
                        </div>
                        <p className="mt-4 text-base font-medium text-dark dark:text-light/70">
                            Aplikasi Mobile
                        </p>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="group h-full">
                    <div className="h-full group-hover:animate-rotate-x group-hover:animate-duration-[2000ms] group-hover:animate-once group-hover:animate-ease-linear rounded-2xl bg-light p-4 text-center dark:bg-dark-2 dark:group-hover:border-primary dark:group-hover:border-[1px]">
                        <div className="grid h-32 place-content-center rounded-lg bg-white p-4 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-alert-circle text-primary">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <p className="mt-4 text-base font-medium text-dark dark:text-light/70">
                            Fix Bug & Maintenance
                        </p>
                    </div>
                </div>

                {/* Service 4 */}
                <div className="group h-full">
                    <div className="h-full group-hover:animate-rotate-x group-hover:animate-duration-[2000ms] group-hover:animate-once group-hover:animate-ease-linear rounded-2xl bg-light p-4 text-center dark:bg-dark-2 dark:group-hover:border-primary dark:group-hover:border-[1px]">
                        <div className="grid h-32 place-content-center rounded-lg bg-white p-4 dark:bg-black">
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
                        <p className="mt-4 text-base font-medium text-dark dark:text-light/70">
                            Laporan Proposal & Skripsi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}