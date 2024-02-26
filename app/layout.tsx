import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";
import SideNav from "@/app/ui/sidenav";

export const metadata: Metadata = {
    title: { template: "%s | Brief WebApp", default: "Brief WebApp" },
    description: "Brief Web Application made by IPZ-20-1 Bily Oleksandr",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    <div className="w-full flex-none md:w-64">
                        <SideNav />
                    </div>
                    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
