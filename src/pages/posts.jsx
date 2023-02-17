import PostItem from '@/components/PostItem';
import { projectFirestore } from '@/firebase/config';

// const DUMMY = [
//   {
//     id: '1',
//     title: 'Testing',
//     text: `# Hello
//     When working with params (in dynamic pages like [itemId].js), we can extract the requested param using the context.params property. In order to do that, we have to pass the context object to the getStaticProps() function.

// I am *me*
// Alternatively, a plain React app would use \`useEffect\` without dependencies to fetch the data from a server. But this would result in an 'empty' source code, not good for search-engine purposes.

// When working with params (in dynamic pages like [itemId].js), we can extract the requested param using the context.params property. In order to do that, we have to pass the context object to the getStaticProps() function.

// `,
//   },
//   {
//     id: '2',
//     title: 'Hello',
//     text: 'I am **meee**',
//   },
// ];

export default function References(props) {
  const data = props.allPosts;

  return (
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
  );
}

export async function getStaticProps() {
  const ref = projectFirestore.collection('posts');

  const data = await projectFirestore
    .collection('posts')
    .orderBy('date', 'desc')
    .get();
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
