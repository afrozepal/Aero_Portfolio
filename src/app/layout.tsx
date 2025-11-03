import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Web Development Services | Get Your Website Done",
  description: "Transform your business with custom websites, e-commerce solutions, and responsive design. Professional web development services with modern purple & black aesthetic. Book a consultation today!",
  keywords: [
    "web development",
    "website design",
    "responsive design",
    "e-commerce",
    "custom websites",
    "professional web services",
    "modern web design",
    "purple theme",
    "business websites"
  ],
  authors: [{ name: "Professional Web Developer" }],
  creator: "Professional Web Developer",
  publisher: "Professional Web Developer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-portfolio-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Professional Web Development Services | Get Your Website Done",
    description: "Transform your business with custom websites, e-commerce solutions, and responsive design. Professional web development services with modern purple & black aesthetic.",
    url: "https://your-portfolio-domain.com",
    siteName: "Professional Web Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Development Services | Get Your Website Done",
    description: "Transform your business with custom websites, e-commerce solutions, and responsive design.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#6c4ae2" />
        <meta name="msapplication-TileColor" content="#6c4ae2" />
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Professional Web Development Services",
              "description": "Custom website development, responsive design, e-commerce solutions, and web maintenance services.",
              "url": "https://your-portfolio-domain.com",
              "telephone": "+1-555-0123",
              "email": "afrozenajam@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "serviceType": "Web Development",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Development",
                      "description": "Custom website development and design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Responsive Design",
                      "description": "Mobile-first responsive web design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Solutions",
                      "description": "Online store development and setup"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance & SEO",
                      "description": "Website maintenance and search engine optimization"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
