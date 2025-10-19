'use client';

import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import CustomCursor from "../components/CustomCursor";
import { ThemeProvider, useTheme } from "../components/ThemeContext";
import PageFlipAnimation from "../components/PageFlipAnimation";

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

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isAnimating, animationComplete } = useTheme();
  
  return (
    <PageFlipAnimation 
      isAnimating={isAnimating} 
      onAnimationComplete={animationComplete}
    >
      <CustomCursor />
      {children}
    </PageFlipAnimation>
  );
}

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
        className={`${inter.variable} ${playfairDisplay.variable} antialiased transition-colors duration-300`}
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)'
        }}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
