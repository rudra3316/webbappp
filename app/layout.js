import { Inter } from 'next/font/google'; // ✅ This is required before using Inter

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] }); // ✅ Use lowercase 'inter' as variable name

export const metadata = {
  title: "SEE Life",
  description: "Where You Live Your Dreams",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider> 

    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="Dark"
            enableSystem
            disableTransitionOnChange
            >
            { /* header */ }
            <Header/>
            <main className="min-h-screen"> {children} </main>
            { /* footer */ }
            <footer className="bg-muted/50 py-12"> 
              <div className="container mx-auto px-4 text-center text-gray-300">
                <p> 
                  Made With 💕 By Bit Bytes
                </p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
            </ClerkProvider>
  );
}
