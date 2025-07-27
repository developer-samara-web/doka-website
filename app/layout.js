import "@/app/globals.css";

import UserLayout from "@/components/layout/UserLayout/UserLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserLayout>
          {children}
        </UserLayout>
      </body>
    </html>
  );
}
