export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="mx-auto w-[90%] 
    bg-black px-2 py-4 text-white
    dark:bg-white dark:text-black"
    >
      {children}
    </button>
  );
}
