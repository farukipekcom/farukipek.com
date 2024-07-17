import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - Faruk Ipek",
    default: "Faruk Ipek | Front-end Developer",
  },
  description:
    "I am Faruk Ipek, a front-end developer based in Chicago, USA. I have been building stuff on the web for the since 2016.",
  authors: [{ name: "Faruk Ipek" }],
  metadataBase: new URL("https://farukipek.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Faruk Ipek | Front-end Developer",
    description:
      "I am Faruk Ipek, a front-end developer based in Chicago, USA. I have been building stuff on the web for the since 2016.",
    url: "https://nextjs.org",
    siteName: "Faruk Ipek",
    images: [
      {
        url: "https://farukipek.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon/favicon.png",
    shortcut: "/favicon/favicon.png",
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/apple-touch-icon.png",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
