"use client";

import { useAdminGuard } from "@/app/features/auth/hooks/useAdminGuard";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ok = useAdminGuard();
  if (!ok) return null;

  return (
    <div className="min-h-screen block md:flex bg-[#F6F8FB]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto px-6 py-6 pt-[72px] md:pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}
