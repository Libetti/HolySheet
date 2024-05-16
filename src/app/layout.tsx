import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HolySheet",
    description: "Holy sheet that's a lot of music!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-100 bg-blue-50">
            <body className={`${inter.className} h-100`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
