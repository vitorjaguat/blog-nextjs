import { useRouter } from 'next/router';
import { projectFirestore } from '@/firebase/config';
import UpdatePostForm from '@/components/UpdatePostForm';
import { useEffect, useState } from 'react';

export default function Update() {
  const router = useRouter();
  const id = router.query.id;
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  //   console.log(id);
  //retrieve post data:
  useEffect(() => {
    // console.log(id);
    projectFirestore
      .collection('posts')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setText(doc.data().text);
          setTitle(doc.data().title);
        }
      })
      .catch((error) => {
        console.log('error getting document from database');
      });
  }, [id]);

  //   console.log(title);

  const updatePost = async (updatedData) => {
    const res = await fetch(`/api/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    // console.log(data);

    router.push('/posts');
  };

  return (
    <div className='w-full pt-[120px] mb-10'>
      <div className='max-w-[1240px] mx-auto'>
        <h2 className=''>Update Post</h2>
        <UpdatePostForm
          titleData={title}
          textData={text}
          updatePost={updatePost}
        />
      </div>
    </div>
  );
}
