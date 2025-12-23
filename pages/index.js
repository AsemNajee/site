import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>عاصم عبدالله ناجي — مطور ويب</title>
        <meta name="description" content="مطور تطبيقات الانترنت — عاصم عبدالله ناجي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <Hero />

        <section id="skills" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">المهارات</h2>
          <Skills />
        </section>

        <section id="projects" className="mt-12 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">آخر المشاريع</h2>
          <Projects />
        </section>

        <section id="contact" className="mt-12 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">تواصل معي</h2>
          <Contact />
        </section>
      </main>
    </>
  )
}
