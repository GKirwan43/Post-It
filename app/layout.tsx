import Nav from "@/components/navigation/Nav";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post It",
  description: "Online posting site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer className="m-10"></footer>
      </body>
    </html>
  );
}