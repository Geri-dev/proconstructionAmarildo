import Image from "next/image";
import heroBg from "@/app/images/MAIN-ROOF.webp";

export function HeroBackgroundImage() {
  return (
    <div className="absolute inset-0">
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/5"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        aria-hidden
      />
    </div>
  );
}
