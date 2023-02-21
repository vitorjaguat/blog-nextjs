import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/utils/useAuthContext';

export default function NewPostPreview({ title, text }) {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    user ? router.push('/new-post') : router.push('/signup');
  }, [user]);

  return (
    <div className='p-10 bg-slate-300 w-[50%] rounded-md overflow-scroll h-[100%]'>
      <h2>{title}</h2>
      <ReactMarkdown
        className='whitespace-pre-wrap py-8'
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
          // ol: ({ node, inline, ...props }) => (
          //   <ol>
          //     <li {...props} />
          //   </ol>
          // ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
