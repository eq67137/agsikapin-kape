import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agsikapin Kapé — Cozy Cafe in Binangonan, Rizal",
  description:
    "Agsikapin Kapé — your cozy spot in Mambog, Binangonan. Silog meals, fresh coffee, sandwiches, cakes, sushi pre-orders. Open daily from 11 AM.",
  keywords: ["cafe", "coffee", "silog", "Binangonan", "Rizal", "food", "restaurant", "sushi"],
  openGraph: {
    title: "Agsikapin Kapé — Cozy Cafe in Binangonan, Rizal",
    description: "Your cozy spot in Mambog, Binangonan. Silog meals, fresh coffee, sandwiches, cakes, sushi pre-orders.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☕</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
