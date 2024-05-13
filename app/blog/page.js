import Header from '../../components/header';
import Link from 'next/link';
import { NotionRenderer } from "@notion-render/client";
import { fetchPages, fetchPageBlocks } from '../../lib/notion';

export default async function Home() {

    const pages = await fetchPages();
    console.log(pages[0].properties.Slug);
    


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

<h1 className="text-xl mb-4 font-bold">Blog</h1>

      <div>
      {pages.map((page) => (
          <div className='mb-2'>
            <Link href={`/post/${page.properties.Slug.rich_text[0].plain_text}`} className="underline text-gray-900 hover:text-gray-600">
            {page.properties.Title.title[0].text.content} - {page.properties.Date.date.start}
          </Link>
          </div>
      ))}
      </div>
      </div>
  </div>
  )
}