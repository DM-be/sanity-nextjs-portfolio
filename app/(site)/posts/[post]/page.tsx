import Image from "next/image";
import { getSinglePost } from "@/sanity/sanity.query";
import type { PostType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";
import { CustomComponents } from "../../components/Code";
import { Metadata } from "next";
type Props = {
  params: {
    post: string;
  };
};


// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.post;
  const post: PostType = await getSinglePost(slug)

  return {
    title: `${post.title} | Post`,
    description: post.shortSummary,
    openGraph: {
      images: post.mainImage?.image || "add-a-fallback-project-image-here",
      title: post.title,
      description: post.shortSummary,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.post;
  const post: PostType = await getSinglePost(slug)

  return (<>
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {post.title}
          </h1>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={600}
          height={200}
          src={post.mainImage?.image || fallBackImage}
          alt={post.mainImage?.alt || post.title}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
        <PortableText value={post.content} components={CustomComponents}/>
        </div>
      </div>
    </main>
    </>);
}