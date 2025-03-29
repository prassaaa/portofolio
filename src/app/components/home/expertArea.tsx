export default function ExpertArea() {
    return (
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="group text-center">
                <div className="grid lg:group-hover:animate-rotate-y lg:group-hover:animate-once lg:group-hover:animate-duration-[2000ms] lg:group-hover:animate-ease-linear place-content-center rounded-lg bg-secondary p-3 dark:bg-dark-2 dark:group-hover:bg-primary dark:group-hover:bg-opacity-50">
                    <img src="assets/images/logo/laravel.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                    Laravel
                </p>
            </div>
            <div className="group text-center">
                <div className="grid lg:group-hover:animate-rotate-y lg:group-hover:animate-once lg:group-hover:animate-duration-[2000ms] lg:group-hover:animate-ease-linear place-content-center rounded-lg bg-secondary p-3 dark:bg-dark-2 dark:group-hover:bg-primary dark:group-hover:bg-opacity-50">
                    <img src="assets/images/logo/flutter.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                    Flutter
                </p>
            </div>
            <div className="group text-center">
                <div className="grid lg:group-hover:animate-rotate-y lg:group-hover:animate-once lg:group-hover:animate-duration-[2000ms] lg:group-hover:animate-ease-linear place-content-center rounded-lg bg-secondary p-3 dark:bg-dark-2 dark:group-hover:bg-primary dark:group-hover:bg-opacity-50">
                    <img src="assets/images/logo/codeigniter.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                    CodeIgniter 
                </p>
            </div>
            <div className="group text-center">
                <div className="grid lg:group-hover:animate-rotate-y lg:group-hover:animate-once lg:group-hover:animate-duration-[2000ms] lg:group-hover:animate-ease-linear place-content-center rounded-lg bg-secondary p-3 dark:bg-dark-2 dark:group-hover:bg-primary dark:group-hover:bg-opacity-50">
                    <img src="assets/images/logo/python.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                    Python
                </p>
            </div>
            <div className="group text-center">
                <div className="grid lg:group-hover:animate-rotate-y lg:group-hover:animate-once lg:group-hover:animate-duration-[2000ms] lg:group-hover:animate-ease-linear place-content-center rounded-lg bg-secondary p-3 dark:bg-dark-2 dark:group-hover:bg-primary dark:group-hover:bg-opacity-50">
                    <img src="assets/images/logo/mysql.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                    MySQL
                </p>
            </div>
            <div className="group text-center">
                <div className="grid lg:group-hover:animate-rotate-y lg:group-hover:animate-once lg:group-hover:animate-duration-[2000ms] lg:group-hover:animate-ease-linear place-content-center rounded-lg bg-secondary p-3 dark:bg-dark-2 dark:group-hover:bg-primary dark:group-hover:bg-opacity-50">
                    <img src="assets/images/logo/firebase.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                    Firebase
                </p>
            </div>
        </div>
    )
}