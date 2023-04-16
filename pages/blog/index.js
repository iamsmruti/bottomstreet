import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import BlogCard from '../../components/BlogCard'
import { client } from '../../sanity'

const Blog = () => {
    const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const posts = await client.fetch(`*[_type == "post"]{
      title,
      description,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      author->{
        name,
        image{
          asset->{
            _id,
            url
          }
        }
      },
      categories[]->{
        title
      },
      tags[]->{
        title
      },
      publishedAt,
      body
    }`);
    setPosts(posts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    console.log(posts)
  },[posts])

  return (
    <Container>
        <div className='w-[100%] flex justify-center'>
          <h2 className='text-[42px] font-semibold text-center max-w-[700px]'>" Your guide to navigating the dynamic world of stock markets. "</h2>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 mt-[100px] gap-10 md:mx-[70px] mx-[5px] min-h-[50vh]'>
            {posts.map((post, index) => (
                <BlogCard key={index} blog={post} />
            ))}
        </div>
    </Container>
  )
}

export default Blog