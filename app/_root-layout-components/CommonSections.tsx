import ContactUs from "./ContactUs";
import Newsletter from "./Newsletter";
import VisitUs from "./VisitUs";

export default function CommonSections() {
  return (
    <div className="flex flex-col gap-[200px] py-[300px]">
      <VisitUs />
      <Newsletter />
      <ContactUs />
    </div>
  );
}
