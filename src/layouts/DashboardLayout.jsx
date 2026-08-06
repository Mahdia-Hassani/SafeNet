import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/TopBar";
import Assistant from "../components/assistant/Assistant";

function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="
        flex
        min-h-screen
        bg-background
        text-text-primary
      "
    >
      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}

      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Area */}

      <div
        className="
          flex
          min-h-screen
          flex-1
          flex-col
          lg:ml-0
        "
      >
        {/* Topbar */}

        <Topbar onMenuClick={() => setMobileOpen(true)} />

        {/* Page Content */}

        <main
          className="
            flex-1
            p-4
            sm:p-6
            lg:p-8
          "
        >
          {children}
        </main>
      </div>

      {/* Floating Assistant */}

      <Assistant />
    </div>
  );
}

export default DashboardLayout;
