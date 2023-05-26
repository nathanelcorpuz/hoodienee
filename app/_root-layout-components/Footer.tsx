import {
  footerLink1,
  footerLink2,
  footerLink3,
  socialLinks,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import github from "@/public/icons/github.png";

const links = [footerLink1, footerLink2, footerLink3];

export default function Footer() {
  return (
    <footer className="flex flex-col bg-white pt-16 text-black">
      <div className="mx-8 flex flex-col gap-[25px] pb-16">
        <p
          className="
        text-bold font-bold 
        uppercase tracking-widest"
        >
          Quick links
        </p>
        <div className="flex justify-between">
          {links.map((itemLinks, i) => (
            <div key={i} className="flex flex-col">
              {itemLinks.map((link) => (
                <Link
                  className="
                  py-2 
                  text-sm text-black
                  underline
                  underline-offset-8
                  "
                  key={link.href}
                  href={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="mx-8 block h-[1px] bg-black" />
      <div className="flex flex-col gap-[100px] py-16">
        <div className="mx-8 flex flex-col gap-[10px]">
          <p className="text-2xl font-black tracking-tighter text-black">
            HOODiENEE
          </p>
          <p>Premium hoodie comfort</p>
          <div className="flex gap-[20px]">
            {socialLinks.map((link) => (
              <a
                key={link.text}
                href="#"
                className="
                text-sm italic
                text-gray-600 underline underline-offset-8
              "
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-8 flex flex-col gap-[10px]">
          <p>123 Drive, Los Angeles, California</p>
          <p>support@hoodienee.com</p>
        </div>
        <div className="mx-8 text-gray-500">© 2023 All Rights Reserved</div>
      </div>
      <div
        className="
      flex flex-col items-center 
      justify-center gap-[10px] 
      bg-black pb-8
      text-white"
      >
        <a
          className="p-4"
          href="https://github.com/nathanelcorpuz"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image src={github} width={25} height={25} alt="github icon" />
        </a>
        <p className="text-sm text-gray-500">
          A portfolio project by{" "}
          <a
            className="font-bold italic underline"
            href="https://www.linkedin.com/in/nathanelcorpuz/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Nathanel Corpuz
          </a>
        </p>
      </div>
    </footer>
  );
}
