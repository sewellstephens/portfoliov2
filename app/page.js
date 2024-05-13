import Header from '../components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-auto max-w-[870px]">
      <Header />
      <div className='flex gap-4'>
        <Link href="/" className='underline hover:text-gray-600 text-gray-900'>
          Home
        </Link>
        <Link href="/blog" className='underline hover:text-gray-600 text-gray-900'>
          Blog
        </Link>
        <Link href="/contact" className='underline hover:text-gray-600 text-gray-900'>
          Contact
        </Link>
      </div>
      <div className='mt-4'>

<h1 className="text-xl font-bold">Projects</h1>

      <div className="grid mt-4 grid-cols-2 gap-4">
<div className="border shadow-sm rounded-md p-4">
  <a href="https://krastie.ai" class="underline text-gray-900 hover:text-gray-600">Krastie AI</a>
  <p>AI document editor team collaboration</p>
</div>
<div className="border shadow-sm rounded-md p-4">
  <a href="https://sewellstephenssoft.gumroad.com/l/high-quality-prompts-biz-owners" class="underline text-gray-900 hover:text-gray-600">ChatGPT Prompts</a>
  <p>ChatGPT prompts for business owners</p>
</div>
<div className="border shadow-sm rounded-md p-4">
  <a href="/" class="underline text-gray-900 hover:text-gray-600">Portfolio</a>
  <p>Open source portfolio built in NextJS</p>
</div>
</div>

      </div>
  </div>
  )
}
