'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          
        </div>
        { pathname === '/' && <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo.webp"}
            alt="Logo"
          />
        </Link>}

        <div className="hidden sm:block">
          
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
