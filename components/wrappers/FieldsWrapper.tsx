export default function FieldsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-[20px] px-4">{children}</div>;
}
