import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 dark:from-neutral-900 dark:to-neutral-800 dark:text-gray-100 transition-colors">
      <Component {...pageProps} />
    </div>
  )
}
