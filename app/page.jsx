'use client';

import Header from '../components/header';
import Link from 'next/link';

export default function Home() {

  const newsletter = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const res = await fetch('https://hook.us1.make.com/avy9ww91w2c695rrahvtjdvehtoyjjff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    if (res.ok) {
      alert('Subscribed to newsletter!');
    } else {
      alert('Failed to subscribe to newsletter.');
    }
  }

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

<h1 className="text-xl font-bold mt-12">Projects</h1>

<div className="mt-4">
  <h2 className="mt-4 underline text-gray-900 hover:text-gray-500"><a href="https://krastie.ai">Krastie AI</a></h2>
  <p>AI Copilot and content generation SaaS</p>

  <h2 className="mt-4 underline text-gray-900 hover:text-gray-500"><a href="https://github.com/sewellstephens/express-authorize">Express Authorize</a></h2>
  <p>Open source authorization for Express made easy</p>
</div>

<h1 className="text-xl font-bold mt-12">Newsletter</h1>
<p className="mt-4">Subscribe to my newsletter to get updates on my latest articles and projects.</p>

<form onSubmit={newsletter} className="mt-4 w-[50%]" method="POST">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
  <div className="flex">
  <input type="email" id="email" name="email" className="mt-1 block w-[80%] px-3 py-2 border border-gray-300 rounded-tl-md rounded-bl-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
  <button type="submit" className="mt-1 w-[20%] inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-tr-md rounded-br-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Subscribe
  </button>
  </div>
</form>

      </div>
  </div>
  )
}
