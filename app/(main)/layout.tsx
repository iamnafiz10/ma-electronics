import Header from "@/app/(main)/components/Header";
import Footer from "@/app/(main)/components/Footer";
import BackToTop from '@/app/(main)/components/BackToTop';

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
            <BackToTop/>
        </>
    );
}