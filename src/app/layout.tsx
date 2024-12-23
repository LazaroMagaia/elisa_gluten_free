import { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import PageLoader from "./components/PageLoading";
import { Poppins } from 'next/font/google';
import { CartProvider } from "./context/CartContext";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* CDN Font Awesome */}
        <script src="https://kit.fontawesome.com/4b5b372bcb.js" crossorigin="anonymous"></script>
      </head>
      <CartProvider>
        <body className={`${poppins.className}`}>
          <PageLoader />
          <Header />
          {children}
        </body>
      </CartProvider>
    </html>
  );
}
