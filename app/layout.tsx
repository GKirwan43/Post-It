import Nav from "@/components/navigation/Nav";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { auth } from "@/utils/requests/auth"

export const metadata: Metadata = {
  title: "Post It",
  description: "Online posting site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {}

  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}