export default function CardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-[100%] shrink-0 flex-col items-center gap-[5px]">
      {children}
    </div>
  );
}
