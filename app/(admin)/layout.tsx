import AdminHeader from "@/app/(admin)/components/AdminHeader";
import AdminFooter from "@/app/(admin)/components/AdminFooter";

export default function AdminLayout({children,}:
                                    { children: React.ReactNode; }) {
    return (
        <div className="admin-container">
            <AdminHeader/>
            <main>{children}</main>
            <AdminFooter/>
        </div>
    );
}