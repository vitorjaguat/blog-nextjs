import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

export default function PostItem({ title, text, date }) {
  return (
    <div className='border-solid rounded-md p-4 shadow-md my-5 bg-slate-300'>
      <h2>{title}</h2>

      <ReactMarkdown
        className='whitespace-pre-wrap py-8'
        remarkPlugins={[remarkBreaks, remarkGfm]}
      >
        {text}
      </ReactMarkdown>

      <p className='text-end text-sm'>{date}</p>
    </div>
  );
}
