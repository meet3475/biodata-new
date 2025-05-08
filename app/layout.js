import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export const metadata = {
  title: "Marriage Biodata maker || Free Easy Wedding Biodata Maker",
  description: "Create your perfect marriage biodata for free! Use our easy and customizable wedding biodata maker to designs professionally.",
  keywords: "marriagebiodatamake, biodata, marriage, maker, application, wedding, marriage, free",
  author: "Marriage Biodata Team",
  robots: "index, follow",
  openGraph: {
    title: "Marriage Biodata maker || Free Easy Wedding Biodata Maker",
    description: "Create your perfect marriage biodata for free! Use our easy and customizable wedding biodata maker to designs professionally.",
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
      <body>
        {children}
      </body>
    </html>
  );
}
