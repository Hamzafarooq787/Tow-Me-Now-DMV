export default function TopBar() {
  return (
    <div className="bg-surface-container-lowest border-b border-outline-variant py-2">
      <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center text-[10px] sm:text-xs font-medium tracking-wider uppercase text-on-surface-variant">
        <div className="flex items-center gap-4">
          <a
            className="flex items-center gap-2 hover:text-primary transition-colors"
            href="tel:2028120075"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            202-812-0075
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="flex items-center gap-2 hover:text-primary transition-colors"
            href="mailto:Towmenowdmv@gmail.com"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            Towmenowdmv@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
