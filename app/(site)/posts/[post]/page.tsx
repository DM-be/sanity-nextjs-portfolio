'use client'
import Image from "next/image";
import { getSinglePost } from "@/sanity/sanity.query";
import type { PostType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";
import { customBlockComponents } from "../../components/Code";
import { use } from "react";
import Head from "next/head";
type Props = {
  params: {
    post: string;
  };
};

export default function Project({ params }: Props) {
  const slug = params.post;
  const post: PostType = use(getSinglePost(slug))

  return (<>
    <Head>
    <title>{post.title}</title>
    <meta name='description' content='I hope this tutorial is helpful for you' />
    </Head>
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {post.name}
          </h1>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={600}
          height={200}
          src={post.mainImage?.image || fallBackImage}
          alt={post.mainImage?.alt || post.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
        <PortableText value={post.content} components={customBlockComponents}/>
        </div>
      </div>
    </main>
    </>);
}