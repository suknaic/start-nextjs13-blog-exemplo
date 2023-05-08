import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';


const postsDirectory = join(process.cwd(), "_posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realslug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realslug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const {data, content} = matter(fileContents);

  type Items = {
    [key: string]: string
  }
  const items: Items = {};

  // ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if(field === 'slug') {
      items[field] = realslug;
    }
    if(field === 'content') {
      items[field] = content;
    }
    if(typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items;
}

export function getAllPost(fields: string[] =[] ) {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug, fields)).sort((post1, post2) => (post1.date > post2.date? -1 : 1 ));
  return posts;
}