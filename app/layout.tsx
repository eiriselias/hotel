import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { AuthProvider } from "@/context/AuthContext";
import Dashboard from "@/components/dashboard/dashboard";


export const metadata: Metadata = {
  title: "Mi Hotel",
  description: "Un Hotel al alcanze de tus manos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <header className="fixed top-0 w-full z-50 h-16">
            <Navbar />
          </header>
          <div className="flex flex-1 pt-12 overflow-hidden">
            <Dashboard>
              <main className="flex-1 overflow-y-auto relative h-full">
                <div className="min-h-screen relative">
                  {children}
                </div>
                <Footer/>
              </main>
            </Dashboard>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
