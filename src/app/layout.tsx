import "./globals.css";
import { Inter } from "next/font/google";
import { HeroContextProvider } from "../../context/HeroContext";
import { ProyectContextProvider } from "../../context/ProyectContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Natalia Chiara",
  description: "Creado por Natalia Chiara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HeroContextProvider>
        <ProyectContextProvider>
          <body className={inter.className}>{children}</body>
        </ProyectContextProvider>
      </HeroContextProvider>
    </html>
  );
}
