'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import User from "./User";
import Darkmode from "./darkmode";


const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {


  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">

        { <Link href="/">
          <Image
            width={60}
            height={60}
            src={"/images/logo/bluelogo.svg"}
            alt="Logo"
          />
        </Link>}

        <div className="hidden sm:block">
          
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
 


          </ul>

          {/* <!-- User Area --> */}
          <User />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
