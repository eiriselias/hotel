import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { AuthProvider } from "@/context/AuthContext";


export const metadata: Metadata = {
  title: "Eiris Hotel",
  description: "Pagina de ejemplo de hoteles",
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
          <Navbar/>
          <main>
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
