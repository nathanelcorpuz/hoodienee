export default function PageWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex grow flex-col gap-[250px] pt-[41px] ${className}`}>
      {children}
    </div>
  );
}
