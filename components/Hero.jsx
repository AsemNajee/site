export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center mt-8">
      <div className="space-y-4">
        <p className="text-sm text-accent font-semibold">مرحبا — أنا</p>
        <h1 className="text-4xl font-extrabold">عاصم عبدالله ناجي</h1>
        <p className="text-gray-600 dark:text-gray-300">مهندس برمجيات مهتم أكثر بجانب الـ backend — تصميم واجهات ونُظم خلفية قوية، وبناء واجهات أمامية عندما يتطلب المشروع ذلك. لدي خبرة جيدة في قواعد البيانات وAPIs، وأعمل باللغات والأُطر المناسبة لبناء خدمات موثوقة وقابلة للتوسع.</p>
        <div className="flex gap-3 mt-4">
          <a href="#projects" className="px-4 py-2 bg-accent text-white rounded-lg shadow">مشاريعي</a>
          <a href="#contact" className="px-4 py-2 border border-accent text-accent rounded-lg">اتصل بي</a>
        </div>
        <div className="mt-6 flex gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2"><svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"/></svg> متاح للتعاون</div>
          <div className="flex items-center gap-2"><svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8M8 8v8M12 4v16"/></svg> لبناء مشاريع الويب</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-72 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-berry/30 to-primary/20 flex items-center justify-center">
          <img src="https://raw.githubusercontent.com/AsemNajee/Portfolio/main/src/image.png" alt="Asem" className="w-56 h-56 rounded-full object-cover border-4 border-white/60" />
        </div>
      </div>
    </section>
  )
}
