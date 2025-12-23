import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiHackerrank, SiLeetcode } from 'react-icons/si'
import { AiOutlineMail } from 'react-icons/ai'

const SOCIALS = {
  github: 'https://github.com/AsemNajee',
  linkedin: 'https://linkedin.com/in/asemnajee',
  hackerrank: 'https://hackerrank.com/AsemNajee',
  leetcode: 'https://leetcode.com/u/asemnajee/',
  whatsapp: 'https://wa.me/+967733417807',
  email: 'mailto:asem.a.najee@gmail.com'
}

function IconButton({href, label, Icon, bg = 'bg-gray-700'}){
  const target = href && href.startsWith('http') ? '_blank' : undefined
  const rel = href && href.startsWith('http') ? 'noreferrer' : undefined
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      title={label}
      className={`${bg} rounded-full p-3 inline-flex items-center justify-center text-white shadow-md hover:opacity-95 transition`}>
      <Icon className="w-5 h-5" />
    </a>
  )
}

export default function Contact(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <form className="bg-white dark:bg-neutral-900/70 border border-transparent dark:border-neutral-800 p-6 rounded-xl shadow">
        <label className="block text-sm text-gray-600 dark:text-gray-300">اسمك</label>
        <input className="mt-2 p-2 border rounded w-full bg-white/90 dark:bg-neutral-800/60 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-neutral-700" placeholder="الاسم" />
        <label className="block text-sm text-gray-600 dark:text-gray-300 mt-4">البريد الإلكتروني</label>
        <input className="mt-2 p-2 border rounded w-full bg-white/90 dark:bg-neutral-800/60 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-neutral-700" placeholder="email@example.com" />
        <label className="block text-sm text-gray-600 dark:text-gray-300 mt-4">الرسالة</label>
        <textarea className="mt-2 p-2 border rounded w-full h-32 bg-white/90 dark:bg-neutral-800/60 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-neutral-700" />
        <div className="mt-4">
          <button className="px-4 py-2 bg-accent text-white rounded">إرسال</button>
        </div>
      </form>

      <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 dark:from-neutral-800/60 dark:to-neutral-900/60 text-gray-700 dark:text-gray-200">
        <h3 className="font-bold mb-4">معلومات التواصل</h3>

        <div className="flex flex-wrap gap-3">
          <IconButton href={SOCIALS.github} label="GitHub" Icon={FaGithub} bg="bg-black" />
          <IconButton href={SOCIALS.linkedin} label="LinkedIn" Icon={FaLinkedin} bg="bg-[#0A66C2]" />
          <IconButton href={SOCIALS.hackerrank} label="HackerRank" Icon={SiHackerrank} bg="bg-[#2EC866]" />
          <IconButton href={SOCIALS.leetcode} label="LeetCode" Icon={SiLeetcode} bg="bg-[#FF6A00]" />
          <IconButton href={SOCIALS.whatsapp} label="WhatsApp" Icon={FaWhatsapp} bg="bg-[#25D366]" />
          <IconButton href={SOCIALS.email} label="Email" Icon={AiOutlineMail} bg="bg-[#6B7280]" />
        </div>
      </div>
    </div>
  )
}