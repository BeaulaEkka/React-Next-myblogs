import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-quill/dist/quill.snow.css";
import { Inter, Freehand } from "next/font/google";
import Footer from "@/components/Footer";
import SessionProvider from "../components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

const freehand = Freehand({
  weight: "400",
  preload: false,
});
export const metadata = {
  title: "Birdie",
  description: "My Travel Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-${inter} ${freehand}`}>
        <SessionProvider basePath="/api/auth">
          <Navbar />

          <div className="min-h-screen flex grow">{children}</div>

          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
