import type { Metadata } from "next";
import { Noto_Sans_JP, DM_Sans } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shinoby | 相続・解約手続き SaaS — Iroliss Inc.",
  description:
    "差し戻し、ゼロへ。書類不備・来店対応・繰り返しの確認連絡を構造から解決する、金融機関向け死後手続き自動化SaaS。",
  metadataBase: new URL("https://iroliss.com"),
  openGraph: {
    title: "Shinoby | 相続・解約手続き SaaS — Iroliss Inc.",
    description:
      "差し戻し、ゼロへ。書類不備・来店対応・繰り返しの確認連絡を構造から解決する、金融機関向け死後手続き自動化SaaS。",
    url: "https://iroliss.com",
    siteName: "Iroliss Inc.",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinoby | 相続・解約手続き SaaS — Iroliss Inc.",
    description:
      "差し戻し、ゼロへ。書類不備・来店対応・繰り返しの確認連絡を構造から解決する、金融機関向け死後手続き自動化SaaS。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
