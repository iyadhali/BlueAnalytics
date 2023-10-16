import React, { useState } from "react";
import Link from "next/link";
import { useStore } from '@/app/context/store';
import Signbutton from "./signbutton"

const Menutab: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "text-primary border-primary";
  const inactiveClasses = "border-transparent";
  const isLogged = useStore((state) => state.isLogged);

  return (
    <div className="flex flex-wrap gap-5 sm:gap-10">
      <Link
        href="#"
        className={`border-b-2 text-sm font-medium hover:text-primary md:text-base ${
          openTab === 1 ? activeClasses : inactiveClasses
        }`}
        onClick={() => setOpenTab(1)}
      >
        Home
      </Link>
      <Link
        href="#"
        className={`border-b-2 text-sm font-medium hover:text-primary md:text-base ${
          openTab === 2 ? activeClasses : inactiveClasses
        }`}
        onClick={() => setOpenTab(2)}
      >
        Updates
      </Link>
      <Link
        href="#"
        className={`border-b-2 text-sm font-medium hover:text-primary md:text-base ${
          openTab === 3 ? activeClasses : inactiveClasses
        }`}
        onClick={() => setOpenTab(3)}
      >
        Our heroes
      </Link>
      

      
    </div>
  );
  
};

export default Menutab;