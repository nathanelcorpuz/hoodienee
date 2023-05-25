export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex grow flex-col">{children}</div>;
}
