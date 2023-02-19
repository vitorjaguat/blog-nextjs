import { useRouter } from 'next/navigation';
import NewPostForm from '@/components/NewPostForm';

export default function NewPost() {
  const router = useRouter();

  const addPost = async (newPostData) => {
    const res = await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(newPostData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    router.push('/', undefined, { shallow: false });
  };

  return (
    <div className='w-full pt-[120px] mb-10'>
      <div className='max-w-[1240px] mx-auto'>
        <h2 className=''>New Post</h2>
        <NewPostForm addPost={addPost} />
      </div>
    </div>
  );
}
