export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex grow flex-col pt-[41px]">{children}</div>;
}
