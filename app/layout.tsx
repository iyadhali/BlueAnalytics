"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState, useEffect, createContext, useContext } from "react";
import Loader from "@/components/common/LoadSpinner";
import AuthProvider from "./context/Authcontext";
import { useStore } from "./context/store";




import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

interface AuthContextType {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
 

  const [loading, setLoading] = useState<boolean>(true);

  const pathname = usePathname();

  const isLogged = useStore((state) => state.isLogged);


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <AuthProvider>
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden relative"> {/* Add relative here */}


              {/* <!-- ===== Content Area Start ===== --> */}
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden z-10">
                {/* <!-- ===== Header Start ===== --> */}
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                 
                />
                {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Sidebar Start ===== --> */}
              {isLogged && (
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              )}
              {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
          )}
        </div>
      </body>
    </html>
    </AuthProvider>
  );
}
