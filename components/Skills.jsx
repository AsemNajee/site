const mainSkills = [
  'React', 'Laravel', 'Spring Boot', 'MySQL', 'MongoDB', 'SQLite', 'Git', 'GitHub', 'TailwindCSS', 'Oracle SQL'
]

const otherTech = ['.NET', 'Next.js', 'Express.js', 'Flutter']

const languages = ['Java', 'PHP', 'JavaScript', 'C#', 'SQL', 'TypeScript']

const iconMap = {
  React: '⚛️',
  Laravel: '🌿',
  'Spring Boot': '🌱',
  MySQL: '🗄️',
  MongoDB: '🍃',
  SQLite: '📦',
  Git: '🔧',
  GitHub: '🐙',
  TailwindCSS: '🎨',
  'Oracle SQL': '🛢️',
  '.NET': '🔵',
  'Next.js': '➡️',
  'Express.js': '🚆',
  Java: '☕',
  PHP: '🐘',
  JavaScript: '🟨',
  'C#': '♯',
  SQL: '🗃️',
  TypeScript: '🔷'
}

function Badge({label}){
  return (
    <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-neutral-800/50 rounded-lg border border-gray-100 dark:border-neutral-700 shadow-sm">
      <div className="text-2xl">{iconMap[label] ?? '⭐'}</div>
      <div className="font-medium">{label}</div>
    </div>
  )
}

export default function Skills(){
  return (
    <section className="w-full p-6 rounded-xl">
      <div className="bg-white/60 dark:bg-neutral-900/50 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">المهارات الأساسية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mainSkills.map(s => (
            <Badge key={s} label={s} />
          ))}
        </div>
      </div>

      <div className="mt-6 bg-white/50 dark:bg-neutral-900/40 p-5 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-3">تقنيات أخرى (خبرة بسيطة)</h3>
        <div className="flex flex-wrap gap-3">
          {otherTech.map(t => (
            <span key={t} className="px-3 py-2 bg-primary/5 text-primary rounded-full text-sm">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-white/50 dark:bg-neutral-900/40 p-5 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-3">اللغات البرمجية</h3>
        <div className="flex flex-wrap gap-3">
          {languages.map(l => (
            <span key={l} className="px-3 py-2 bg-accent/5 text-accent rounded-full text-sm">{l}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
