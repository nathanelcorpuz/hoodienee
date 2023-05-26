import img from "@/public/square/7.png";
import Image from "next/image";

export default function Images() {
  return (
    <div>
      <div
        className="relative 
  h-[200px] w-[290px] 
  border border-gray-500"
      >
        <Image
          src={img}
          fill
          className="object-contain object-center"
          alt="sample product photo"
        />
      </div>
      <div>
        <div className="flex w-[290px] items-center">
          <div
            className="flex w-[100%] 
      items-center justify-center 
      border border-gray-500 p-2"
          >
            <Image src={img} alt="sample" width={50} height={50} />
          </div>
          <div
            className="flex w-[100%] 
      items-center justify-center 
      border border-gray-500 p-2"
          >
            <Image src={img} alt="sample" width={50} height={50} />
          </div>
          <div
            className="flex w-[100%] 
      items-center justify-center 
      border border-gray-500 p-2"
          >
            <Image src={img} alt="sample" width={50} height={50} />
          </div>
          <div
            className="flex w-[100%] 
      items-center justify-center 
      border border-gray-500 p-2"
          >
            <Image src={img} alt="sample" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
