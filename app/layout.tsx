// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export const metadata = {
  title: "Skye Errands | Helping Hands Across the Isle of Skye",
  description: "Friendly errand runners for errands big and small — Helping get things done!",
  openGraph: {
    title: "Skye Errands",
    description: "Friendly, local help for errands big and small — connecting our community with care.",
    url: "https://www.skyeerrands.co.uk",
    images: ["/skye-og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main className="">{children}</main>
        
      <FloatingContactButton/>
        <Footer/>
      </body>
    </html>
  );
}
