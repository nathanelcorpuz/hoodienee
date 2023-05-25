export default function Button({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <button
        className={`mx-auto w-[100%] 
    bg-black px-6 py-3 text-lg
    font-black
    uppercase text-white
    dark:bg-white dark:text-black ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
