import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PostItem from '@/components/PostItem';

const DUMMY = [
  {
    id: '1',
    title: 'Testing',
    text: `# Hello
I am *me*
Alternatively, a plain React app would use \`useEffect\` without dependencies to fetch the data from a server. But this would result in an 'empty' source code, not good for search-engine purposes.
`,
  },
  {
    id: '2',
    title: 'Hello',
    text: 'I am **meee**',
  },
];

export default function References(props) {
  const data = props.dummy;

  return (
    <div className='w-full pt-[120px]'>
      <div className='max-w-[1240px] mx-auto'>
        <h2 className=''>Blog Posts</h2>
        <div className='mt-10 h-full w-full'>
          {console.log(data)}
          {data.map((post) => (
            <PostItem title={post.title} text={post.text} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      dummy: DUMMY,
    },
    revalidate: 1,
  };
}
