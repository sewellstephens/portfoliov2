import Header from '../../components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-auto max-w-4xl">
      <Header />
      <div className='flex gap-4'>
        <Link href="/" className='underline hover:text-gray-500 text-gray-900'>
          Home
        </Link>
        <Link href="/about" className='underline hover:text-gray-500 text-gray-900'>
          About
        </Link>
        <Link href="/blog" className='underline hover:text-gray-500 text-gray-900'>
          Blog
        </Link>
        <Link href="/contact" className='underline hover:text-gray-500 text-gray-900'>
          Contact
        </Link>
      </div>
      <div className='mt-4'>

<h1 className="text-2xl font-bold">I'm a young dev with years of expertise</h1>
<div className='mt-4'>
    <div>
        <p>Hi, I'm Sewell Stephens. I'm an 18 y/o web developer. Got into coding when I was 12 with only knowledge of HTML, CSS, and basic javascript. I created a few sites that no longer exist. In 2020, I created my first functional SaaS during the pandemic. Its long gone now, but I've learned a lot since then.</p>
        <p className='mt-10'>I'm currently working on <a href="https://krastie.ai" className='underline hover:text-gray-500 text-gray-900'>Krastie AI</a> in my free time and its a work in progress.</p>
    </div>
    <div></div>
</div>
</div>
      </div>
  )
}