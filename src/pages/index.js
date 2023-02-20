import Head from 'next/head';
import { projectFirestore } from '@/firebase/config';
import PostItem from '@/components/PostItem';
import Header from '@/components/Header';
import { TfiMore } from 'react-icons/tfi';
import { useState } from 'react';
import Link from 'next/link';

export default function Home(props) {
  const data = props.latestPosts;
  const [showPosts, setShowPosts] = useState(3);
  const handleMore3 = () => {
    if (showPosts <= 6) {
      setShowPosts(showPosts + 3);
    } else {
      return;
    }
  };

  return (
    <>
      <Header />

      <div className='w-full'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='h-full w-full'>
            {data.map(
              (post, i) =>
                i < showPosts && (
                  <PostItem
                    title={post.title}
                    text={post.text}
                    key={post.id}
                    date={post.date}
                    id={post.id}
                  />
                )
            )}
          </div>

          <div className='pb-20 px-2 flex justify-between'>
            {showPosts <= 6 && (
              <div
                className='bg-slate-300 py-2 px-4 rounded-md cursor-pointer'
                onClick={handleMore3}
              >
                <p>next 3 posts</p>
              </div>
            )}

            <Link href={`/posts#${showPosts}`}>
              <div className='bg-slate-300 py-2 px-4 rounded-md cursor-pointer'>
                <p>all posts</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const ref = projectFirestore.collection('posts');

  const data = await ref.orderBy('date', 'desc').limit(9).get();
  const results = data.docs.map((post, i) => ({
    id: post.id,
    ...post.data(),
  }));

  return {
    props: {
      latestPosts: results,
    },
  };
}
