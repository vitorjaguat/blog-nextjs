import Head from 'next/head';
import { projectFirestore } from '@/firebase/config';
import PostItem from '@/components/PostItem';

export default function Home(props) {
  const data = props.allPosts;

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name='description' content='This is a blog!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full pt-[120px]'>
        <div className='max-w-[1240px] mx-auto'>
          <h2 className=''>Blog Posts</h2>
          <div className='mt-10 h-full w-full'>
            {/* {console.log(data)} */}
            {data.map((post) => (
              <PostItem
                title={post.title}
                text={post.text}
                key={post.id}
                date={post.date}
                id={post.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const ref = projectFirestore.collection('posts');

  const data = ref.orderBy('date', 'desc').limit(3).get();
  const results = data.docs.map((post) => ({
    id: post.id,
    ...post.data(),
  }));

  return {
    props: {
      allPosts: results,
    },
    revalidate: 1,
  };
}
