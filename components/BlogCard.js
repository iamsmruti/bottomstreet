import Link from 'next/link'
import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className='flex flex-col md:mb-8 mb-4 md:mx-5'>
        <Link href={`/blog/blog?slug=${blog.slug.current}`}>
            <p className='text-[32px] hover:underline text-semibold'>{blog.title}</p>
        </Link>
        <p className='mt-3'>{blog.description}</p>
        <Link href={`/blog/blog?slug=${blog.slug.current}`}>
            <p className='underline mt-3 hover:no-underline'>Read more</p>
        </Link>
    </div>
  )
}

export default BlogCard