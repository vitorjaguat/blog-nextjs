import Head from 'next/head';
import { projectFirestore } from '@/firebase/config';
import PostItem from '@/components/PostItem';
import Header from '@/components/Header';

export default function Home(props) {
  const data = props.latestPosts;

  return (
    <>
      <Header />

      <div className='w-full'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='h-full w-full'>
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

  const data = await ref.orderBy('date', 'desc').limit(3).get();
  const results = data.docs.map((post, i) => ({
    id: post.id,
    ...post.data(),
  }));

  return {
    props: {
      latestPosts: results,
    },
    revalidate: 1,
  };
}
