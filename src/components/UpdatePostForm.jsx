import { useRef, useState, useEffect } from 'react';
import NewPostPreview from './NewPostPreview';

export default function UpdatePostForm({ updatePost, titleData, textData }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const titleRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    setTitle(titleData);
    setText(textData);
  }, [titleData, textData]);

  // console.log(title);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      title,
      text,
      // date: new Date().toJSON(),
    };
    // console.log(updatedData);
    updatePost(updatedData);
  };

  return (
    <div className='mt-10 flex flex-row justify-between gap-3 px-2 pb-10 h-screen'>
      <form className='w-[45%] h-screen'>
        <div className='w-full pt-2 flex justify-between'>
          <label
            htmlFor='title'
            className='py-2 px-4 rounded-tl-md rounded-bl-md bg-slate-200'
          >
            Title:
          </label>
          <input
            className='w-full p-2 outline-slate-300 focus:outline-1'
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className='w-full py-10 flex justify-between'>
          <label
            htmlFor='text'
            className='py-2 px-4 rounded-tl-md rounded-bl-md bg-slate-200'
          >
            Text:
          </label>
          <textarea
            className='w-full p-2 outline-slate-300 focus:outline-1'
            name='text'
            id='text'
            cols='30'
            rows='25'
            onChange={(e) => setText(e.target.value)}
            value={text}
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
      <NewPostPreview title={title} text={text} />
    </div>
  );
}
