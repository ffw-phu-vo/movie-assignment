import { Inter } from "next/font/google";
import "./globals.css";
import classnames from "classnames";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classnames("container", inter.className)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
