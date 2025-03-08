import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/index"
import Footer from "@/components/StickyFooter/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lahiru Thilakasiri | Portfolio",
  description: "Showcasing my expertise in Software Engineering, Web Development, and Quality Assurance.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
       <NavBar/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
