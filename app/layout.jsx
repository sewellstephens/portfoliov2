import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Sewell Stephens",
  description: "Personal portfolio of Sewell Stephens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
