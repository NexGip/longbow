import Wrap from "./components/js/Wrapper";
import { COMPANYNAME } from "./components/js/config";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: COMPANYNAME,
  description: `Longbow Investments offers profitable investment packages for professionals and beginners seeking to accumulate wealth. Our expert team invests in profitable businesses, helping you achieve your financial goals. Start building your future today!`,
  icons: [{ rel: "icon", url: "/icon.png" },],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Wrap>{children}</Wrap>
      </body>
    </html>
  );
}
