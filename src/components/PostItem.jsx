import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { AiOutlineDelete } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { projectFirestore } from '@/firebase/config';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function PostItem({ title, text, date, id }) {
  //date format:
  const dateNew = new Date(date);
  const dateFormatted =
    dateNew.getFullYear() +
    ', ' +
    dateNew.getMonth() +
    ', ' +
    dateNew.getDate();

  //delete:
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await projectFirestore.collection('posts').doc(id).delete();
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      router.replace('/');
      router.replace('/');
      router.replace('/');
    }, 2000);
  };

  return (
    <div className='border-solid rounded-md shadow-md my-5 bg-slate-300 overflow-hidden'>
      <div className='px-16 py-10'>
        <h2>{title}</h2>

        <ReactMarkdown
          className='whitespace-pre-wrap py-8'
          remarkPlugins={[remarkBreaks, remarkGfm]}
        >
          {text}
        </ReactMarkdown>
      </div>

      <div className='p-4 flex justify-between mt-10 mb-[-15px] bg-slate-50'>
        <div className='flex pb-3'>
          <div
            onClick={handleDelete}
            title='Delete'
            className='mr-4 py-1 px-1 w-fit bg-slate-200 rounded-md cursor-pointer'
          >
            <AiOutlineDelete size={20} />
          </div>
          <Link href={`./update?id=${id}`}>
            <div className='py-1 px-1 w-fit bg-slate-200 rounded-md cursor-pointer'>
              <RxPencil2 size={20} className='mr-auto' />
            </div>
          </Link>
        </div>
        <p className='text-end text-sm'>{dateFormatted}</p>
      </div>
    </div>
  );
}
