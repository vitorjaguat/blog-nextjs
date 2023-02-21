import NewPostForm from '@/components/NewPostForm';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/utils/useAuthContext';

export default function NewPost() {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    user ? router.push('/new-post') : router.push('/signup');
  }, [user]);

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
