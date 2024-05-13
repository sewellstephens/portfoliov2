import { fetchPageBlocks, fetchPageBySlug, notion } from "../../../lib/notion";
import { notFound } from "next/navigation";
import Header from "@/components/header2";
import { Render } from "@9gustin/react-notion-render";
import '@9gustin/react-notion-render/dist/index.css'

export default async function Page({ params }) {
  const post = await fetchPageBySlug(params.slug);
  if (!post) notFound();
 console.log(post)
 console.log(post.id);
  const blocks = await fetchPageBlocks(post.id);
console.log(blocks);

  return (
    <div className="m-auto max-w-4xl">
      <Header />
      <div className='mt-4'>
        <h1 className="text-3xl mb-4 font-bold">{post.properties.Title.title[0].text.content}</h1>
        <p className='text-gray-600'>{post.properties.Date.date.start}</p>
        <Render blocks={blocks} useStyles />
      </div>
    </div>
  );
}