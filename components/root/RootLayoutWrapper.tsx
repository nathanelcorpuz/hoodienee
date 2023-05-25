export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col 
  justify-between bg-white
  text-black [min-height:100vh] 
  dark:bg-black dark:text-white
  "
    >
      {children}
    </div>
  );
}
