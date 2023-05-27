"use client";

import arrowDown from "@/public/icons/arrow-down.png";
import { DropdownSelection } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import SupportText from "../texts/SupportText";
import IconButton from "../IconButton";
import Image from "next/image";

const defaultSelection = {
  value: "",
  label: "",
};

const defaultOptions = [
  {
    value: "Sample 1",
    label: "sample-1",
  },
  {
    value: "Sample 2",
    label: "sample-2",
  },
];

export default function Dropdown({
  disabled,
  selections = defaultOptions,
  forcedSelection,
  label = "Dropdown label",
  controls,
}: {
  disabled?: boolean;
  label?: string;
  selections?: DropdownSelection[];
  forcedSelection?: DropdownSelection | null;
  controls: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selection: DropdownSelection;
    setSelection: Dispatch<SetStateAction<DropdownSelection>>;
  };
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, selection, setSelection } = controls;
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  let selectionLabel;

  if (selection.label === "") {
    selectionLabel = "Select an option";
  } else {
    selectionLabel = selection.label;
  }

  if (forcedSelection) {
    selectionLabel = forcedSelection.label;
  }
  return (
    <div
      ref={dropdownRef}
      className={`flex flex-col gap-[5px] ${disabled ? "opacity-[0.5]" : ""}`}
    >
      <SupportText className="uppercase">{label}</SupportText>
      <div
        className={`relative cursor-pointer border border-gray-600 
				bg-black p-3 text-sm hover:bg-gray-700 ${
          selection.label === "" ? "text-gray-400" : ""
        }`}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center justify-between">
          <p>{selectionLabel}</p>
          <IconButton>
            <Image
              src={arrowDown}
              width={20}
              height={20}
              alt="arrow down icon"
            />
          </IconButton>
        </div>
        {isOpen && !forcedSelection ? (
          <div
            className="absolute left-[-1px] right-[-1px] top-[115%]
        z-[100] border border-gray-600
        bg-black text-white"
          >
            {selections.map((option) => (
              <p
                key={option.value}
                className="cursor-pointer p-3 text-sm hover:bg-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  if (disabled) return;
                  setSelection(option);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
