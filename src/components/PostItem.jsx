import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { AiOutlineDelete } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { projectFirestore } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthContext } from '@/utils/useAuthContext';

export default function PostItem({ title, text, date, id }) {
  //user is logged in? for update & delete
  const { user } = useAuthContext();

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
    router.replace('/');
  };

  return (
    <div className='border-solid rounded-md shadow-md my-5 bg-slate-200 overflow-hidden'>
      <div className='px-16 py-10'>
        <h2>{title}</h2>

        <ReactMarkdown
          className='whitespace-pre-wrap py-8 list-disc'
          remarkPlugins={[remarkBreaks, remarkGfm]}
          components={{
            code: ({ node, inline, ...props }) => (
              <span
                style={{
                  backgroundColor: '#00000010',
                  borderRadius: '7px',
                  padding: '3px',
                  fontFamily: 'Menlo',
                  lineHeight: '1.7',
                  fontSize: '0.9em',
                }}
                {...props}
              />
            ),
            a: ({ node, inline, ...props }) => (
              <a
                style={{
                  textDecoration: 'underline',
                }}
                {...props}
              />
            ),
          }}
        >
          {text}
        </ReactMarkdown>
        {/* <ReactMarkdown
          components={{
            // Map `h1` (`# heading`) to use `h2`s.
            h1: 'h2',
            // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
            em: ({ node, ...props }) => (
              <i style={{ color: 'red' }} {...props} />
            ),
          }}
        /> */}
      </div>

      <div className='p-4 flex justify-between mt-10 mb-[-15px] bg-slate-50'>
        <div className='flex pb-3'>
          <div
            onClick={user ? handleDelete : () => router.push('/signup')}
            title='Delete'
            className='mr-4 py-1 px-1 w-fit bg-slate-200 rounded-md cursor-pointer'
          >
            <AiOutlineDelete size={20} />
          </div>
          <Link href={user ? `./update?id=${id}` : '/signup'}>
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
