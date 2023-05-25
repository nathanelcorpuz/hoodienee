export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex grow flex-col gap-[250px] pt-[41px]">{children}</div>
  );
}
