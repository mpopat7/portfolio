import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Backdrop from "@/components/mc/Backdrop";
import CornerControls from "@/components/mc/CornerControls";
import { site } from "@/data/content";

// Monocraft (SIL OFL 1.1) — a Minecraft-styled pixel face that is free to
// redistribute. Mojang's own font is not, so it is deliberately not used.
const mc = localFont({
  src: "../public/fonts/Monocraft.ttf",
  variable: "--font-mc",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mc.variable} h-full`}>
      <body className="h-full font-mc antialiased">
        <Backdrop />
        {children}
        <CornerControls />
      </body>
    </html>
  );
}
