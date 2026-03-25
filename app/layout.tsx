import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";


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
        <Navbar/>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
