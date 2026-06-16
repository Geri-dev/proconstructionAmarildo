/**
 * Shared layout shell for all city pages under a county.
 * Page content is rendered via CityPageContent when city routes are enabled.
 */
export default function CityAreaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="relative bg-white">{children}</main>;
}
