const projects = [
  {
    title: 'Universal Rescure',
    desc: 'موقع جمع التبرعات ونشر روابط التبرعات',
    tech: ['JS','PHP','MySQL'],
    img: 'https://raw.githubusercontent.com/AsemNajee/Portfolio/main/src/un.jpg',
    repo: '#'
  },
  {
    title: 'سهل الطالب',
    desc: 'نشر المقالات والاختبارات وتخصيص الملفات الشخصية',
    tech: ['HTML','CSS','PHP','JS'],
    img: 'https://raw.githubusercontent.com/AsemNajee/Portfolio/main/src/default.jpg',
    repo: 'https://github.com/AsemNajee/SahlAltalb'
  },
  {
    title: 'ملخصاتي',
    desc: 'رفع الملخصات وتنظيم البحث عنها',
    tech: ['PHP','MySQL','JS'],
    img: 'https://raw.githubusercontent.com/AsemNajee/Portfolio/main/src/ml.jpg',
    repo: 'https://github.com/AsemNajee/Molkhsati'
  }
]

function Card({p}){
  const hasRepo = p.repo && p.repo !== '#'
  return (
    <article className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition">
      <div className="h-44 w-full overflow-hidden">
        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {p.tech.map(t => (
            <span key={t} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{t}</span>
          ))}
        </div>

        <h3 className="font-bold text-lg">{p.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <a
            href={hasRepo ? p.repo : undefined}
            target="_blank"
            rel="noreferrer"
            className={`text-sm ${hasRepo ? 'text-primary underline' : 'text-gray-400'}`}
            aria-disabled={!hasRepo}
          >
            {hasRepo ? 'عرض الكود' : 'لا يوجد مستودع'}
          </a>

          {hasRepo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="inline-block bg-primary text-white px-3 py-1 rounded-md text-sm">فتح</a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects(){
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-4">المشاريع</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <Card key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
