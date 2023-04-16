import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import {PortableText} from '@portabletext/react'
import { client } from '../../sanity'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

const BlogPost = () => {
  const router = useRouter()
  const { slug } = router.query

  const [loading, setLoading] = useState(true)
  
  const [post, setPost] = useState({})

  const getPost = async () => {
    const post = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]{
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
        },
        bio
      },
      categories[]->{
        title
      },
      tags[]->{
        title
      },
      publishedAt,
      body
    }[0]`);
    console.log(post)
    setPost(post)
  }

  useEffect(() => {
    if(slug) getPost()
  }, [slug])
  
  useEffect(() => {
    if(post) setLoading(false)
  }, [post])

  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-3xl font-semibold mt-10 mb-4">{children}</h1>,
      h2: ({children}) => <h2 className="text-[30px] font-semibold mt-8 mb-3">{children}</h2>,
      h3: ({children}) => <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>,
      h4: ({children}) => <h4 className="text-[20px] font-semibold mt-4 mb-1">{children}</h4>,
      blockquote: ({children}) => <blockquote className="border-l-black">{children}</blockquote>,
      normal: ({children}) => <h1 className="text-[18px] font-normal mb-3">{children}</h1>,
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <ul className="mt-xl pl-5">{children}</ul>,
      number: ({children}) => <ol className="mt-lg pl-5">{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,

      // Ex. 2: rendering a custom `link` annotation
      link: ({value, children}) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        return (
          <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
            {children}
          </a>
        )
      },
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <li style={{listStyleType: 'disc', marginBottom: '0.5rem'}}>{children}</li>,
      number: ({children}) => <li style={{listStyleType: 'decimal', marginBottom: '0.5rem'}}>{children}</li>,
  
      // Ex. 2: rendering custom list items
      checkmarks: ({children}) => <li>✅ {children}</li>,
    },
  }

  return (
    <Container>
      {loading && <div>Loading...</div>}
      {!loading && <Link href={"/blog"}><div className='flex items-center mb-3'><BsArrowLeft /><p className='ml-2'>Go Back</p></div></Link>}
      {!loading && <div className='md:mx-[80px] mx-0 mb-10'>
        <h1 className='text-[40px] font-semibold mb-10'>{post.title}</h1>
        <PortableText
          value={post.body}
          components={components}
        />
      </div>}
    </Container>
  )
}

export default BlogPost