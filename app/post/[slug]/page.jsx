import { fetchPageBlocks, fetchPageBySlug, notion } from "../../../lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";
import Header from "@/components/header2";

export default async function Page({ params }) {
  const post = await fetchPageBySlug(params.slug);
  if (!post) notFound();
 console.log(post)
 console.log(post.id);
  const blocks = await fetchPageBlocks(post.id);
console.log(blocks);
  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin({}));

  const html = await renderer.render(...blocks);

  return (
    <div className="m-auto max-w-[870px]">
      <Header />
      <div className='mt-4'>
        <h1 className="text-3xl mb-4 font-bold">{post.properties.Title.title[0].text.content}</h1>
        <div className="flex gap-4 mb-4">
          <p className="text-gray-900">{post.properties.Date.date.start}</p>
        </div>
        <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}