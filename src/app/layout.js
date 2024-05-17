import { Inter } from "next/font/google";
import "./globals.css";
import SingleRecepy from "@/components/SingleRecepy";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Choosie-Foodie-App",
  description: "Random food generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SingleRecepy />
        {children}
        </body>
    </html>
  );
}
