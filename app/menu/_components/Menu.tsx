import LinkText from "@/components/texts/LinkText";
import { headerMenuLinks } from "@/lib/constants";

export default function Menu() {
  return (
    <div className="flex flex-col">
      {headerMenuLinks.map((link) => (
        <LinkText key={link.href} href={link.href} className="p-3">
          {link.text}
        </LinkText>
      ))}
    </div>
  );
}
