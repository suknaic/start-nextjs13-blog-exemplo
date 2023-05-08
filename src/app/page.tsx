import Link from "next/link";
import PostHero from "./components/PostHero";
import PostPreview from "./components/PostPreview";
import {getAllPost} from './lib/api'

export default function Home() {
  const posts = getAllPost(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 2);

  return (
    <div className='container mx-auto'>
      <main>
        <div className="space-y-4">
          <h1 className="text-center text-5xl" >NextJS blog 13</h1>
          <p className="text-center text-xl">
            Bem vindo ao dinamico markdown blog em nextjs 13.
          </p>
        </div>
        <div className="h-12"></div>
        <PostHero />
        <div className="h-16"></div>

        <p className="text-3xl mb-6">Recent Post</p>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8">
          {recentPosts.map((post) => (
            <div key={post.title}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
        <div className="h-16"></div>
        <Link
          href="/blog"
          className="text-3xl hover:text-gray-300 hover:underline"
        >
          Read More{" -> "}
        </Link>
      </main>
    </div>
  )
}
