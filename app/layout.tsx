'use client';

import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import CustomCursor from "../components/CustomCursor";
import { ThemeProvider, useTheme } from "../components/ThemeContext";
import PageFlipAnimation from "../components/PageFlipAnimation";
import ErrorBoundary from "../components/ErrorBoundary";
import ScrollProgress from "../components/ScrollProgress";

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
        <title>Aiman Uddin Siam - Frontend Web Developer | Portfolio</title>
        <meta name="description" content="Passionate Frontend Web Developer from Bangladesh specializing in React, Next.js, and modern web technologies. Creating beautiful, performant, and user-friendly digital experiences." />
        <meta name="keywords" content="web developer, frontend developer, react developer, nextjs, typescript, bangladesh, portfolio, web development, ui/ux" />
        <meta name="author" content="Aiman Uddin Siam" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiman-portfolio.vercel.app/" />
        <meta property="og:title" content="Aiman Uddin Siam - Frontend Web Developer" />
        <meta property="og:description" content="Passionate Frontend Web Developer creating amazing digital experiences with React, Next.js, and modern web technologies." />
        <meta property="og:image" content="/images/profile.png" />
        <meta property="og:site_name" content="Aiman Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aiman-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Aiman Uddin Siam - Frontend Web Developer" />
        <meta property="twitter:description" content="Passionate Frontend Web Developer creating amazing digital experiences with React, Next.js, and modern web technologies." />
        <meta property="twitter:image" content="/images/profile.png" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://aiman-portfolio.vercel.app/" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
          <ErrorBoundary>
            <ScrollProgress />
            <LayoutContent>
              {children}
            </LayoutContent>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
