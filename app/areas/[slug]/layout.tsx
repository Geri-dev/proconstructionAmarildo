export default function CountyAreaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="relative bg-white">{children}</main>;
}
