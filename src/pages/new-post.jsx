import { useRouter } from 'next/router';
import { projectFirestore } from '@/firebase/config';
import { v4 as uuid } from 'uuid';
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

    console.log(data);

    setTimeout(() => {
      router.replace('/');
    }, 2000);
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
