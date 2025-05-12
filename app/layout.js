import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Marriage Biodata maker || Free Easy Wedding Biodata Maker",
  description: "Create your perfect marriage biodata for free! Select and customize biodata templates easily with our wedding biodata maker. Add details and download now.",
  keywords: "marriage biodata maker, biodata template, select template, create biodata, biodata details, wedding biodata, add new biodata, free biodata maker",
  author: "Marriage Biodata Team",
  robots: "index, follow",
  openGraph: {
    title: "Marriage Biodata maker || Free Easy Wedding Biodata Maker",
    description: "Create your perfect marriage biodata for free! Select and customize biodata templates easily with our wedding biodata maker. Add details and download now.",
    url: "https://marriagebiodatamaker.com",
    type: "website"
  },
  canonical: "https://marriagebiodatamaker.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://marriagebiodatamaker.com" />
        <meta name="theme-color" content="#1b7261" />
      </head>
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
