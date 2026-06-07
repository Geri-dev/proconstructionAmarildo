import localFont from "next/font/local";

export const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas",
  display: "swap",
});

export const geist = localFont({
  src: "./fonts/Geist-Regular.ttf",
  variable: "--font-geist",
  display: "swap",
});

/** Apply directly on elements so local .ttf fonts always load (no extra install). */
export const fontDisplay = bebasNeue.className;
export const fontBody = geist.className;
