import { useEffect, useRef } from "react";

export default function useClickOutside(handleClickOutsideFn?: () => any) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("clicked outside");
        handleClickOutsideFn && handleClickOutsideFn();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { ref };
}
