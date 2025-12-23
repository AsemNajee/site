import ThemeToggle from './ThemeToggle'

export default function Header(){
  return (
    <header className="w-full fixed top-0 z-50 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">ع</div>
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-300">عاصم عبدالله ناجي</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">مهندس برمجيات — مطور ويب</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-200">
            <a href="#skills" className="hover:text-accent">المهارات</a>
            <a href="#projects" className="hover:text-accent">المشاريع</a>
            <a href="#contact" className="hover:text-accent">اتصل بي</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
