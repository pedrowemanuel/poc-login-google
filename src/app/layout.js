import Providers from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "POC LOGIN GOOGLE",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full bg-white">
      <body className={(inter.className, "h-full")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
