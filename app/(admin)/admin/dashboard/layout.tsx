"use client";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen block md:flex bg-[#F6F8FB]">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Wrapper */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <AdminHeader />

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-6 py-6 pt-[72px] md:pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}
