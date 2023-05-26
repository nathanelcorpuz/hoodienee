import Image, { StaticImageData } from "next/image";

export default function HeroWrapper({
  children,
  img = "",
  isMainHero = false,
}: {
  children: React.ReactNode;
  img: StaticImageData | string;
  isMainHero?: boolean;
}) {
  return (
    <div
      className="relative 
      flex flex-col 
      items-center gap-[10px]
      px-4
      py-[100px]
"
    >
      <div className="z-[100] flex flex-col items-center justify-center gap-[20px]">
        {children}
      </div>
      <div
        className="absolute bottom-0 left-0 
        right-0 top-0 opacity-[0.25]"
      >
        <div
          className="
        relative
        h-[100%] w-[100%]"
        >
          <Image
            src={img}
            fill
            className="object-cover object-center"
            alt="sample wide image"
          />
          <span className="absolute bottom-0 left-0 right-0 top-0 [background:linear-gradient(180deg,_rgba(32,32,32,0)_30%,#202020_100%)]" />
          {isMainHero ? null : (
            <span className="absolute bottom-0 left-0 right-0 top-0 [background:linear-gradient(360deg,_rgba(32,32,32,0)_30%,#202020_100%)]" />
          )}
        </div>
      </div>
    </div>
  );
}
