"use client";

import useClickOutside from "hooks/useClickOutside";
import { useEffect, useRef } from "react";

export default function Cart() {
  const { ref } = useClickOutside();
  return (
    <div
      ref={ref}
      className="fixed right-0
      z-[100] min-h-screen w-[90%]
      border-s border-s-gray-700 
      bg-gray-900
      "
    >
      <div>
        <p>close</p>
      </div>
    </div>
  );
}
