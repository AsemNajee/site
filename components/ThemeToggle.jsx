import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // initialize theme from localStorage or prefers-color-scheme
    const stored = typeof window !== 'undefined' && localStorage.getItem('theme')
    if(stored) setTheme(stored)
    else {
      const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    if(typeof document === 'undefined') return
    const root = document.documentElement
    if(theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', theme) } catch(e){}
  }, [theme])

  function toggle(){
    setTheme(t => t === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" title="تغيير النمط" className="px-3 py-1 rounded-md bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm border border-transparent hover:shadow-sm transition flex items-center gap-2">
      {theme === 'dark' ? (
        <span className="text-yellow-300">🌞</span>
      ) : (
        <span className="text-gray-700">🌙</span>
      )}
      <span className="text-sm text-gray-700 dark:text-gray-200">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
