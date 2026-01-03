"use client";
// import AdminSidebar from "../components/AdminSidebar";
// import AdminHeader from "../components/AdminHeader";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex bg-[#F6F8FB]">
            {/* Sidebar */}
            {/*<AdminSidebar/>*/}

            {/* Main */}
            <div className="flex-1 flex flex-col overflow-auto transition-all duration-300">
                {/*<AdminHeader/>*/}

                {/* CONTENT */}
                <main className="flex-1 px-6 py-6">
                    {children}
                </main>
            </div>
        </div>
    );
}