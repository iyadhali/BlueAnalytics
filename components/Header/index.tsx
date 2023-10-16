'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import User from "./User";
import Menutab from "./tab";
import Darkmode from "./darkmode";
import Signbutton from "./signbutton"
import { useStore } from '@/app/context/store';


const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {


  const setIsLogged = useStore((state) => state.setIsLogged);
  const isLogged = useStore((state) => state.isLogged);

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

        <div className="flex-grow flex justify-center">
        <Menutab />

        </div>
        

        <div className="flex items-center gap-3 2xsm:gap-7">


    {/* <!-- User Area --> */}
            

        

            { !isLogged &&<Link
              href="/auth/signIn"
              className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Sign in
            </Link>}
          {isLogged && (
                <User />
              )}
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
