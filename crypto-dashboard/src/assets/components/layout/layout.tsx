import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-slate-100">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;