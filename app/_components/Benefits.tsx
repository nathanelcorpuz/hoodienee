import { benefits } from "@/lib/constants";
import Benefit from "./Benefit";

export default function Benefits() {
  return (
    <section className="flex flex-col gap-[100px]">
      {benefits.map((benefit) => (
        <Benefit key={benefit.title} benefit={benefit} />
      ))}
    </section>
  );
}
