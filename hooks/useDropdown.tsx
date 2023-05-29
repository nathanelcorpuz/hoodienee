"use client";

import { DropdownSelection } from "@/lib/types";
import { useState } from "react";

export default function useDropdown(initialSelection: DropdownSelection) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selection, setSelection] =
    useState<DropdownSelection>(initialSelection);

  const controls = { isOpen, setIsOpen, selection, setSelection };
  return { controls };
}
