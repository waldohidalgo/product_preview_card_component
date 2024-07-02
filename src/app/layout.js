import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Product preview card",
  description: "Product preview card Component Challenge Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-cream ${montserrat.className}`}>{children}</body>
    </html>
  );
}
