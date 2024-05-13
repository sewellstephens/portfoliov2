import Header from '../../components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-auto max-w-4xl">
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

<h1 className="text-xl font-bold">Contact</h1>
<p className='mt-4'>Email: sewellstephens104@gmail.com</p>
<p className='mt-2'>X: <a href="https://twitter.com/sewell_stephens" className="underline text-gray-900 hover:text-gray-600">@sewell_stephens</a></p>
<p className='mt-2'>Github: <a href="https://github.com/sewellstephens" className='underline text-gray-900 hover:text-gray-600'>@sewellstephens</a></p>
</div>
      </div>
  )
}