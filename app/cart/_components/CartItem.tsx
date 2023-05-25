import img from "../../../public/square/1.png";
import arrowUp from "../../../public/icons/arrow-up.png";
import arrowDown from "../../../public/icons/arrow-down.png";
import arrowUpDark from "../../../public/icons/arrow-up-dark.png";
import arrowDownDark from "../../../public/icons/arrow-down-dark.png";
import x from "../../../public/icons/x.png";
import xDark from "../../../public/icons/x-dark.png";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";

export default function CartItem() {
  const { theme } = useContext(ThemeContext);
  const isThemeDark = theme === "dark";
  return (
    <div
      className="border-b border-b-gray-300 
    px-2 py-4 dark:border-b-gray-700"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Image src={img} width={30} height={30} alt="sample image" />
        </div>
        <div className="w-[30%]">
          <p
            className="truncate text-sm 
          text-gray-600 dark:text-gray-400"
          >
            Really Awesome Hoodie
          </p>
          <p className="text-sm">$70</p>
        </div>
        <div className="flex w-[25%] items-center justify-center">
          <button className="flex h-[20px] w-[20px] items-center justify-center">
            {isThemeDark ? (
              <Image src={arrowUp} width={12} height={12} alt="arrow up icon" />
            ) : (
              <Image
                src={arrowUpDark}
                width={12}
                height={12}
                alt="arrow up icon"
              />
            )}
          </button>
          <div className="w-[fit-content]">
            <input
              type="number"
              className="w-[20px] border-b border-black 
              bg-white text-center dark:border-white dark:bg-black"
              defaultValue={2}
            />
          </div>
          <button className="flex h-[20px] w-[20px] items-center justify-center">
            {isThemeDark ? (
              <Image
                src={arrowDown}
                width={12}
                height={12}
                alt="arrow down icon"
              />
            ) : (
              <Image
                src={arrowDownDark}
                width={12}
                height={12}
                alt="arrow down icon"
              />
            )}
          </button>
        </div>
        <p className="font-black">$140</p>
        <div className="flex w-[10%] items-center justify-center">
          <button>
            {isThemeDark ? (
              <Image src={x} alt="delete icon" width={15} height={15} />
            ) : (
              <Image src={xDark} alt="delete icon" width={15} height={15} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
