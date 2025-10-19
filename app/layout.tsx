import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Aiman - Developer Portfolio</title>
        <meta name="description" content="A passionate developer creating amazing digital experiences" />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-white text-black`}
        suppressHydrationWarning={true}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
