import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/sanity/sanity.query";
import type { PostType } from "@/types";

export default async function Project() {
  const posts: PostType[] = await getPosts();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Blog posts I have written
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I have written a few blog posts about my experiences and things I have learned. I hope you enjoy reading them!
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post._id}
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src={post.mainImage.image}
              width={60}
              height={60}
              alt={post.name}
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">{post.title}</h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}