import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export const metadata = {
  title: "Skye Errands | Helping Hands Across the Isle of Skye",
  description: "Friendly errand runners for errands big and small — Helping get things done!",
  openGraph: {
    title: "Skye Errands",
    description:
      "Friendly, local help for errands big and small — connecting our community with care.",
    url: "https://www.skyeerrands.co.uk",
    images: ["/skye-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "veog3f9zgy");
            `,
          }}
        />
      </head>

      <body className="relative">
        <Navbar />
        <main>{children}</main>
        <FloatingContactButton />
        <Footer />
      </body>
    </html>
  );
}
