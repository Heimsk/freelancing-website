import { Navbar } from "@/components/Navbar";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <title>MoreFreelas.</title>
      </head>
      <body>
        <Navbar />
        <div className="helper">{children}</div>
      </body>
    </html>
  );
}
