import { useRef } from 'react';

export default function NewPostForm({ addPost }) {
  const titleRef = useRef();
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPostData = {
      title: titleRef.current.value,
      text: textRef.current.value,
    };

    addPost(newPostData);
  };

  return (
    <form className='mt-10'>
      <div className='w-full py-10 flex justify-between rounded-sm overflow-hidden'>
        <label htmlFor='title' className='py-2 px-4 bg-slate-200'>
          Title:
        </label>
        <input
          ref={titleRef}
          className='w-full p-2 outline-slate-300 focus:outline-1'
          type='text'
          name='title'
          id='title'
          placeholder='Title'
        />
      </div>
      <div className='w-full py-10 flex justify-between rounded-sm overflow-hidden'>
        <label htmlFor='text' className='py-2 px-4 bg-slate-200'>
          Text:
        </label>
        <textarea
          ref={textRef}
          className='w-full p-2 outline-slate-300 focus:outline-1'
          name='text'
          id='text'
          cols='30'
          rows='10'
        ></textarea>
      </div>
      <button
        type='submit'
        onClick={handleSubmit}
        className='p-4 w-full rounded-sm bg-slate-300 text-slate-800 '
      >
        Submit
      </button>
    </form>
  );
}
