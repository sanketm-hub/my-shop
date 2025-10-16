"use client";

import "./globals.css";
import { CardProvider } from "./context/cardcontext";
import { AuthProvider } from "@/app/context/authcontext"
import { Navbar } from "./Components/navbar";
import  Footer  from "./Components/Footer"

// export const metadata: Metadata = {
//   title: "My Shop",
//   description: "Ecommerce in Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <CardProvider>
            <Navbar />
          {children}
       
            <Footer />
             </CardProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
