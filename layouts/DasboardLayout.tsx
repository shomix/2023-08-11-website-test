import React, { ReactNode, useState } from 'react';
import SideBar from '@/components/ui/organisms/SideBar';
import TopBar from '@/components/ui/organisms/TopBar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isSidebarclose, setIsSidebarclose] = useState(true);
  return (
    <div className="relative flex bg-grey overflow-hidden w-[100%] h-screen ">
      <div className=" hidden md:block">
        <SideBar isSidebarclose={isSidebarclose} />
      </div>

      <div className=" flex-1 flex-col">
        <TopBar />

        <main className="  h-full overflow-y-scroll ">{children}</main>
      </div>
    </div>
  );
}
