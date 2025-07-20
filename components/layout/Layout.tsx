import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface TLayoutProps {
    children: ReactNode
}



const Layout: React.FC<TLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;