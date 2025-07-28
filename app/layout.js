import "@/styles/globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });

import UserLayout from "@/layouts/UserLayout/UserLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <UserLayout>
          {children}
        </UserLayout>
      </body>
    </html>
  );
}
