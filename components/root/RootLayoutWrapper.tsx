export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-white text-black 
  dark:bg-black dark:text-white
  [min-height:100vh] flex flex-col justify-between
  "
    >
      {children}
    </div>
  );
}
