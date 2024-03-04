import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Characters",
  description: "Choose an anime character with whom you can identify. Whether it's Sasuke or Naruto, who do you want to be and who resonates with you more? Make your choice!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      <div className="md:px-20">
        <Header/>
        {children}
        <Footer/>
      </div>
      </body>
    </html>
  );
}
