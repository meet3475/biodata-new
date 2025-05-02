import "./globals.css";

export const metadata = {
  title: "Wedding Biodata || All People Easy and Free Make Biodata.",
  description: "Wedding Biodata Website is userfriendlly and free & easy generated Biodata.",
  keywords: "Wedding, Biodata, Marriage, Matrimony, Profile",
  author: "Wedding Biodata Team",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#B92753",
  robots: "index, follow",
  openGraph: {
    title: "Wedding Biodata || All People Easy and Free Make Biodata.",
    description: "Wedding Biodata Website is userfriendlly and free & easy generated Biodata.",
    url: "https://biodata-new.vercel.app",
    type: "website"
  },
  canonical: "https://biodata-new.vercel.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://biodata-new.vercel.app" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
