import "./globals.css";
import { Antonio, League_Spartan } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Planets Fact Sites",
  description: "Generated with next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={antonio.className}>{children}</body>
    </html>
  );
}
