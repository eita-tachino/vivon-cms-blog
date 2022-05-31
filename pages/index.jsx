import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components/index'
import { getPosts } from '../services/index'

// const posts = [
//   { title: 'React Testing', excerpt: 'Learn React Testing' },
//   { title: 'React with Tailwind', excerpt: 'Learn with Tailwind' },
// ]

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>VIVON-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

export default Home
